import React, { useState, useEffect, useRef } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { Article, ImgWrapper, Img, Button } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_SRC =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_SRC }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </a>

          <Button type="button" onClick={() => setLiked(!liked)}>
            {liked ? (
              <RiHeartFill color="red" size="2rem" />
            ) : (
              <RiHeartLine size="2rem" />
            )}
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
