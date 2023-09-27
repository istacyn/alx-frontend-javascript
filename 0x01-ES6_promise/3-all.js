import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(`body ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
