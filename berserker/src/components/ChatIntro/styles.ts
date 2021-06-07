import styled from "styled-components";

export const Container = styled.div`
  background: #f8f9fb;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 6px solid #4adf83;

  img {
    width: 250px;
  }

  h1 {
    font-size: 32px;
    margin-top: 30px;
    font-weight: normal;
    color: #525252;
  }
  h2 {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 20px;
    margin-top: 18px;
    font: inherit;
    text-align: center;
  }
`;
