'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let hours: number = 6;
let semester: number = 17;
let wDays: number = 5;
let WorkHoursDays: number = 52 / 5;

console.log(`number of working days in semester: ${semester * wDays}`);

console.log(`hours spent coding in a semester: ${semester * wDays * hours}`);

console.log(`${hours / WorkHoursDays * 100}% of coding hours compared to working hours`);

