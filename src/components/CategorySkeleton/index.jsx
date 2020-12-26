import React from 'react';
import {
  ContainerCategorySkeleton,
  CategoryTitle,
  CategoryImage,
} from './styles';

const CategorySkeleton = () => (
  <ContainerCategorySkeleton>
    <CategoryImage />
    <CategoryTitle />
  </ContainerCategorySkeleton>
);

export default CategorySkeleton;
