import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { likePhoto } from '../../graphql/likePhoto';
import { FavButton } from '../FavButton';
// import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_SRC =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_SRC }) => {
  const [show, element] = useNearScreen();
  // const key = `like-${id}`;
  // const [liked, setLiked] = useLocalStorage(key, false);
  const [toggleLike] = useMutation(likePhoto, {
    variables: { input: { id } },
  });

  const handleFavClick = () => {
    toggleLike();
    // setLiked(!liked);
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, _componentName) => {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(propName, 'value must be defined');
    }
    if (propValue < 0) {
      return new Error(propName, 'value must be greater than 0');
    }
  },
};
