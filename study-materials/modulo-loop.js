// latihan soal looping

for (let i = 1; i <= 100; i++) {
  if (i % 28 === 0) {
    console.log("FOURSEVEN");
  } else if (i % 4 === 0) {
    console.log("FOUR");
  } else if (i % 7 === 0) {
    console.log("SEVEN");
  } else {
    console.log(i);
  }
}

// looping while di dalam for

for (let i = 1; i <= 3; i++) {
  console.log(`Iterasi ke-${i}`);

  let j = 1;
  while (j <= 2) {
    console.log(`  Sub-iterasi ke-${j}`);
    j++;
  }
}

// Latihan Soal Nested Loop

for (i = 2; i <= 100; i++) {
  let isPrime = true;

  for (j = 2; j < 1; j++) {
    if (j % 2 === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// Penjelasan Detail:
// Loop Utama (i):
// Loop ini mengiterasi angka dari 2 hingga 100 (i = 2 → i <= 100).
// Angka 1 bukan bilangan prima, jadi kita mulai dari 2.

// Flag isPrime:
// Variabel ini digunakan untuk menKaliani apakah angka i adalah bilangan prima.
// Awalnya di-set true (asumsi i adalah prima).

// Loop Dalam (j):
// Loop ini mengiterasi pembagi dari 2 hingga i-1 (j = 2 → j < i).
// Jika i habis dibagi j (i % j === 0), maka i bukan bilangan prima.
// Set isPrime = false dan hentikan loop dalam dengan break.

// Cek isPrime:
// Jika isPrime tetap true setelah loop dalam selesai, berarti i adalah bilangan prima.
// Tampilkan i menggunakan console.log.