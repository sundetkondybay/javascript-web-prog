// 1 задание начало

/* let name = prompt("ваше имя?");
alert(name); */

// 1 задание конец



// 2 задание начало

let number = 10;

nextPrime:
for (let i = 2; i <= number; i++) { // Для всех i...

   for (let check = 2; check < i; check++) { 
      if (i % check == 0) continue nextPrime; 
   }

   console.log(i);
}

// 2 задание конец



// 3 задание начало



// 3 задание конец