import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  height: 70px;

  &:hover {
    background: #f5f5f5;
  }

  img {
    width: 50px;
    border-radius: 50%;
    margin-left: 15px;
  }
`;
export const Content = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--border-search);
  padding-right: 15px;
  margin-left: 15px;

  flex-wrap: wrap;
  min-width: 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
export const Name = styled.div`
  font-size: 17px;
  color: #000;
  width: 90% !important;
`;
export const Date = styled.div`
  font-size: 12px;
  color: #999;
  width: 10% !important;
`;
export const LastMsg = styled.div`
  font-size: 14px;
  color: #999;
  display: flex;
  width: 100%;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }
`;
