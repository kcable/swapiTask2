/**
 * Here you can define helper functions to use across your app.
 */

async function getEntity(apiUrl) {
  const response = await fetch(apiUrl); // query the api
  const { count, results } = await response.json();
  const sumArr = [...results]; // add the first results to the array
  //check how many pages there are left
  let pages = count % 10 === 0 ? count / 10 : Math.floor(count / 10 + 1); // if count is not a number divisible by 10 add one more page
  for (let i = 2; i <= pages; i++) {
    const { results } = await (await fetch(`${apiUrl}?page=${i}`)).json();
    sumArr.push(...results);
  }
  return sumArr;
}

module.exports = {
  getEntity,
};
