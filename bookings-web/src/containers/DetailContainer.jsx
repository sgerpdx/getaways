import React, { useState, useEffect } from 'react';
//import Place from '../components/places/Place';
import DetailPlace from '../components/places/DetailPlace';
import { getOnePlace } from '../services/placesApi';

const DetailContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [onePlace, setOnePlace] = useState([]);
  console.log('>>>>>ID', props.match.params.id);
  useEffect(() => {
    getOnePlace(props.match.params.id)
      .then(setOnePlace)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <section>
      <DetailPlace {...onePlace} />
      <h4>that this has loaded</h4>
    </section>
  );
};

export default DetailContainer;
