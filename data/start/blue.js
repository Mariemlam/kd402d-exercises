// Blue track: B1 and B2
// beat and bpm come from exercise3.js. Every file on the page can use the variables the others make.

// TODO B1: a phrase is 12 beats long. Work out how long it lasts in seconds from beat,
//          round it to a whole number of seconds, and log it.

const bpm1 = 90 ; // beats per minute
const Title = " Night Bus . "
const status1 = ". A minor"
const beat1 = 60 / bpm1; // how long one beat lasts, in seconds
console.log("a 12-beat phrase lasts " + Math.round(beat1 * 12) + " seconds");

console.log(Title + bpm1 + status1)


// TODO B2: store a title and a key for your track (you already have bpm), then log one line like:
//          Night Bus · 90 BPM · A minor
