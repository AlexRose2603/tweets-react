import styled from '@emotion/styled';

export const Wrapper = styled.li`
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -1%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DecorImg = styled.img`
  width: 308px;
  margin-top: 28px;
  margin-bottom: 30px;
`;

export const Line = styled.div`
  width: 380px;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.06),
    inset 0px -1.72px 3.4px #ae7be3, inset 0px 3.4px 2.5px #fbf8ff;
  position: relative;
  margin-bottom: 62px;
`;
export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.06),
    inset 0px -1.72px 3.4px #ae7be3, inset 0px 3.4px 2.5px #fbf8ff;
  position: absolute;
  top: -40px;
  left: 38%;
  z-index: 20;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

export const Name = styled.p`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 0;
`;

export const Tweets = styled.p`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 0;
`;

export const Followers = styled.p`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 26px;
  margin-top: 0;
`;

export const Button = styled.button`
  padding: 14px 56px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  background: #ebd8ff;
  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-width: 0;
  margin-bottom: 36px;
  color: #373737;
  cursor: pointer;
  transition: 0.3s;
  &:hover,
  &:focus {
    background: #5cd3a8;
  }
`;
