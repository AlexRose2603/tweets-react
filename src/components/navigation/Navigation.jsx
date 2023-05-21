import { Background, Menu, MenuLink } from './Navigation.styled';
export const Navigation = () => {
  return (
    <Background>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/tweets">Tweets</MenuLink>
      </Menu>
    </Background>
  );
};
