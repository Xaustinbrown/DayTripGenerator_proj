"use strict"

let planeFlight = ['Japan', 'Germany', 'Costa Rica', 'Belize'];
let selectedDestination = planeFlight[Math.floor((Math.random() * 4) + 0)];
console.log(selectedDestination);

let randomRestuarants = ['Roscoes Ribs', 'Bobs Burgers', 'Paulas Pastries', 'Pacific Petes'];
let desiredDiningDestination = randomRestuarants[Math.floor((Math.random() * 4) + 0)];
console.log(desiredDiningDestination);

let transitTravel = ['Trains', 'Buses', 'Car', 'Bike'];
let timelyTransportation = transitTravel[Math.floor((Math.random() * 4) + 0)];
console.log(timelyTransportation);

let passtimePleasures = ['Kayaking', 'Surfing', 'Hiking', 'Bowling'];
let plannedEntertainment = passtimePleasures[Math.floor((Math.random() * 4) + 0)];
console.log(plannedEntertainment);

// }

let expectationsFullfilled = false;
while(expectationsFullfilled = false){
     expectationsFullfilled = prompt("Requested needs to accomodate");

    switch (new day().changeResult()) {
    case 1:
        console.log(selectedDestination);
        break;
    case 2:
        console.log(desiredDiningDestination);
        break;
    case 3:
        console.log(timelyTransportation);
        break;
    case 4:
        console.log(plannedEntertainment);
    }
}

expectationsFullfilled = "tripCompleted";
  console.log("tripCompleted");

selectedDestination = "trip planning";
    console.log(selectedDestination);

desiredDiningDestination = "dining advisory";
    console.log(desiredDiningDestination);

timelyTransportation = "travel";
    console.log(timelyTransportation);

plannedEntertainment = "quality leisurely activities";
    console.log(plannedEntertainment);



        

