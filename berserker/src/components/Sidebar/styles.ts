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

  .actions {
    display: flex;

    .actions-btn {
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      width: 40px;
      border-radius: 20px;
    }
  }
`;
export const Search = styled.div`
  background: var(--background-search);
  border-bottom: 1px solid var(--border-search);
  padding: 5px 15px;

  .search {
    display: flex;
    align-items: center;

    background: var(--shape);
    height: 40px;
    border-radius: 20px;
    padding: 0 10px;

    input {
      flex: 1;
      border: 0;
      outline: 0;
      background: transparent;
      margin-left: 10px;
    }
  }
`;
export const Chatlist = styled.div`
  flex: 1;
  background: var(--shape);
  overflow-y: auto;
`;
