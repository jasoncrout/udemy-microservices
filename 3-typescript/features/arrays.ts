const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carByMake = [["f150"], ["corolla"], ["camaro"]];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
