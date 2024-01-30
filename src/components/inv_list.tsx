import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Inv_ImageList() {
  return (
    <ImageList
      sx={{ width: 800, height: 650 }}
      variant="quilted"
      cols={4}
      rowHeight={250}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '../src/assets/inventory/atv.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '../src/assets/inventory/brakes.jpg',
    title: 'Burger',
  },
  {
    img: '../src/assets/inventory/closeup_helmet.jpg',
    title: 'Camera',
  },
  {
    img: '../src/assets/images/quad-grill.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: '../src/assets/inventory/gear.jpg',
    title: 'Hats',
    cols: 1,
  },
  {
    img: '../src/assets/inventory/harley_gear.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '../src/assets/inventory/name_plate.jpg',
    title: 'Basketball',
    rows:2,
  },
  {
    img: '../src/assets/images/wet.jpg',
    title: 'Fern',
  },
  {
    img: '../src/assets/images/rock_on.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: '../src/assets/images/red_jersey.jpg',
    title: 'Tomato basil',
  },
  {
    img: '../src/assets/images/over_shoulder.jpg',
    title: 'Sea star',
  },
  {
    img: '../src/assets/inventory/husk_bike.jpg',
    title: 'wheel',
    cols: 2,
    rows:2,
  },
  {
    img: '../src/assets/images/duke.jpg',
    title: 'duke',
    cols: 2,
    rows:2,
  },
  {
    img: '../src/assets/images/dirty.jpg',
    title: 'dirty',
    cols: 2,
    
  },
  {
    img: '../src/assets/inventory/quad_light.jpg',
    title: 'dune',
    cols: 2,
    rows:2,
  },
  {
    img: '../src/assets/inventory/white_helmet.jpg',
    title: '2bikes',
    cols: 2,
    rows:2,
  },
];