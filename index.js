// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks < 42){
        return 42 -blocks
    }
    return (blocks - 42)
}

function distanceFromHqInFeet(feet){
    return (distanceFromHqInBlocks(feet) * 264)
}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start) * 264
    }
    return (start-destination) * 264
}

function calculatesFarePrice(start, destination){
    const feet = (start - destination) * 264

    if (feet < 0 && feet > -400) {
        return (feet * -1) + feet
    } 
    else if (feet > 0 && feet < 2499) {
        return (feet - 400) * .02
    }
    else if (feet < 0 && feet < -400) {
        return ((feet * -1) + feet) + 25
    }
    else if (feet > 2500) {
        return 'cannot travel that far'
    }
 
}
