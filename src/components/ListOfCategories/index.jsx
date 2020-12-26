import React, { useState, useEffect } from 'react';
import { useCategoriesData } from '../../hooks/useCategoriesData';
import { Category } from '../Category';
import CategorySkeleton from '../CategorySkeleton';
import { List, Item } from './styles';
// import { categories as mockCategories } from '../../../api/db.json';

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 180;
      if (showFixed !== newShowFixed) setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5].map((skeleton) => (
            <Item key={skeleton}>
              <CategorySkeleton />
            </Item>
          ))
        : categories.map((category) => (
            <Item key={category.id}>
              <Category
                cover={category.cover}
                path={category.path}
                emoji={category.emoji}
              />
            </Item>
          ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
