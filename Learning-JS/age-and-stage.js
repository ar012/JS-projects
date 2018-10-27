var yourAge=100;
var result;


if (yourAge<0 || yourAge >=200){
  result = "vampire";
} else if (yourAge<=1) {
  result = "baby";
} else if (yourAge<=3) {
  result = "toddler";
} else if (yourAge<=12) {
  result = "kid";
} else if (yourAge<18){
  result = "teenager";
} else if (yourAge>=18){
  result = "adult"
}

console.log("You are a/and",result);
