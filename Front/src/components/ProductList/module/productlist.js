export const getProductList = (size) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/?size=${size}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      return json
    })
    .catch(err => console.log(err))
}