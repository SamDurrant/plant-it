import axios from 'axios';

const headers = {
  "x-app-id": process.env.REACT_APP_FOOD_ID,
  "x-app-key": process.env.REACT_APP_FOOD_KEY,
  "x-remote-user-id": process.env.REACT_APP_FOOD_USER_ID
}

export const getItems = (query) => {
  const apiEndpoint = process.env.REACT_APP_FOOD_INSTANT_ENDPOINT
  // returns list of foods both common and branded based on users search query
  return axios.get(`${apiEndpoint}?query=${query}`, {
    headers
  })
  .then(res => {
    let common = res.data.common.map(item => {
      return {
        name: item.food_name,
        serving: item.serving_unit,
        size: item.serving_qty,
        calories: null,
        id: item.tag_id
      }
    })

    let branded = res.data.branded.map(item => {
      return {
        name: item.food_name,
        serving: item.serving_unit,
        size: item.serving_qty,
        calories: item.nf_calories,
        id: item.nix_brand_id
      }
    })
    return [...common, ...branded];
  })
  .catch(err => {
    console.log(err)
    return err;
  })

  // // retrieves nutrition for food item
  // const apiEnd = process.env.REACT_APP_FOOD_NUTRIENTS_ENDPOINT;

  // axios.post(apiEnd, params, {
  //   headers
  // })
  // .then(res => {
  //   console.log(res.data)
  // })
  // .catch(err => {
  //   console.log(err.message)
  // })

  // retrieves nutrition for branded item
  // const p = { query: '54072a751701ffb9576b74ec' }
  // const apiBranded = 'https://trackapi.nutritionix.com/v2/search/item';
  // axios.get(apiBranded + `?nix_item_id=${p.query}`, { headers })
  // .then(res => {
  //   console.log(res.data.foods)
  // })
  // .catch(err => {
  //   console.log(err);
  // })
}