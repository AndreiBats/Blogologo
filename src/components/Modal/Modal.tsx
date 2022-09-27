import { useNavigate } from "react-router-dom";
import { Portal, PortalTarget } from "../Portal/Portal";
import { Overlay, Title, ModalContainer, ModalContent, CloseButton } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Modal = ({ toggleModal }: IProps) => {
  const navigate = useNavigate();

  return (
    <Portal target={PortalTarget.MODAL}>
      <Overlay>
        <ModalContainer>
          <ModalContent>
            <Title>Congratulation!!! You've been registered!</Title>
            <CloseButton
              type="button"
              onClick={() => {
                toggleModal(false);
                navigate("/");
              }}
            >
              Got it!
            </CloseButton>
          </ModalContent>
        </ModalContainer>
      </Overlay>
    </Portal>
  );
};
