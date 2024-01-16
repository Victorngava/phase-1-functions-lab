function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); // Assuming Scuber's headquarters is on 42nd Street
  } 
 function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264; // Each block is 264 feet
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // Price is 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Cannot travel over 2500 feet
    }
  }
   
