import styled from "styled-components";

export const ModalStyled = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 369px;

    background-color: var(--color-grey-3);
    padding: 22px;
    position: relative;
    border-radius: 4px;

    div {
      display: flex;
      height: 50px;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-grey-2);
      position: absolute;
      left: 0;
      top: 0;

      h2 {
        font-weight: 700;
        font-size: 14px;
        padding: 0;
      }

      span {
        cursor: pointer;
      }
    }

    form {
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      label {
        align-self: start;
        font-weight: 400;
        font-size: 12.182px;
        margin: 18px 0;
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
      span {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-primary);
      }
      .containerBtns {
        display: flex;
        position: sticky;
        width: 100%;
        padding: 0;
        background-color: var(--color-grey-3);
        justify-content: space-between;
        .btnEdit {
          width: 70%;
        }
      }
    }
  }
`;
