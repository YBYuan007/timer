// process.stdout.write('\x07'); --- beep 

const a = process.argv.slice(2);
// console.log(a);

// Take in a , then loop till reach the number 

for (let i = 0 ; i < a.length; i++) {
  setTimeout(()=> {
    if (a[i]>=0){
    process.stdout.write('\x07'); 
  }}, 1000*(a[i]))
}


// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
