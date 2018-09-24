<template>
<div class="box">
  <Tou1></Tou1>
  <Tou2></Tou2>
  <div class="content">
    <div class="one">
      <span>您的当前位置：</span>
      <span>首页 > </span>
      <span class="tz"> &nbsp;优先保障</span>
    </div>
    <div class="one0">
      <div class="one0_1">
      <div class="one1">
        <span class="tz">优质保障</span>
        <p class="one1_1">日期：2015年9月21日</p>
      </div>
        <div class="one2">
          <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
          <p>
            管理团队平均年龄 36 岁，员工平均年龄 26 岁，公司信奉平等公开民主的管理文化，每一个员工都有表达自己建议和主张的权利。加入和我们一起开拓全新的水果文化，创立健康的食材品牌，共同分享高速增长的鲜果食品市场，和公司共同成长为行业顶尖的人才。
          </p>
          <img src="../../static/img/high.png" alt="">
          <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
          <p>
            管理团队平均年龄 36 岁，员工平均年龄 26 岁，公司信奉平等公开民主的管理文化，每一个员工都有表达自己建议和主张的权利。加入和我们一起开拓全新的水果文化，创立健康的食材品牌，共同分享高速增长的鲜果食品市场，和公司共同成长为行业顶尖的人才。
          </p>
        </div>
      </div>
    </div>
  </div>
  <End class="end"></End>
</div>
</template>

<script>
  import Tou1 from "@/components/Tou1"
  import Tou2 from "@/components/Tou2"
  import End from "@/components/End"
    export default {
        name: "High",
      components:{
          Tou1,
        Tou2,
        End
      }
    }
</script>

<style scoped>
 .end{
    margin-top: 40px;
  }
  .one2 img{
    margin: 50px 0 40px ;
  }
  .one2 p{
    line-height: 40px;
    text-indent: 2rem;
    margin-top: 40px;
  }
  .one1 p{
    position: absolute;
    right: 0;
    bottom: -60px;
    color: #999999;
  }
  .one1{
    height: 149px;
    text-align: center;
    font-size: 24px;
    line-height: 149px;
    border-bottom: 1px solid #cccccc;
    position: relative;
  }
  .one0_1{
    width: 1200px;
    margin: 0 auto;
  }
  .one0{
    border: 1px solid #cccccc;
    margin-top: 20px;
  }
  .one span:nth-of-type(1){
    margin-left: 20px;
  }
  .one{
    height: 54px;
    background: #f4f4f4;
    line-height: 54px;
    color: #666666;
     margin-top: 20px;
  }
  .tz{
    color: #5cb85c;
  }
 .content{
   width: 1280px;
   margin: 246px auto 0;
 }
</style>
