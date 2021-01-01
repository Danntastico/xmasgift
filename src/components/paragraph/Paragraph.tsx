import React, { FunctionComponent } from "react";
import styled from "styled-components";
interface ParagraphProps {
  content?: string;
  image?: string;
  contentPosition?: string;
  altImage?: string;
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  & > p {
    padding: 10px;
    font-size: 0.9em;
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 400px;
  border-radius: 20px;
  box-shadow: 10px 9px 17px -10px rgba(0, 0, 0, 0.45);
`;

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  content,
  image,
  altImage,
  contentPosition = "right",
}) => {
  return (
    <Container>
      {contentPosition === "right" ? (
        <>
          {image && (
            <ImageContainer>
              <ImageStyled src={image} alt={altImage} />
            </ImageContainer>
          )}
          <ContentContainer>
            <p>{content}</p>
          </ContentContainer>
        </>
      ) : (
        <>
          <ContentContainer>
            <p>{content}</p>
          </ContentContainer>
          {image && (
            <ImageContainer>
              <ImageStyled src={image} alt={altImage} />
            </ImageContainer>
          )}
        </>
      )}
    </Container>
  );
};
