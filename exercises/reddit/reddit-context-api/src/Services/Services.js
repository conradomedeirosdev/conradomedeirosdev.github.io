export const getREDDIT = (type) => {
  return fetch(`https://www.reddit.com/r/${type}.json`)
    .then((res) => res.json())
    .then((response) => !response.ok ? response.data : response.error)
    .catch((error) => alert(error));
}
