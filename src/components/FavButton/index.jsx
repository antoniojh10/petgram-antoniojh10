import React from 'react';
import PropTypes from 'prop-types';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => (
  <Button type="button" onClick={onClick}>
    {liked ? (
      <RiHeartFill color="red" size="2rem" />
    ) : (
      <RiHeartLine size="2rem" />
    )}
    {likes} likes!
  </Button>
);

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
