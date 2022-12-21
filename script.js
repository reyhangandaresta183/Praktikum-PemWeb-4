const input = document.querySelector("#input");
const hasil = document.querySelector("#hasil");

input.addEventListener("keyup", (e) => {
  input.value == ""
    ? (hasil.innerHTML = "Hasil akan muncul disini")
    : input.value > 0 && input.value < 21
    ? input.value % 2 == 0
      ? genap(input.value)
      : ganjil(input.value)
    : (hasil.innerHTML = "Input harus diantara 1 - 20");
});

const genap = (input) => {
  input = input / 2;

  const factorial = (input) => {
    if (input == 0 || input == 1) {
      return 1;
    } else {
      return input * factorial(input - 1);
    }
  };

  hasil.innerHTML = "";
  for (let i = 1; i <= input; i++) {
    i != input
      ? (hasil.innerHTML += `${i} x `)
      : (hasil.innerHTML += `${i} = `);
  }

  hasil.innerHTML += factorial(input);
};

const ganjil = (input) => {
  hasil.innerHTML = "";

  let temp = 0;
  let temp1 = 1;
  let temp3 = 0;

  for (let index = 1; index <= 20; index++) {
    temp3 = temp + temp1;
    temp = temp1;
    temp1 = temp3;

    if (temp3 <= input * 10) {
      if (index === 1 && input != 1) {
        hasil.innerHTML += `${temp1} `;
      }
      hasil.innerHTML += `${temp3} `;
    }
  }
};
