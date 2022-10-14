import styled from "styled-components";

export const ListStyled = styled.ul`
  background-color: var(--color-grey-2);

  border-radius: 4px;
  padding: 20px;

  margin: 0 20%;

  li {
    background-color: var(--color-grey-4);
    margin-bottom: 16px;
    border-radius: 4px;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 20px;

    h2 {
      margin: 0;
      padding: 0;
      font-weight: 700;
      font-size: 14.21px;
    }

    span {
      color: var(--color-grey-1);
      margin-right: 30px;
      font-weight: 400;
      font-size: 12.182px;
    }
    button {
      color: var(--color-grey-0);
      position: absolute;
      right: 20px;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 14.21px;
  }
  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;
