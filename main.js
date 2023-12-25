const car = {
    name :"Mercedes" ,
    model : "W11",
    engine: "V6",
    color: "Black",
    horsePower: 1200, // hp
    maxSpeed: 240 , // km per hour
    maxFuel: 90, // lt
    fuelConsumption: 15 ,//Per 100 km 

}

// question is : How many hours it would take for car to burn all fuel on max. speed?
function formula(){
    result = ((car.maxFuel / car.fuelConsumption ) *100)/ car.maxSpeed;
    console.log(car)
    console.log(result+ " " + "Hours car will go on max speed" )
}
formula ()