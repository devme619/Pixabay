import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const SearchList = (props) => {
  return (
    <div>
        {props.itemData?(<ImageList sx={{ width: 'auto', height: 450 }} cols={3} rowHeight={164}>
    {props.itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={item.largeImageURL}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>):''}
    
  </div>
  )
}

export default SearchList
