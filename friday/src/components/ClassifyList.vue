<template>
<div class="classifylist">
<div v-for="(item1,key) in list[aa]">
  <p>{{key}}</p>
  <ul>
    <li v-for="item2 in item1"><router-link to="###">{{item2}}</router-link></li>
  </ul>
</div>
</div>
</template>

<script>
    export default {
        name: "ClassifyList",
      props:{
        aa:Number,
        required: true,
      },
      data(){
          return{
            list:[
              {
              '新鲜水果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
            },
              {
                '生猛海鲜':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              },
              {
                '肉类家禽':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              },
              {
                '蛋奶素食':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              },
              {
                '田园蔬菜':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              },
              {
                '零食酒水':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              },
              {
                '粮油杂货':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              },
              {
                '礼品卡券':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              },
              {
                '家具用品':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '美味鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '香甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '酸甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '真甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
                '不甜鲜果':['草莓','葡萄','香蕉','苹果','草莓','葡萄','香蕉','苹果'],
              }
            ]
          }
      },
      mounted(){
      }
    }
</script>

<style scoped>
  .classifylist{
    width: 460px;
    height: 504px;
    background-color: #ebffe7;
  }
  .classifylist div{
    margin-top: 20px;
    overflow: hidden;
    height: 57px;
  }
  .classifylist p{
    display: inline-block;
    width: 135px;
    color: #498e3d;
    font-size: 20px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    margin: 0;
  }
  .classifylist ul{
    width: 320px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    float: right;
    overflow: hidden;
  }
  .classifylist li{
    width: 80px;
    border-right: 1px #000 solid;
    font-size: 18px;
    line-height:18px;
    text-align: center;
    position: relative;
    left: 2px;
    box-sizing: border-box;
    margin-bottom: 12px;
  }
  .classifylist li a{
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
</style>
