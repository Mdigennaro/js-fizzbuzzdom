/*
1. prendere la variabile
2. creare 100 box nella variabile
3. rendere differenti i multipli di 3
4. rendere differenyi i multipli di 5 
5. rendere differenti i box che sono sia multipli di 3 che di 5 contemporaneamente
*/ 

const row = document.querySelector(`.row`);

for (let i = 1; i < 101; i++){
  const box = document.createElement(`div`);
  box.className = `box`
  box.innerHTML = i;
  row.append(box);

  if (!(i % 3) && !(i % 5)) {
    box.classList.add(`fizzbuzz`);
    box.innerHTML =
    `
    FizzBuzz
    `;
  }else if (!(i % 3)){
    box.classList.add(`fizz`);
    box.innerHTML =
    `
    Fizz
    `;
  }else if(!(i % 5)){
    box.classList.add(`buzz`);
    box.innerHTML =
    `
    buzz
    `;
  };
};


