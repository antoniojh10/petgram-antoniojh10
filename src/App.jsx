import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { Logo } from './components/Logo';

/**
 * Hola mundo
 */
const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfPhotoCards categoryId={2} />
        </>
      )}
    </>
  );
};

export default App;
