import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { likeAnonymousPhoto } from '../../graphql/likeAnonymousPhoto';
import { FavButton } from '../FavButton';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_SRC =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_SRC }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [toggleLike] = useMutation(likeAnonymousPhoto, {
    variables: { input: { id } },
  });

  const handleFavClick = () => {
    if (!liked) toggleLike();
    setLiked(!liked);
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </a>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
