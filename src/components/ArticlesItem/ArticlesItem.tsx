import {
  Description,
  MainDate,
  MainImage,
  StyledArticlesItem,
  Title,
} from "./styles";

interface IProps {
  publishedAt: string;
  title: string;
  imageUrl: any;
}

export const ArticlesItem = ({ title, publishedAt, imageUrl }: IProps) => {
  return (
    <StyledArticlesItem>
      <MainImage src={imageUrl} alt="mainphoto" />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
      </Description>
    </StyledArticlesItem>
  );
};
