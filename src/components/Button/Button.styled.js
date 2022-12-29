import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  cursor: pointer;
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  text-align: center;
  font-size: 18px;
  color: #d3d3d3;
  background-color: #637246;
  border: 1.5px solid #364617;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #364617;
    color: #fff;
  }
`;
