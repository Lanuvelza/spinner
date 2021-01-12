
for (let time = 100; time <= 700; time += 200) {
  setTimeout(() => {
    if(time === 100){ 
      process.stdout.write('\r|   ');
    } else if (time === 300) {
      process.stdout.write('\r/   ');
    } else if (time === 500) {
      process.stdout.write('\r-   ');
    } else if (time = 700) {
      process.stdout.write('\r\\   \n');
    }
  }, time); 
}