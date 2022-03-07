const getData = () => {
  return fetch(`https://ghibliapi.herokuapp.com/films`)
  .then(response => {
    if(response.ok) {
      return response.json()
    }
  })
}


export default getData;