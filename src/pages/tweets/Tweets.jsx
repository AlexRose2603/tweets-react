import { CardsList } from 'components/list/CardsList';
import { useLocation } from 'react-router-dom';
import { FcExternal } from 'react-icons/fc';
import { GoBackLink } from './Tweets.styled';
export const Tweets = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <>
      <GoBackLink to={backLink}>
        <FcExternal
          style={{
            marginRight: '5px',
            transform: 'rotate(-90deg)',
            width: '36px',
            height: '32px',
          }}
        />
        Go back
      </GoBackLink>
      <CardsList />
    </>
  );
};
