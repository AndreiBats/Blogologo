export enum Color {
  Primary = "var(--primary)",
  PrimaryLight = "var(--primaryLight)",
  Secondary = "var(--secondary)",
  Medium = "var(--medium)",
  Light = "var(--light)",
  ExtraLight = "var(--extraLight)",
  Red = "var(--red)",
  White = "var(--white)",
  Gray = "var(--gray)",
}

export enum Breakpoint {
  MD = 768,
  SM = 568,
}

export const Media = {
  Small: `@media screen and (max-width: ${Breakpoint.SM}px)`,
  Medium: `@media screen and (max-width: ${Breakpoint.MD}px)`,
};
