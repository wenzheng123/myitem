<template>
<div class="host">
  <div>
    <img class="bs" src="static/img/common/host.png" alt="">
    <p>{{arr1[0].name}}</p>
    <div class="show"><img :src="arr1[0].src" alt=""></div>
  </div>
  <div>
    <img class="bs" src="static/img/common/new.png" alt="">
    <p>{{arr2[0].name}}</p>
    <span>{{arr2[0].js}}</span>
    <div class="show"><img :src="arr1[0].src" alt=""></div>
  </div>
  <div>
    <img class="bs" src="static/img/common/host.png" alt="">
    <p>{{arr1[1].name}}</p>
    <div class="show"><img :src="arr1[0].src" alt=""></div>
  </div>
  <div>
    <img class="bs" src="static/img/common/new.png" alt="">
    <p>{{arr2[1].name}}</p>
    <span>{{arr2[1].js}}</span>
    <div class="show"><img :src="arr1[0].src" alt=""></div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Host",
      data(){
          return{
            arr1:[
              {name:'内蒙古草原羔羊羊精肉',bs:1,src:'static/img/goods/limo.png'},
              {name:'内蒙古草原羔羊羊精肉',bs:1,src:'static/img/goods/limo.png'}
            ],
            arr2:[
              {name:'新西兰柠檬',bs:1,js:'鲜橙靚皮 柠香清新',src:'static/img/goods/limo.png'},
              {name:'新西兰柠檬',bs:1,js:'鲜橙靚皮 柠香清新',src:'static/img/goods/limo.png'},
            ],

          }
      }
    }
</script>

<style scoped>
  .host{
    width: 1280px;
    display: flex;
    justify-content: space-between;
  }
.host div{
  display: inline-block;
  width: 300px;
  height: 135px;
  background-color: #f2f2f2;
  position: relative;
  vertical-align: top;
}
.host div p{
  width: 104px;
  font-size: 20px;
  margin: 40px 0 0 30px;
}
  .host div span{
    font-size: 14px;
    line-height: 30px;
    margin-left: 30px;
  }
.host div .bs{
  position: absolute;
  left: 0;
  top: 0;
}
  .host div .show{
    position: absolute;
    width: 140px;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
  }
  .host div .show img{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>
