<template>
    <div class="intro2">
      <div v-for="(obj,i) in arr">
        <div class="user">
          <img :src="obj.user.img" alt="">
          <p>{{obj.user.name|tel}}</p>
        </div>
        <div class="cont">
          <p><span v-for="a in 5" :class="{good:a <= obj.good}"></span></p>
          <p>{{obj.cont}}</p>
          <img v-for="b in obj.img" :src="b" alt="">
          <p><span>{{obj.time[0]}}</span><span>{{obj.time[0]}}</span></p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Intro2",
      data(){
          return{
            arr:[
              {
                user:{
                  name:'15800000203',
                  img:'static/img/intro/user/1.png'
                },
                good:1,
                cont:'帮同事买的，很不错，性价比高',
                img:['static/img/intro/2.png','static/img/intro/3.png','static/img/intro/3.png'],
                time:'2016-08-22 20:45:01'
              },
              {
                user:{
                  name:'15800000203',
                  img:'static/img/intro/user/1.png'
                },
                good:1,
                cont:'帮同事买的，很不错，性价比高',
                img:[],
                time:'2016-08-22 20:45:01'
              },
              {
                user:{
                  name:'15800000203',
                  img:'static/img/intro/user/1.png'
                },
                good:1,
                cont:'帮同事买的，很不错，性价比高',
                img:['static/img/intro/2.png','static/img/intro/3.png'],
                time:'2016-08-22 20:45:01'
              }
            ],
          }
      },
      mounted(){
          for (var i = 0 ;i< this.arr.length; i++){
            this.arr[i].time=this.arr[i].time.split(' ');
          }

      }
    }
</script>

<style scoped>
.intro2{
  width: 1230px;
  margin: 40px auto ;
}
  .intro2 >div{
    height: 156px;
    border-bottom: 1px #e4e4e4 solid;
    overflow: hidden;
    padding: 0 20px;
    color: #797979;
    position: relative;
    margin-bottom: 20px;
  }
.intro2 >div div{
  float: left;
}
.intro2 .user{
  width: 95px;
  margin-right: 20px;
}
.user img{
  width: 100%;
}
.user p{
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  margin: 0;
}
.cont p{
margin: 0;
}

.cont p:nth-of-type(1) span{
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url("../../static/img/collect/collect.png") no-repeat;
  background-position: 0px -26px;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.cont p:nth-of-type(1) .good{
  background-position: 0px 2px;

}
.cont p:nth-of-type(2){
  font-size: 16px;
}
.cont img{
  width: 60px;
  margin-top: 18px;
  margin-right: 10px;
}
.cont p:nth-of-type(3){
  position: absolute;
  right: 20px;
  top: 0;
}
.cont p:nth-of-type(3) span{
  margin-left: 20px;
}
</style>
