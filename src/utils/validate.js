function isvalidPhone(str) {
  const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/
 // const reg =  /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/
  return reg.test(str)
}

function isPasswd(s)
{
  const patrn=/^(\w){6,20}$/;
  return patrn.test(s)
}

function returnFloat(value){
  var value=Math.round(parseFloat(value)*100)/100;

  var xsd=value.toString().split(".");
  if(xsd.length==1){
    value=value.toString()+".00";
    return value;
  }
  if(xsd.length>1){
    if(xsd[1].length<2){
      value=value.toString()+"0";
    }
    return value;
  }
}

export default {
  isvalidPhone, isPasswd, returnFloat
}