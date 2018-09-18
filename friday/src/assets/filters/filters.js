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

export{tel}
