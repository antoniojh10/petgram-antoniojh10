import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_FAVS } from '../graphql/getFavs';
import { ListOfFavs } from '../components/ListOfFavs';

export const FavsWithQuery = () => {
  const { loading, error, data: { favs = [] } = {} } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error</h3>;

  return <ListOfFavs favs={favs} />;
};
