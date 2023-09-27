export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const responseData = { data: "Sample response from API" };
      resolve(responseData);
    }, 1000);
  });
}
