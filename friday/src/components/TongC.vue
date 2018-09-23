<template>
    <div>
      <tou1></tou1>
      <tou2></tou2>
      <Jflb :slName1="name1"></Jflb>
      <host></host>
      <store-classify></store-classify>
      <end></end>
    </div>
</template>

<script>
    import Tou1 from "./Tou1";
    import Tou2 from "./Tou2";
    import Jflb from "./Jflb";
    import Host from "./Host";
    import StoreClassify from "./StoreClassify";
    import End from "./End";
    export default {
        name: "TongC",
      components: {End, StoreClassify, Host, Jflb, Tou2, Tou1},
      data(){
          return {
            name1:[
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
            ],
          }
      }
    }
</script>

<style scoped>
</style>
