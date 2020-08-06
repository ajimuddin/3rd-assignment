//3rd Assignment
//date 06/08/2020




// feet to mile conversion
// feet to mile conversion

function feetTomile(feet){

    const mile = feet/5280;

    return mile;
}

 const resultMile = feetTomile(400400);
 console.log(resultMile, "Mile");
  //end of feet to mile conversion
   //end of feet to mile conversion




// woodCalculator  
// woodCalculator  
function woodCalculator(chair, table, bed){

    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed   = bed   * 5;

    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}     

var woodResult = woodCalculator(10, 12, 6);
console.log(woodResult, "CFT");
//end of wood calculator
//end of wood calculator



//brick calculator
//brick calculator

function brickCalculator(numberOfFloor){
    if (numberOfFloor <=1 && numberOfFloor >=10){
        let totalBricks = numberOfFloor * 15000;
        return totalBricksr;
    }
    else if (numberOfFloor > 10 && numberOfFloor <= 20) {
        let totalBricks = ((numberOfFloor - 10) * 12000) + 150000;
        return totalBricks;
    }
    else if (numberOfFloor > 20){
        let totalBricks =((numberOfFloor - 20) * 10000) + 270000;
        return totalBricks;
    }
    else {
        return "Floor doesn't have negative number";
    }
  };
  let result1 = brickCalculator(13);
  console.log(result1);
  let result2 = brickCalculator(28);
  console.log(result2);
  let result3 = brickCalculator(31);
  console.log(result3);
  let result4 = brickCalculator(-4);
  console.log(result4);

  //end of brick calculator
  //end of brick calculator
  

//find tiny friend's name
//find tiny friend's name
function tinyFriends(name) {

    var smallestName = name[0];

    for (var i = 1; i < name.length; i++) {
        var compareName = name[i];
        if (compareName.length < smallestName.length) {
            shortName = compareName;
        }
    }

    return shortName;
}
var result = tinyFriends(["afif", "joy", "raju","rahim"]);
console.log("Shortest Name : ", result);

//end of tiny friend's name
//end of tiny friend's name