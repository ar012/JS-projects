var personOne = "jamal";
var personTwo = "kamal";
var areTheyBrother = true;

if ("jamal" == personOne){
  if("kamal" == personTwo){
    if(areTheyBrother){
      console.log("Jamal and Kaml are Brother");
    }else{
      console.log("They are not brother");
    }
  }
}

//  alternate

if ("jamal" == personOne && "kamal" == personTwo && areTheyBrother){
  console.log("They are brother");
} else {
  console.log("They are not brother");
}
