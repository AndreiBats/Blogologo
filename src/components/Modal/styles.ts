import styled from "styled-components";
import { Color } from "ui";

const Overlay = styled.div`
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -75px;
`;

const ModalContent = styled.div`
  text-align: center;
  padding: 30px 20px;
  background-color: ${Color.Gray};
  border-radius: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const CloseButton = styled.button`
  font-size: 16px;
  font-weight: bold;

  padding: 15px;
  background-color: ${Color.PrimaryLight};
  border-radius: 16px;
`;

export { Overlay, Title, ModalContainer, ModalContent, CloseButton };
