// movie rating pg , r, 13, g

var movieRating="g";
var age =13;

// if ("pg"==movieRating && age >= 13){
//   console.log("You can watch this movie");
// } else if ("r"==movieRating && age>=18){
//   console.log("You can watch this movie");
// } else if ("g"==movieRating){
//   console.log("You can watch this movie");
// }else {
//   console.log("You can not watch this movie");
// }


if ( ("pg"==movieRating && age >= 13) || ("r"==movieRating && age>=18) || ("g"==movieRating) ){
  console.log("You can watch this movie");
}else {
  console.log("You can not watch this movie");
}
