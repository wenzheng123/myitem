<template>
    <div class="intro1">
      <p class="name">{{obj.name}}</p>
      <p v-for="item in strArr" class="cont">{{item}}</p>
      <img :src="obj.src" alt="">
    </div>
</template>

<script>
    export default {
        name: "Intro1",
      data(){
          return{
            obj:{
              name:'男式衬衫',
              intro: '明水礼盒十分优秀，是送朋友，送亲人的不二选择。\n' +
              '什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。\n' +
              '完成交易，如有剩余库存，从新上架产品\n',
              src:'static/img/goods/2.png'
            },
            strArr:[]
          }
      },
      mounted(){
          this.strArr = this.obj.intro.split('\n');
      }
    }
</script>

<style scoped>
.intro1{
  width: 1200px;
  margin: 40px auto ;
}
  .intro1 .name{
    color: #ec6a17;
  }
.intro1 .cont{
  color: #797979;
}
.intro1 img{
  width: 100%;
}
</style>
