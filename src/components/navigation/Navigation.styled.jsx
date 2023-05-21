import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Background = styled.header`
  width: 800px;
  margin: 20px auto;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const MenuLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Source Code Pro', monospace;
  font-size: 35px;
  font-weight: bold;
  padding: 10px 15px;
  border: 3px solid #311c61;
  border-radius: 5px;
  transition: 0.3s;
  -webkit-text-stroke: 1px #311c61;
  &:hover {
    color: #5cd3a8;
  }
  &.active {
    background-color: #5cd3a8;
    color: white;
  }
`;
