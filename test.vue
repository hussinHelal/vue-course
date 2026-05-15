
<template>
  <div class="test">
      <div class="wrapper">
      <h3> welcome to my test component </h3>
      <router-link to="/">Home</router-link>
      </div>
  </div>
</template>

<style scoped>
.test
{
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.wrapper
{
  text-align: center;
  background-color: rgba(247, 247, 247, 0.4);
  padding: 10px ;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}
</style>