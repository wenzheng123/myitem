<template>
   <div class="buyM">
      <div>

      </div>
   </div>
</template>

<script>
    export default {
        name: "BuyM",
      mounted(){
          // console.log($('.buyM').width());
          $('.buyM').width(document.documentElement.clientWidth+'px');
          $('.buyM').height(document.documentElement.clientHeight+'px')
      }
    }
</script>

<style scoped>
.buyM{
  position: fixed;
  top: 0;
  background-color: rgba(0,0,0,.5);
}
.buyM div{
  width: 690px;
  height: 450px;
  border:5px #e2e2e2 solid;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
}
</style>
