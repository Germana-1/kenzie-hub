import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  text-decoration: none;
  height: 40.11px;
  padding: 0px 16.2426px;

  background: var(--color-grey-3);
  color: var(--color-grey-0);

  border-radius: 4px;

  font-weight: 600;
  font-size: 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-grey-2);
  }
`;

export const LinkRegisterStyled = styled(Link)`
  text-decoration: none;

  margin-top: 22px;
  padding: 0px 22.3336px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10.15px;

  width: 100%;
  height: 48px;

  font-weight: 500;
  font-size: 16px;

  background: var(--color-grey-1);
  color: var(--color-grey-0);

  border: 1.2182px solid #868e96;
  border-radius: 4px;

  &:hover {
    background-color: var(--color-grey-2);
  }
`;
