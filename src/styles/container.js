import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: var(--color-grey-3);
  color: var(--color-grey-0);
  width: 369px;
  height: fit-content;
  margin: 0 auto;
  padding: 45px 22.5px;

  h1 {
    font-weight: 700;
    font-size: 18px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      align-self: start;
      font-weight: 400;
      font-size: 12.182px;
      margin: 22px 0;
    }

    input {
      background-color: var(--color-grey-2);
      color: var(--color-grey-0);

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;

      width: 329.93px;
      height: 48px;

      padding: 0 16px;

      font-weight: 400;
      font-size: 16.2426px;
      text-align: start;
    }

    select {
      background-color: var(--color-grey-2);
      color: var(--color-grey-0);

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;

      width: 329.93px;
      height: 48px;

      padding: 0 16px;

      font-weight: 400;
      font-size: 16.2426px;
      option {
        text-align: start;
      }
    }
  }

  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-primary);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    margin-top: 22px;
    color: var(--color-grey-1);
  }

  @media (max-width: 768px) {
    max-width: 369px;
    width: 90%;

    form {
      input {
        width: 100%;
      }
      select {
        width: 100%;
      }
    }
  }
`;

export const ContainerDashboardStyled = styled.div`
  color: var(--color-grey-0);

  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 118px;
    padding: 0 20%;
    border-bottom: solid 1px var(--color-grey-3);

    h1 {
      font-weight: 700;
      font-size: 18px;
    }
    span {
      font-weight: 400;
      font-size: 12px;
      color: var(--color-grey-1);
    }
  }
  .containerBtnAdd {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20%;
    h2 {
      font-weight: 600;
      font-size: 16px;
    }
    button {
      background-color: var(--color-grey-2);
      width: 32.49px;
      height: 32px;
      border-radius: 4px;
      color: var(--color-grey-0);
      padding: 5px;
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .user {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      padding: 0 5%;
    }

    .containerBtnAdd {
      padding: 20px 5%;
    }
  }
`;
