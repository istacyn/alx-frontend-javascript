import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const resultArray = [];
  return Promise.allSettled(promises).then((results) => {
    results.map(({ status, value, reason }) => (
      resultArray.push({
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));
    return resultArray;
  });
}
