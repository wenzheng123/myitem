<template>
 <div class="box">
   <div class="aa">点击</div>
   <div id="end"></div>
 </div>
</template>

<script>
    export default {
        name: "Lian1",
      mounted(){
        $('.aa').on('click', addProduct);
        function addProduct(event) {
          var offset = $('#end').offset(),
            flyer = $('<img src="../../static/img/bus.png"/>');
          flyer.fly({
            start: {
              left: event.pageX,
              top: event.pageY
            },
            end: {
              left: offset.left,
              top: offset.top,
              width: 20,
              height: 20
            }
          });
        }
      }
    }
</script>

<style scoped>
#end{
  margin: 100px;
}
</style>
