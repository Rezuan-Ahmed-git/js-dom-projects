//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

//Data
const quotes = [
  {
    quote:
      'Genius is one percent inspiration and ninety-nine percent perspiration.',
    person: 'Thomas Edison, type.fit',
  },
  {
    quote: 'You can observe a lot just by watching.',
    person: 'Yogi Berra, type.fit',
  },
  {
    quote: 'A house divided against itself cannot stand.',
    person: 'Abraham Lincoln, type.fit',
  },
  {
    quote: 'Difficulties increase the nearer we get to the goal.',
    person: 'Johann Wolfgang von Goethe, type.fit',
  },
  {
    quote: 'Fate is in your hands and no one elses',
    person: 'Byron Pulsifer, type.fit',
  },
  {
    quote: 'Be the chief but never the lord.',
    person: 'Lao Tzu, type.fit',
  },
  {
    quote: 'Nothing happens unless first we dream.',
    person: 'Carl Sandburg, type.fit',
  },
  {
    quote: 'Well begun is half done.',
    person: 'Aristotle, type.fit',
  },
  {
    quote: 'Life is a learning experience, only if you learn.',
    person: 'Yogi Berra',
  },
  {
    quote: 'Self-complacency is fatal to progress.',
    person: 'Margaret Sangster, type.fit',
  },
  {
    quote: 'Peace comes from within. Do not seek it without.',
    person: 'Buddha, type.fit',
  },
  {
    quote: 'What you give is what you get.',
    person: 'Byron Pulsifer, type.fit',
  },
  {
    quote: 'We can only learn to love by loving.',
    person: 'Iris Murdoch, type.fit',
  },
  {
    quote: 'Life is change. Growth is optional. Choose wisely.',
    person: 'Karen Clark, type.fit',
  },
  {
    quote: "You'll see it when you believe it.",
    person: 'Wayne Dyer, type.fit',
  },
  {
    quote: 'Today is the tomorrow we worried about yesterday.',
    person: 'type.fit',
  },
];

btn.addEventListener('click', function () {
  let randomQuoteNumber = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[randomQuoteNumber].quote;
  author.innerText = quotes[randomQuoteNumber].person;
});
