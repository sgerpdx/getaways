import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <ul className={styles.placeItemList}>
      <li className={styles.placeHeading}>
        <h3>{name}</h3>
      </li>
      <li>
        <img src={imageThumbnail} height="60" />
      </li>
      <li>{description}</li>
      <li>{location}</li>
      <li>{pricePerNight}</li>
      <li>{image}</li>
      <li>{imageThumbnail}</li>
      <li>{maxGuests}</li>
      <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
      {pool ? <li>Has a Pool!</li> : null}
      {wifi ? <li>Free Wifi</li> : null}
    </ul>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
