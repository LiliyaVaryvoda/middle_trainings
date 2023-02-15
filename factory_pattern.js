// creates factory function
function vehicleFactory (manufacturer, plateNO) {
    return  {
        manufacturer,
        plateNO,
        startEngine () {
            console.log("reving engine")
        },
        drive () {
            console.log("driving car...")
        }
    }
}
 
const Vehicle1 = vehicleFactory("Toyota", 12345);
console.log(Vehicle1) 
// prints 
//{
//  manufacturer: 'Toyota',
//  plateNO: 12345,
//  startEngine: [Function: startEngine],
//  drive: [Function: drive]
//}
  
const Vehicle2 = vehicleFactory("Ford", 13345);
console.log(Vehicle2) 
// prints 
// {
//  manufacturer: 'Ford',
//  plateNO: 13345,
//  startEngine: [Function: startEngine],
//  drive: [Function: drive]
// }