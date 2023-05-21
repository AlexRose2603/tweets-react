import { Border1, Border2, Border3, Greeting } from './Home.styled';

export const Home = () => {
  return (
    <Border1>
      <Border2>
        <Border3>
          <Greeting>
            This is your best application to stay updated with the most
            important ideas and thoughts of your friends. Follow more people to
            share and discuss what really matters.
            <Greeting>
              Here, it's not dangerous to be followed by someone...
            </Greeting>
          </Greeting>
        </Border3>
      </Border2>
    </Border1>
  );
};
