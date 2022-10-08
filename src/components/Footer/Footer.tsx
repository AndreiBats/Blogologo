import { changeTheme } from "app/features/userSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors/userSelectors";
import { useToggle } from "hooks/index";
import { StyledFooter, CopyRight, ThemeToggle } from "./styles";

export const Footer = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getUserInfo);
  const [isDark, toggleIsDark] = useToggle();

  const setAttributeTheme = (themeValue: "light" | "dark") => {
    document.documentElement.setAttribute("theme", `${themeValue}`);
  };

  setAttributeTheme(theme);

  const handleTheme = () => {
    if (theme === "light") {
      dispatch(changeTheme("dark"));
    } else {
      dispatch(changeTheme("light"));
    }

    setAttributeTheme(theme);
    toggleIsDark();
  };

  return (
    <StyledFooter>
      <CopyRight>©2022 Blogologo</CopyRight>

      {isDark ? (
        <ThemeToggle type="button" onClick={handleTheme}>
          Light theme
        </ThemeToggle>
      ) : (
        <ThemeToggle type="button" onClick={handleTheme}>
          Dark theme
        </ThemeToggle>
      )}
    </StyledFooter>
  );
};
