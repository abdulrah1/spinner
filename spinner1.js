//
// Using this \r, we can fake an animation by replacing/rewriting characters in the same spot after a delay.
// Each character is a delayed write, using setTimeout
// With each delayed write, we start with returning (\r) the cursor to the beginning.
// We then write the next character in the animation
// Spaces are added after the character so that the cursor moves far enough away from our animation

process.stdout.write('hello from spinner1.js... \rheyyy\n'); // replaces the "hello" with heyyy because the \r brought cursor back to the start


setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1800);