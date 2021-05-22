import React, { useState, useEffect } from 'react';
import Place from '../components/places/Place';
import DetailPlace from '../components/places/DetailPlace';

export default function DetailContainer() {
  const [loading, setLoading] = useState(true);
  //const [placeItem, setPlaceItem] = useState([]);

  useEffect(() => {
    //   functionHere()
    //     .then(setPlaceItem)
    //     .finally(() => setLoading(false));
    setLoading(false);
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <h3>So it seems...</h3>
      <h4>that this has loaded</h4>
    </>
  );
}
