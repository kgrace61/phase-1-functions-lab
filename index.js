// Code your solution in this file!
// distance from HQ in blocks
//takes in location for a passenger
//returns the number of blocks from Scuber HQ on 42nd St
// 50 will return 8
const homeStreet = 42

const distanceFromHqInBlocks = (passengerLocation) => {
    return Math.abs(passengerLocation - homeStreet)
}
const distanceFromHqInFeet = (passengerLocation) => {
    let distanceInBlocks = distanceFromHqInBlocks(passengerLocation)
    let distanceInFeet = distanceInBlocks * 264
   return distanceInFeet
}
//calculate distance travelled in feet 
//takes in both start and destination blocks
// ex: distanceTravelledinFeet(34, 38)

const distanceTravelledInFeet = (startBlock, endBlock) => {
   let blocks = Math.abs(endBlock-startBlock)
    let blocksInFeet = blocks * 264
    return blocksInFeet
}
 //get distance in feet
 //first 400 feet are free
 //bt 400 - 2000, .02cents per foot
 // btw 2000-2500 feet fare is $25
 //over 2500 feet is $0
const calculatesFarePrice = (start, destination) => {
  let distance = distanceTravelledInFeet(start, destination)
    if (distance <400) {
    return 0
   }
   
    else if (distance >=400 && distance <=2000){
    return (distance-400) * .02
    }
    else if (distance >2000 && distance <2500){
    return 25
    }
    else {
        return "cannot travel that far"
    }
}

