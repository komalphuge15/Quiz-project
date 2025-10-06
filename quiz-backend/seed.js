import sequelize from './src/models/index.js';
import Question from './src/models/Question.js';

const seed = async () => {
  await sequelize.sync({ force: true });

  await Question.bulkCreate([
    {
      text: 'What comes next in the sequence: 2, 6, 12, 20, ...?',
      options: ['28', '30', '32', '26'],
      correct: '30'
    },
    {
      text: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correct: 'Mars'
    },
    {
      text: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely?',
      options: ['Razzies', 'Lazzies', 'Bloops', 'None of the above'],
      correct: 'Lazzies'
    },
    {
      text: 'Which one of the following is a prime number?',
      options: ['21', '29', '35', '39'],
      correct: '29'
    },
    {
      text: 'Which is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correct: 'Blue Whale'
    },
    {
      text: 'If today is Monday, what day will it be 45 days from now?',
      options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      correct: 'Wednesday'
    },
    {
      text: 'Find the odd one out: Dog, Cat, Cow, Tiger',
      options: ['Dog', 'Cat', 'Cow', 'Tiger'],
      correct: 'Cow'
    },
    {
      text: 'Which number is missing: 5, 10, 20, 40, ?',
      options: ['60', '70', '80', '90'],
      correct: '80'
    },
    {
      text: 'If a train travels at 60 km/h for 3 hours, how far will it go?',
      options: ['160 km', '180 km', '200 km', '150 km'],
      correct: '180 km'
    },
    {
      text: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      correct: '2'
    }
  ]);

  console.log('Database seeded.');
  process.exit();
};

seed();
