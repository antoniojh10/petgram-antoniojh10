import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getPhotos } from '../../graphql/getPhotos';
import { PhotoCard } from '../PhotoCard';
// import { photos } from '../../../api/db.json';

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data: { photos = [] } = [] } = useQuery(getPhotos, {
    variables: { categoryId },
  });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error</h3>;

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard id={photo.id} likes={photo.likes} src={photo.src} />
        </li>
      ))}
    </ul>
  );
};
