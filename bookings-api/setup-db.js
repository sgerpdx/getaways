require('./lib/utils/connect')();
const mongoose = require('mongoose');
const faker = require('faker');
const Place = require('./lib/models/Place');
//const Booking = require('./lib/models/Booking');
//const Review = require('./lib/models/Review');
//const User = require('./lib/models/User');

const placeTypes = [
  'Express',
  'Hotel',
  'Inn',
  'Motel',
  'Park',
  'Suites',
  'Zoo',
];

Place.create(
  [...Array(50)].map(() => {
    const name = `${faker.commerce.productAdjective()} ${faker.random.arrayElement(
      placeTypes
    )}`;
    const images = [
      faker.image.nature,
      faker.image.nightlife,
      faker.image.imageUrl,
    ];
    const image = faker.random.arrayElement(images);
    return {
      name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
      price_per_night: faker.commerce.price(70, 700),
      image: image(1080, 800),
      image_thumbnail: image(400, 400),
      max_guests: faker.datatype.number({ min: 2, max: 25 }),
      pet_friendly: faker.datatype.boolean(),
      pool: faker.datatype.boolean(),
      wifi: faker.datatype.boolean(),
    };
  })
)
  .then(() => console.log('done seeding'))
  .catch((err) => console.error(err))
  .finally(() => mongoose.connection.close());
