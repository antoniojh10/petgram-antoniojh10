import React from 'react';
import { Layout } from '../components/Layout';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

/**
 * Hola mundo
 */
export const Home = ({ id }) => (
  <Layout
    title="Tu app de fotos de mascotas"
    subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
  >
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
);
