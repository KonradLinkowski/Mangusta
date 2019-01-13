export const getProductList = (searchTerm = "", priceMin = "", priceMax = "", category = []) => {
  let query = ''
  if (searchTerm || priceMin || priceMax || category.length) {
    searchTerm && (query += `search=${searchTerm}&`)
    priceMin && (query += `priceMin=${priceMin}&`)
    priceMax && (query += `priceMax=${priceMax}&`)
    category && (query += `category=${category}&`)
    query = query.substring(0, query.length - 1)
  }
  fetch(`http://localhost:3000/product/${query}`, {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000/' }
  })
  /*eslint-disable*/
  .then(response => response.json())
  .then(json => {
    console.log('json: ', json)
    return json
  })
  .catch(error => {
    console.log('error: ', error)
    return []
  })
  /*eslint-enable*/
}