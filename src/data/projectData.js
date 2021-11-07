import bikemundo from '../images/bikemundo.JPG';
import dota from '../images/dota-2.JPG';
import robofriends from '../images/robofriends.JPG';
import smartbrain from '../images/smartbrain.JPG';
import bikemundo_mobile from '../images/bikemundo_mobile.png';
import guess_quiz_game from '../images/guess-quiz-game.JPG';
import boom_or_bust from '../images/boom-or-bust.JPG';
import AtarasLC from '../images/AtarasLC.JPG';

export const projectData = [
  {
    name: 'Dota-2',
    url: 'https://dota-2.vercel.app',
    thumb: dota,
    description:
      'A lighter version of open dota website using their API and still under development',
    sourceCode: 'https://github.com/geloski43/dota-2',
  },
  {
    name: "Atara's Learning Corner",
    url: 'https://atara-s-learning-corner.vercel.app',
    thumb: AtarasLC,
    description:
      'An Online Learning Module using demo version of PDFTron as PDF file viewer and more.',
    sourceCode: 'https://github.com/geloski43/Atara-s-Learning-Corner-',
  },
  {
    name: 'Boom or Bust',
    url: 'https://boom-or-bust-nba-edition.vercel.app/',
    thumb: boom_or_bust,
    description:
      "A sports card like presentation of NBA players using Ball Don't Lie api (https://www.balldontlie.io/#introduction) which you can compare two players base on their stats.",
    sourceCode: 'https://github.com/geloski43/Boom-or-Bust-Nba-Edition',
  },
  {
    name: 'Guess Game',
    url: 'https://guess-quiz-game.vercel.app/',
    thumb: guess_quiz_game,
    description:
      'A word game using Open trivia Database api (https://opentdb.com/api_config.php) with a node JS server to save scores.',
    sourceCode: 'https://github.com/geloski43/guess-quiz-game',
  },
  {
    name: 'Bikemundo',
    url: 'https://bike-mundo.vercel.app',
    thumb: bikemundo,
    description:
      'A MongoDB, ExpressJS, React, NodeJS or MERN full stack E-commerce site utilizing Firebase, Cloudinary and Redux.',
    sourceCode: 'https://github.com/geloski43/Bikemundo',
  },
  {
    name: 'Bikemundo-Mobile',
    url: 'https://expo.io/@geloski43/bikemundo-mobile',
    thumb: bikemundo_mobile,
    description:
      'A mobile version for the Bikemundo Online MERN stack Web app using React Native and Expo. I have replaced redux with React hooks to manage global state while still retaining all of the features from the Web app. To run this app you need Expo Go app from appstore or playstore and scan the qr code.',
    sourceCode: 'https://github.com/geloski43/bikemundo-mobile',
  },
  {
    name: 'Single Face Detect App',
    url: 'https://smart-brain-psi.vercel.app',
    thumb: smartbrain,
    description:
      "Final project from the course 'The Complete Web Developer in 2020 Zero to Mastery' using Clarifai API and SQL Databse.",
    sourceCode: 'https://github.com/geloski43/smart-brain',
  },
  {
    name: 'Robo Friends',
    url: 'https://geloski43.github.io/alienbots',
    thumb: robofriends,
    description:
      "A project introduction for React JS from the course 'The Complete Web Developer in 2020 Zero to Mastery' touching basics on Redux and API.",
    sourceCode: 'https://github.com/geloski43/alienbots',
  },
];
