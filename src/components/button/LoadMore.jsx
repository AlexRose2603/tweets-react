import { useDispatch, useSelector } from 'react-redux';
import { LoadMoreButton } from './LoadMore.styled';
import { fetchMoreCards } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
export const Button = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onLoadMore = () => {
    console.log('Load more button clicked');
    dispatch(fetchMoreCards());
  };
  return (
    <>
      <LoadMoreButton type="button" disabled={isLoading} onClick={onLoadMore}>
        {isLoading ? 'Loading...' : 'Load more'}
      </LoadMoreButton>
    </>
  );
};
