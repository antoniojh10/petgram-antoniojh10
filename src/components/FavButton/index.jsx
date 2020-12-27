import React from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {liked ? (
        <RiHeartFill color="red" size="2rem" />
      ) : (
        <RiHeartLine size="2rem" />
      )}
      {likes} likes!
    </Button>
  );
};
