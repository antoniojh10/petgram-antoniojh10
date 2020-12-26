import React from 'react';
import { Anchor, Image } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

/**
 *
 * @param cover {string} Link to the image
 * @param path {string} Route to follow
 * @param emoji {string} Emoji to render
 */
export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt="cover" />
    {emoji}
  </Anchor>
);
