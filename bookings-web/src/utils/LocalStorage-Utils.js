const USER = 'USER';
// the following import may be of use with bookings, or it may be bookings:
// const SESSION = 'SESSION';

// const emptySessionObj = {
//   name: '',
//   account: '',
//   nationality: '',
// };

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem(USER);
  try {
    return JSON.parse(user);
  } catch (e) {
    return {
      email: '',
      id: '',
      token: '',
    };
  }
};

export const putUserInLocalStorage = (user) => {
  localStorage.setItem(USER, JSON.stringify(user));
};
