import styled from "styled-components";

export const ButtonPrimary = styled.button`
  width: 100%;
  height: 48px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  margin-top: 24px;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    background-color: var(--color-primary-focus);
  }
`;
