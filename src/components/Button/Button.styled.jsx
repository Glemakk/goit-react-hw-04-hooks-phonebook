import styled from '@emotion/styled'
export const CustomButton = styled.button`
  font-weight: 400;
  line-height: 1.33;
    width: 197px;
  background-color: orange;
  margin-top: 15px;
  margin-left: 29px;
  border: none;
  outline: none;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
    &:focus,
  &:hover {
    box-shadow: 2px 3px 17px 0px rgb(0 0 0 / 78%), -1px 0px 2px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
`
