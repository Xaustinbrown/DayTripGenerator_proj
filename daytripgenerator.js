"use strict"

let planeFlight = ['Japan', 'Germany', 'Costa Rica', 'Belize'];
let selectedDestination = planeFlight[Math.floor((Math.random() * 4) + 0)];
console.log(selectedDestination);

let randomRestuarants = ['Roscoes Ribs', 'Bobs Burgers', 'Paulas Pastries', 'Pacific Petes'];
let desireDiningDestination = randomRestuarants[Math.floor((Math.random() * 4) + 0)];
console.log(desireDiningDestination);

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
        console.log(desireDiningDestination);
        break;
    case 3:
        console.log(timelyTransportation);
        break;
    case 4:
        console.log(plannedEntertainment);
    }
}


