import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 24px;
  margin-left: 30px;
  background-color: #f5e753;
  padding: 5px 7px;
  border: 2px solid #311c61;
  color: #311c61;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &:hover {
    background-color: #311c61;
    color: white;
  }
`;
