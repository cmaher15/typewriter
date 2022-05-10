const sentence = "hello from lighthouse labs\n";
let accum = 0;
for (let char of sentence) {
  accum += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, accum);
};

