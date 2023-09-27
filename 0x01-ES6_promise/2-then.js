function handleResponseFromAPI(promise) {
  const successPromise = { status: 200, body: 'success' };
  return promise
    .then(() => successPromise)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}

export default handleResponseFromAPI;
