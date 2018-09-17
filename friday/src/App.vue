<template>
  <div id="app">
    <router-view/>
    <!--<Jifen></Jifen>-->
  </div>
</template>

<script>
import Jifen from "./components/Jifen";
export default {
  name: 'App',
  components:{
    Jifen
  }
}
</script>

<style>

</style>
