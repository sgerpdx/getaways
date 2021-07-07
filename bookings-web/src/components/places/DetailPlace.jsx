import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';
//import { Link } from 'react-router-dom';


const DetailPlace = ({
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

DetailPlace.propTypes = {
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

export default DetailPlace;

///// REV TWO:
// const DetailPlace = ({ place }) => {
//   return (
//     <ul className={styles.placeItemList}>
//       <li className={styles.placeHeading}>
//         <h3>{place.name}</h3>
//       </li>
//       <li>
//         <img src={place.imageThumbnail} height="60" />
//       </li>
//       <li className={styles.placeDescription}>{place.description}</li>
//       <li>{place.location}</li>
//       <li>${place.pricePerNight} per night</li>
//       <li>{place.image}</li>
//       <li>{place.imageThumbnail}</li>
//       <li>Max occupancy: {place.maxGuests}</li>
//       <li>
//         <ul>
//           {' '}
//           <li>{place.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
//           {place.pool ? <li>Has a Pool!</li> : null}
//           {place.wifi ? <li>Free Wifi</li> : null}
//         </ul>
//       </li>
//     </ul>
//   );
// };

///// REVISION ONE:
//  const DetailPlace = ({ place }) => {
//    const placeSpecifics = ({
//      name,
//      description,
//      location,
//      pricePerNight,
//      image,
//      imageThumbnail,
//      maxGuests,
//      petFriendly,
//      pool,
//      wifi,
//    }) => {
//      return (
//        <ul className={styles.placeItemList}>
//          <li className={styles.placeHeading}>
//            <h3>{name}</h3>
//          </li>
//          <li>
//            <img src={imageThumbnail} height="60" />
//          </li>
//          <li className={styles.placeDescription}>{description}</li>
//          <li>{location}</li>
//          <li>${pricePerNight} per night</li>
//          <li>{image}</li>
//          <li>{imageThumbnail}</li>
//          <li>Max occupancy: {maxGuests}</li>
//          <li>
//            <ul>
//              {' '}
//              <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
//              {pool ? <li>Has a Pool!</li> : null}
//              {wifi ? <li>Free Wifi</li> : null}
//            </ul>
//          </li>
//        </ul>
//      );
//    };
//  };

// props = an array with one object
// const placeObject = ({ place }) => {
//   return {
//     name: place.name,
//     description: place.description,
//     location: place.location,
//     pricePerNight: place.pricePerNight,
//     image: place.image,
//     imageThumbnail: place.imageThumbnail,
//     maxGuests: place.maxGuests,
//     petFriendly: place.petFriendly,
//     pool: place.pool,
//     wifi: place.wifi,
//   };
// };
