import {
  Description,
  MainDate,
  MainImage,
  StyledBlogsItem,
  Title,
} from "./styles";

interface IProps {
  publishedAt: string;
  title: string;
  imageUrl: any;
}

export const BlogsItem = ({ title, publishedAt, imageUrl }: IProps) => {
  return (
    <StyledBlogsItem>
      <MainImage src={imageUrl} alt="mainphoto" />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
      </Description>
    </StyledBlogsItem>
  );
};
