// Code your solution in this file!
// 1. Function to return the first two drivers  
const returnFirstTwoDrivers = function(drivers) {  
    return drivers.slice(0, 2);  
};  

// 2. Function to return the last two drivers  
const returnLastTwoDrivers = function(drivers) {  
    return drivers.slice(-2);  
};  

// 3. Array containing the two driver selection functions  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];  

// 4. Higher-order function that returns a function to multiply a fare  
const createFareMultiplier = function(multiplier) {  
    return function(fare) {  
        return fare * multiplier;  
    };  
};  

// 5. Function that doubles the fare  
const fareDoubler = createFareMultiplier(2);  

// 6. Function that triples the fare  
const fareTripler = createFareMultiplier(3);  

// 7. Function to select different drivers based on the provided function  
const selectDifferentDrivers = function(drivers, selectionFunction) {  
    return selectionFunction(drivers);  
};  

// Example usage:  
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Antonia', 'Nuru']  
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Amari', 'Mo']  
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // => ['Antonia', 'Nuru']  
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // => ['Amari', 'Mo']  
console.log(fareDoubler(10)); // => 20  
console.log(fareTripler(10)); // => 30