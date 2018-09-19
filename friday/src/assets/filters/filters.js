let tel = num => {
  var arr = num.split('');
  var str = '';
  for (var i = 0; i < arr.length; i++){
    if(i<3||i>6){
      str+=arr[i];
    }else {
      str+='*';
    }
  }
  return str;
}
let toFixed = (num1,num2)=>{
  return Number(num1).toFixed(num2);
}
export{tel,toFixed}
