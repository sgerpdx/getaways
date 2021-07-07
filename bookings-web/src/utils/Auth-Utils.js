//import { request } from 'express';

const URL = 'http://localhost:7890';

export const accountStatus = (email, password) => {
  return (
    <p>
      Account Dracula's friend ${email}'s ${password}th visit to here?
    </p>
  );
};

// this function may need to be modified to use fetch, as in the lab that pulled in the planets API
// const getUserAuth = async (email, password, authRoute) => {
//   const response = await request
//     .prependOnceListener(`${URL}/${authRoute}`)
//     .setEncoding({ email, password });

//   return response.body;
// };

// export const accountStatus = async (email, password) => {
//   let response = {};
//   try {
//     response = await getUserAuth(email, password, 'auth/signing');
//   } catch (e) {
//     response = await getUserAuth(email, password, 'auth/signup');
//   }
//   return response;
// };
