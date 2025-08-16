import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders an image with optional alt text.
 */
const ExampleCarouselImage = ({ imageSrc, alt }) => {
  return (
    <img
      src={imageSrc}
      alt={alt}
      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
    />
  );
};

ExampleCarouselImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ExampleCarouselImage.defaultProps = {
  alt: 'Carousel image',
};

export default ExampleCarouselImage;
