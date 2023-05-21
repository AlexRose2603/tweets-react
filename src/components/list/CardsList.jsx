import { TweetCard } from 'components/card/TweetCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectCards } from 'redux/selectors';
import { Background, List } from './CardsList.styled';
import { Button } from 'components/button/LoadMore';
export const CardsList = ({ onLoadMore }) => {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Background>
      <List>
        {cards.map(card => {
          return <TweetCard key={card.id} {...card} onClick={onLoadMore} />;
        })}
      </List>
      <Button onClick={onLoadMore} />
    </Background>
  );
};
