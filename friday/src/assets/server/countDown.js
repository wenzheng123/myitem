let countDown = (time) => {
  var t = [];
  var arr = time.split(' ');
  var arr1 = arr[0].split('-');
  var arr2 = arr[1].split(':');
  var end = new Date();
  end.setFullYear(arr1[0]);
  end.setMonth(arr1[1]-1)
  end.setDate(arr1[2]);
  end.setHours(arr2[0]);
  end.setMinutes(arr2[1]);
  end.setSeconds(arr2[2]);
  var e = end.getTime()/1000;
  var d = new Date().getTime()/1000;
  t[0]=Math.floor((e-d)/(24*60*60));
  if (Math.floor((e-d)/(60*60)%24)<10) {
    t[1]='0'+ Math.floor((e-d)/(60*60)%24);
  }else {
    t[1]= Math.floor((e-d)/(60*60)%24);
  }
  if (Math.floor((e-d)/60%(60))<10){
    t[2]='0'+Math.floor((e-d)/60%(60));
  }else {
    t[2]=Math.floor((e-d)/60%(60));
  }
  if (Math.floor((e-d)%(60))<10) {
    t[3]='0'+ Math.floor((e-d)%(60));
  }else {
    t[3]= Math.floor((e-d)%(60));
  }

  return t;
}


export {countDown}
