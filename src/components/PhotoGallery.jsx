import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

const photos = [
  {
    original: "photos/p-1.jpg",
    thumbnail: "photos/p-1.jpg"
  },
  {
    original: "photos/p-2.jpg",
    thumbnail: "photos/p-2.jpg"
  }
];

class PhotoGallery extends Component {
  render() {
    return (
      <ImageGallery
        items={photos}
        autoPlay={true}
        showThumbnails={false}
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    );
  }
}



export default PhotoGallery;
