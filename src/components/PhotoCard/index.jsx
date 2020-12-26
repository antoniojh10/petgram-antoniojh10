import React from 'react';
import { RiHeartLine } from 'react-icons/ri';
import { ImgWrapper, Img, Button } from './styles';

const DEFAULT_SRC =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_SRC }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={src} alt={id} />
      </ImgWrapper>
    </a>

    <Button type="button">
      <RiHeartLine size="2rem" />
      {likes} likes!
    </Button>
  </article>
);
