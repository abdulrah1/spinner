
let spinningChar = "|/-\\|-\\|";

let delay = 100;
for (let char of spinningChar) {
  setTimeout(() => {
    process.stdout.write('\r' + char + ' ');
  }, delay);
  delay += 200;
}


// loop over the characters of the string
// setTimeout so that with each 200ms, it starts on at the beginning of the line, prints a character and space THEN repeats.