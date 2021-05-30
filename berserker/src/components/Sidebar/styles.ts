import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 35%;
  max-width: 415px;

  border: 1px solid var(--border);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 0 15px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }

  div {
    display: flex;
  }
`;
export const Search = styled.div``;
export const Chatlist = styled.div``;
