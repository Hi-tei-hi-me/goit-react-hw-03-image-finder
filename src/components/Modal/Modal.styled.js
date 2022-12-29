import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  z-index: 150;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWindow = styled.div`
  max-width: 95vw;
  max-height: 90vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
`;
