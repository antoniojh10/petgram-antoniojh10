import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { photos } from '../../../api/db.json';

export const ListOfPhotoCards = () => (
  <ul>
    {photos.map((photo) => (
      <li key={photo.id}>
        <PhotoCard id={photo.id} likes={photo.likes} src={photo.src} />
      </li>
    ))}
  </ul>
);
