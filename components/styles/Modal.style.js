import styled from "styled-components";

export const Modal = styled.div`
  width: 50vw;
  height: 80vh;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 1rem;
`;
export const OverLay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;
