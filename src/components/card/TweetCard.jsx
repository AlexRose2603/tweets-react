import { useEffect, useState } from 'react';
import {
  Wrapper,
  DecorImg,
  Line,
  Circle,
  Avatar,
  Name,
  Tweets,
  Followers,
  Button,
} from './TweetCard.styled';
import decor from 'picture1.png';
// import { useDispatch } from 'react-redux';
// import { addFollower, deleteFollower } from 'redux/operations';

export const TweetCard = card => {
  // const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(false);
  console.log(card);
  const { id, name, followers, avatar, tweets } = card;

  useEffect(() => {
    const savedFollowedUsers = localStorage.getItem('followedUsers');
    if (savedFollowedUsers) {
      const parsedFollowedUsers = JSON.parse(savedFollowedUsers);
      setIsFollowing(parsedFollowedUsers.includes(id));
    }
  }, [id]);

  const handleFollowClick = () => {
    const newFollowState = !isFollowing;
    setIsFollowing(newFollowState);
    // if (newFollowState) {
    //   addFollower(id);
    // } else {
    //   deleteFollower(id);
    // }
    // const onFollowing = () => {
    //   dispatch(addFollower(card.id));
    // };
    // const onUnfollowing = () => {
    //   dispatch(deleteFollower(card.id));
    // };

    const savedFollowedUsers = localStorage.getItem('followedUsers');
    let updatedFollowedUsers = [];

    if (savedFollowedUsers) {
      updatedFollowedUsers = JSON.parse(savedFollowedUsers);
    }

    if (newFollowState) {
      updatedFollowedUsers.push(id);
    } else {
      updatedFollowedUsers = updatedFollowedUsers.filter(
        userId => userId !== id
      );
    }

    localStorage.setItem('followedUsers', JSON.stringify(updatedFollowedUsers));
  };

  return (
    <Wrapper>
      <DecorImg src={decor} alt="Picture" />
      <Line>
        <Circle>
          <Avatar src={avatar} alt="User's photo" />
        </Circle>
      </Line>
      <Name>{name}</Name>
      <Tweets> {tweets.toLocaleString('en-US')} tweets</Tweets>
      <Followers> {followers.toLocaleString('en-US')} followers</Followers>
      <Button
        type="button"
        onClick={handleFollowClick}
        style={{ backgroundColor: isFollowing ? '#5cd3a8' : '#ebd8ff' }}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>

      {/* {isFollowing ? (
        <button onClick={onUnfollowing}>Unfollow</button>
      ) : (
        <button onClick={onFollowing}>Follow</button>
      )} */}
    </Wrapper>
  );
};
