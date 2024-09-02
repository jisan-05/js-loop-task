for (let i = 55; i <= 85; i++) {
  // Skip numbers divisible by 5
  if (i % 5 === 0) {
    continue;
  }

  // Display odd numbers
  if (i % 2 !== 0) {
    console.log(i);
  }
}
