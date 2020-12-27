/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PhotoCard } from '../components/PhotoCard';
import { getSinglePhoto } from '../graphql/getSinglePhoto';

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data: { photo = {} } = {} } = useQuery(
    getSinglePhoto,
    { variables: { id } }
  );

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error</h3>;

  return <PhotoCard {...photo} />;
};
