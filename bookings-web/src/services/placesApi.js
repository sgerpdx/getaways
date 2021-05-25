export const getPlaces = async () => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if (response.ok) {
    const result = await response.json();
    //console.log('>>>getPlaces Result:', result[0]);
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};

export const getOnePlace = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/places/${id}`);
  console.log('>>>RSP', response);
  if (response.ok) {
    const result = await response.json();
    console.log('///RES', result);
    return formatOnePlace(result);
  } else {
    throw new Error(await response.json());
  }
};

export const formatOnePlace = (place) => {
  return {
    ...place,
    pricePerNight: place.price_per_night,
    imageThumbnail: place.image_thumbnail,
    maxGuests: place.max_guests,
    petFriendly: place.pet_friendly,
  };
};
