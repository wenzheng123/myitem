<template>
  <div class="allClassify">
    <p v-for="(item,index) in list" @mouseenter="changeBgi(index)" :class="{c:indexC==index}">
      <span :style="'background-position-y:'+(-index*56)+'px'" :class="{x:indexC==index}"></span>
      {{item}}
    </p>
    <router-view class="classifylist"></router-view>
  </div>
</template>

<script>
    export default {
        name: "AllClassify",
      data(){
          return{
            list:['新鲜水果','生猛海鲜','肉类家禽','蛋奶素食','田园蔬菜','零食酒水','粮油杂货','礼品卡券','家具用品'],
            indexC:-1,
          }
      },
      methods:{
        changeBgi(i){
          this.indexC = i;
          this.$router.push({path:'/classifylist',query:{num:i}})
        }
      },
      mounted(){
        $('span:last').css('background-position-y','-444px');
        if (this.indexC == -1){
          this.$router.push({path:'/allclassify'});
        }
      }
    }
</script>

<style scoped>
.allClassify{
  width: 170px;
  height: 500px;
  border-left: 1px #efeeec solid;
  border-top: 1px #efeeec solid;
  position: relative;
  box-sizing: border-box;
}
  .allClassify p{
    height: 56px;
    line-height: 56px;
    font-size: 20px;
    vertical-align: middle;
    margin: 0;
    border-right: 1px #efeeec solid;
    border-bottom: 1px #efeeec solid;
    box-sizing: border-box;
    cursor: pointer;
  }
.allClassify span{
  width: 30px;
  display: inline-block;
  height: 30px;
  background: url('../../static/img/classify/classify.png') 0px 0px no-repeat;
  vertical-align: middle;
  margin-left: 30px;
}
  .allClassify .x{
    -ms-background-position-x: -33px;
    background-position-x: -33px;
  }
.allClassify .c{
  background-color: #ebffe7;
  border-right: 1px transparent solid;
}
  .classifylist{
    position: absolute;
    left: 170px;
    top: 0;
  }
</style>
