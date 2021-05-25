import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';
import { Link } from 'react-router-dom';

const Place = ({
  id,
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
        <Link to={`/${id}`}>
          <img src={imageThumbnail} height="60" />
        </Link>
      </li>
      <li className={styles.placeDescription}>{description}</li>
      <li>{location}</li>
      <li>${pricePerNight} per night</li>
      <li>{image}</li>
      <li>{imageThumbnail}</li>
      <li>Max occupancy: {maxGuests}</li>
      <li>
        <ul>
          {' '}
          <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
          {pool ? <li>Has a Pool!</li> : null}
          {wifi ? <li>Free Wifi</li> : null}
        </ul>
      </li>
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
