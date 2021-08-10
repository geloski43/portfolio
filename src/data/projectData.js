import bikemundo from "../images/bikemundo.png";
import santebarley from "../images/santebarley.png"
import robofriends from "../images/robofriends.png"
import smartbrain from "../images/smartbrain.png"
import bikemundo_mobile from "../images/bikemundo_mobile.png"
import guess_quiz_game from "../images/guess-quiz-game.png"
import boom_or_bust from "../images/boom-or-bust.png"

export const projectData = [
  {
    name: "Bikemundo",
    url: "https://bikemundo.herokuapp.com",
    thumb: bikemundo,
    description:
      "A MongoDB, ExpressJS, React, NodeJS or MERN full stack E-commerce site utilizing Firebase, Cloudinary and Redux."
  },
  {
    name: "E-Cart Sante Barley",
    url: "https://ecart.santebarley.com/ph",
    thumb: santebarley,
    description:
      "React JS E-commerce site using the companys' own API."
  },
  {
    name: "Bikemundo-Mobile",
    url: "https://expo.io/@geloski43/bikemundo-mobile",
    thumb: bikemundo_mobile,
    description:
      "A mobile version for the Bikemundo Online MERN stack Web app using React Native and Expo. I have replaced redux with React hooks to manage global state while still retaining all of the features from the Web app. To run this app you need Expo Go app from appstore or playstore and scan the qr code."
  },

  {
    name: "Boom or Bust NBA Edition",
    url: "https://boom-or-bust-nba-edition.vercel.app/",
    thumb: boom_or_bust,
    description:
      "A sports card like presentation of NBA players using Ball Don't Lie api (https://www.balldontlie.io/#introduction)."
  },
  {
    name: "Guess Quiz Game",
    url: "https://guess-quiz-game.vercel.app/",
    thumb: guess_quiz_game,
    description:
      "A word game using Open trivia Database api (https://opentdb.com/api_config.php) with a node JS server to save scores."
  },

  {
    name: "Single Face Detect App",
    url: "https://geloski-facedetect.herokuapp.com",
    thumb: smartbrain,
    description:
      "Final project from the course 'The Complete Web Developer in 2020 Zero to Mastery' using Clarifai API and SQL Databse."
  },
  {
    name: "Robo Friends",
    url: "https://geloski43.github.io/alienbots",
    thumb: robofriends,
    description:
      "A project introduction for React JS from the course 'The Complete Web Developer in 2020 Zero to Mastery' touching basics on Redux and API."
  },
];
