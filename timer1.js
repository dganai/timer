// edge cases
// no numbers
// ignore/skin numbers that are negative
// anything that is not  number -> skip

// implement alarm clock/timer -> beeps after specified time has passed
// use command line args -> process.argv.slice(2)

const args = process.argv.slice(2);


for (const alarm of args) {

  setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm * 1000);
}