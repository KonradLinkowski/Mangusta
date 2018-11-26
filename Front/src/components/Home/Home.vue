<template src="./Home.html"></template>
<style scoped lang="sass">
  @import './Home.scss'
</style>
<script>
export default {
  data: () => {
    return {
      foo: () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
      }
    }
  }
}
</script>