<template>
  <div>
    <tou1></tou1>
    <tou2></tou2>
  <div id="container"></div>
  </div>
</template>

<script>

  import Tou2 from "./Tou2";
  export default {
        name: "Map",
    components:{
      Tou2

    },
    mounted(){
      window.onLoad  = function(){
        var map = new AMap.Map('container');
      }
      var url = 'https://webapi.amap.com/maps?v=1.4.10&key=8aa03285d34a196e2fb2518a641bd10c&callback=onLoad';
      var jsapi = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.src = url;
      document.head.appendChild(jsapi);
    }
    }
</script>

<style scoped>
  #container {width:1280px; height: 1000px; margin: 246px auto}
</style>
