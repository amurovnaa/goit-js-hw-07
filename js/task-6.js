// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на
// кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю
// елементів і очищатися значення в інпуті.При повторному натисканні на кнопку Create
// поверх старої колекції має рендеритись нова.Після натискання на кнопку Destroy
// колекція елементів має очищатися.
// Після натискання користувачем на кнопку Create треба провалідувати значення в input,
//  воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову,
//  мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає
//  один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount.
//  Усі ці <div> мають додаватися за одну операцію у DOM дочірніми елементами
//  для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову
// функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи
// функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі
// створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBoxes = document.getElementById("boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const numberInput = document.querySelector("input");

function createBoxes(amount) {
  const allBoxes = [];
  let sizes = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${sizes}px`;
    div.style.height = `${sizes}px`;
    div.style.backgroundColor = getRandomHexColor();
    allBoxes.push(div);
    sizes += 10;
  }
  divBoxes.style.backgroundColor = "#f6f6fe";
  divBoxes.style.padding = "32px";
  divBoxes.style.display = "inline-flex";
  divBoxes.style.flexWrap = "wrap";
  divBoxes.style.gap = "44px";
  divBoxes.style.borderRadius = "8px";
  divBoxes.append(...allBoxes);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  numberInput.value = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(numberInput.value.trim());
  if (amount < 1 || amount > 100) {
    return alert("Please enter a number between 1 and 100.");
  }
  createBoxes(amount);
  numberInput.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);
