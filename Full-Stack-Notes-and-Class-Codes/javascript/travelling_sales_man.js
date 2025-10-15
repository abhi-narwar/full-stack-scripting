function roundTripTime(buildingNumber, floorNumber) {
    const distancePerBuilding = 1; 
    const heightPerFloor = 1;  

    
    const goHorizontal = buildingNumber * distancePerBuilding;

    
    const goVertical = floorNumber * heightPerFloor;

    
    const oneWayTime = goHorizontal + goVertical;

    
    return oneWayTime * 2;
}


const totalTime = roundTripTime(1, 1);
console.log("Total time (go + return):", totalTime, "units");
