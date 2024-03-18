// Variables

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let sliderNumber = 1;
let length = images.length;

//create bottom buttons
for (let i = 0; i < length; i++) {
  const div = document.createElement('div');
  div.className = 'button';

  bottom.appendChild(div);
}

// select all bottom buttons
const buttons = document.querySelectorAll('.button');
// make the first button black
buttons[0].style.backgroundColor = 'black';

// reset bottom button color to normal
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = 'transparent';
  });
};

// clicking bottom buttons functionality
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    resetBg();
    slider.style.transform = `translateX(-${index * 800}px)`;
    sliderNumber = index + 1;
    button.style.backgroundColor = 'black';
  });
});

const nextSlider = () => {
  slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  sliderNumber++;
};
const prevSlider = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
  sliderNumber--;
};

const getFirstSlider = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};
const getLastSlider = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  sliderNumber = length;
};

const changeColor = () => {
  resetBg();
  buttons[sliderNumber - 1].style.backgroundColor = 'black';
};

right.addEventListener('click', () => {
  sliderNumber < length ? nextSlider() : getFirstSlider();

  changeColor();
});

left.addEventListener('click', () => {
  sliderNumber > 1 ? prevSlider() : getLastSlider();

  changeColor();
});
