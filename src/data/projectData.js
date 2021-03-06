import bikemundo from '../images/bikemundo.JPG';
import gelojsnote from '../images/gelojsnote.JPG';
import robofriends from '../images/robofriends.JPG';
import smartbrain from '../images/smartbrain.JPG';
import bikemundo_mobile from '../images/bikemundo_mobile.png';
import guess_quiz_game from '../images/guess-quiz-game.JPG';
import boom_or_bust from '../images/boom-or-bust.JPG';
import AtarasLC from '../images/AtarasLC.JPG';
import tenbits from '../images/tenbits.png';
import guess_quiz2 from '../images/guess-quiz2-0.png';
import boom_or_bust_app from '../images/boom-or-bust-app.png';

export const projectData = [
  {
    name: 'Boom-or-Bust-App',
    url: 'https://expo.dev/@geloski43/boom-or-bust-app',
    thumb: boom_or_bust_app,
    description:
      "Mobile version of boom or bust web app that has improved user experience and functionality using the same Ball Don't Lie api (https://www.balldontlie.io/#introduction). Get old and current nba players stats, be it playoffs or regular season and try to compare two players side by side stats for a single season.  To run this app, click the url link below and download Expo Go app from appstore or playstore and scan the qr code from the website.",
    sourceCode: 'https://github.com/geloski43/boom-or-bust-app',
    platform: 'mobile',
  },
  {
    name: 'Guess Quiz2.0',
    url: 'https://guess-quiz2-0.vercel.app/',
    thumb: guess_quiz2,
    description:
      'The second version of the guess game from my early projects built mainly using chakra ui. I also added contextualwebsearch,an image search api to be used as image hint base on the question from open trivia api. Overall an improvement in user experience although I would prefer a faster image search api like serpapi. I deliberately created a new repo instead of re-writing the first version so I can always go back and see what else needs improvement.',
    sourceCode: 'https://github.com/geloski43/guess-quiz2.0',
    platform: 'web',
  },
  {
    name: 'Tenbits Music',
    url: 'https://expo.dev/@geloski43/ten-bits-music',
    thumb: tenbits,
    description:
      'A MERN stack music streaming app that allows users to search for songs, save and play them as a playlist to share with other users. Built with React Native, Expo, Mongo DB, and itunes API. To run this app, click the url link below and download Expo Go app from appstore or playstore and scan the qr code from the website.',
    sourceCode: 'https://github.com/geloski43/Tenbits-client',
    platform: 'mobile',
  },
  {
    name: 'geloski-jbook',
    url: 'https://www.npmjs.com/package/geloski-jsnote',
    thumb: gelojsnote,
    description:
      'A Javascript note book, with a simple markdown editor, and a simple markdown previewer.',
    sourceCode: 'https://github.com/geloski43/geloski-jbook',
    platform: 'web',
  },
  {
    name: "Atara's Learning Corner",
    url: 'https://atara-s-learning-corner.vercel.app',
    thumb: AtarasLC,
    description:
      'An Online Learning Module using demo version of PDFTron as PDF file viewer and more.',
    sourceCode: 'https://github.com/geloski43/Atara-s-Learning-Corner-',
    platform: 'web',
  },
  {
    name: 'Boom or Bust',
    url: 'https://boom-or-bust-nba-edition.vercel.app/',
    thumb: boom_or_bust,
    description:
      "A sports card like presentation of NBA players using Ball Don't Lie api (https://www.balldontlie.io/#introduction) which you can compare two players base on their stats.",
    sourceCode: 'https://github.com/geloski43/Boom-or-Bust-Nba-Edition',
    platform: 'web',
  },
  {
    name: 'Guess Game',
    url: 'https://guess-quiz-game.vercel.app/',
    thumb: guess_quiz_game,
    description:
      'A word game using Open trivia Database api (https://opentdb.com/api_config.php) with a node JS server to save scores.',
    sourceCode: 'https://github.com/geloski43/guess-quiz-game',
    platform: 'web',
  },
  {
    name: 'Bikemundo',
    url: 'https://bike-mundo.vercel.app',
    thumb: bikemundo,
    description:
      'A MongoDB, ExpressJS, React, NodeJS or MERN full stack E-commerce site utilizing Firebase, Cloudinary and Redux. Please send me an email if you want to test this as an admin so you can create products and more.',
    sourceCode: 'https://github.com/geloski43/Bikemundo',
    platform: 'web',
  },
  {
    name: 'Bikemundo-Mobile',
    url: 'https://expo.io/@geloski43/bikemundo-mobile',
    thumb: bikemundo_mobile,
    description:
      'A mobile version for the Bikemundo Online MERN stack Web app using React Native and Expo. I have replaced redux with React hooks to manage global state while still retaining all of the features from the Web app. To run this app, click the url link below and download Expo Go app from appstore or playstore and scan the qr code from the website. Please send me an email if you want to test this as an admin so you can create products and more.',
    sourceCode: 'https://github.com/geloski43/bikemundo-mobile',
    platform: 'mobile',
  },
  {
    name: 'Single Face Detect App',
    url: 'https://smart-brain-psi.vercel.app',
    thumb: smartbrain,
    description:
      "Final project from the course 'The Complete Web Developer in 2020 Zero to Mastery' using Clarifai API and SQL Databse.",
    sourceCode: 'https://github.com/geloski43/smart-brain',
    platform: 'web',
  },
];
