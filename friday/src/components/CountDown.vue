<template>
    <div class="down">
      <p>距离开始还剩</p><p><span>{{arr[0]}}天</span><span>{{arr[1]}}</span>:<span>{{arr[2]}}</span>:<span>{{arr[3]}}</span></p>
    </div>
</template>

<script>
  import {countDown} from "../server/countDown";

  export default {
        name: "CountDown",
      data(){
        return{
          arr:[]
        }
      },
      mounted() {
        this.arr = countDown('2018-9-18 0:0:0');
        setInterval(() => {
          this.arr = countDown('2018-9-18 0:0:0');
        }, 1000);
      }
    }
</script>

<style scoped>
.down{
  width: 444px;
  height: 64px;
  background-color: rgba(255,255,255,.5);
  border-radius: 0 0 10px 10px/0 0 10px 10px;
  font-size: 20px;
}
.down p{display: inline-block;}
  .down p:nth-of-type(1){
    line-height: 64px;
    margin: 0 7px 0 40px;
  }
  .down span{
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
    color: #fff;
    background-color: #ff5757;
    margin:0 8px;
  }
</style>
