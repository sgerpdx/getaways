import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import styles from '../components/app/App.css';

const Getaways = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces().then(setPlaces);
  }, []);

  return (
    <section className={styles.listContainer}>
      <PlaceList places={places} />
    </section>
  );
};

export default Getaways;
