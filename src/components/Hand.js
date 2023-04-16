import { useState, useEffect } from "react";
import * as Cards from "./cards";
import {
  HiArrowPath,
  HiCheckCircle,
  HiClock,
  HiXCircle,
} from "react-icons/hi2";
import * as Ariakit from "@ariakit/react";
import { Button } from "./Button";

const TOTAL_ROUND = 20;

// prettier-ignore
const cardValues = {
  '2': 1, '3': 1, '4': 1, '5': 1, '6': 1,
  '7': 0, '8': 0, '9': 0,
  '10': -1, 'J': -1, 'Q': -1, 'K': -1, 'A': -1
};

// prettier-ignore
const faceValue = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': 11
};

const generateHand = () => {
  // prettier-ignore
  const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suit = ["Club", "Diamond", "Heart", "Spade"];
  let hand = [];
  let handValue = 0;

  while (handValue < 12 || (handValue < 17 && Math.random() < 0.5)) {
    const cardRank = rank[Math.floor(Math.random() * rank.length)];
    const cardSuit = suit[Math.floor(Math.random() * suit.length)];
    const card = `${cardSuit}${cardRank}`;
    hand.push(card);
    const cardValue = faceValue[cardRank];
    handValue += cardValue;
    if (cardSuit === "A" && handValue > 21) {
      handValue -= 10;
    }
  }

  return hand;
};

const Hand = () => {
  const [hand, setHand] = useState(generateHand());
  const [message, setMessage] = useState("");
  const [round, setRound] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const dialog = Ariakit.useDialogStore();
  const [timer, setTimer] = useState(0);

  const showToast = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  useEffect(() => {
    if (!gameOver && gameStart) {
      const timerId = setInterval(() => {
        setTimer((prevState) => prevState + 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [gameOver, gameStart]);

  const newHand = () => {
    setHand(generateHand());
    setStartTime(Date.now());
  };

  const resetGame = () => {
    setHand(generateHand());
    setMessage("");
    setRound(1);
    setCorrectAnswers(0);
    setStartTime(Date.now());
    setSelectedAnswer(0);
    setTotalTime(0);
    setGameOver(false);
    setTimer(0);
  };

  const checkAnswer = (selectedAnswer) => {
    if (gameOver) return;
    if (!gameStart) setGameStart(true);

    const score = hand.reduce(
      (total, card) => total + cardValues[card.slice(-1)],
      0
    );
    if (selectedAnswer === score) {
      showToast(
        <div className="flex justify-center">
          <HiCheckCircle className="mt-1 mr-1 text-green-500" />
          Bonne réponse !
        </div>
      );

      setCorrectAnswers(correctAnswers + 1);
      const timeElapsed = (Date.now() - startTime) / 1000;
      setTotalTime(totalTime + timeElapsed);
    } else {
      showToast(
        <div className="flex justify-center">
          <HiXCircle className="mt-1 mr-1 text-red-500" />
          Mauvaise réponse.
        </div>
      );
    }
    if (round < TOTAL_ROUND) {
      setRound(round + 1);
      newHand();
    } else {
      setGameOver(true);
      dialog.toggle();
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <HiClock className="mt-1 mr-1" />
        <div>{timer} s</div>
      </div>
      <div className="flex justify-between items-end mb-4">
        <div>
          Tirage {round} / {TOTAL_ROUND}
          <br />
          Bonnes réponses : {correctAnswers}
        </div>
        <Button onClick={resetGame}>
          <HiArrowPath />
        </Button>
      </div>

      <div className="flex gap-4">
        {hand.map((card, index) => {
          const Card = Cards[card];
          return (
            <div className="flex-1 playing-card-container" key={index}>
              <Card className="playing-card-svg" />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col mt-6 mx-4 font-medium">
        <div className="mb-2 text-center">Réponse : {selectedAnswer}</div>

        <div className="relative">
          <input
            id="answer"
            type="range"
            min="-6"
            max="6"
            value={selectedAnswer}
            list="rangeOptions"
            onChange={(e) => setSelectedAnswer(parseInt(e.target.value))}
            className="w-full "
          ></input>
          <datalist id="rangeOptions">
            <option value="-6" />
            <option value="-5" />
            <option value="-4" />
            <option value="-3" />
            <option value="-2" />
            <option value="-1" />
            <option value="0" />
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
            <option value="5" />
            <option value="6" />
          </datalist>
          <div className="absolute top-6 left-0.5 w-full flex justify-between text-sm -mx-1.5">
            <span>-6</span>
            <span>-3</span>
            <span>0</span>
            <span>3</span>
            <span>6</span>
          </div>
        </div>
        <Button
          disabled={round === TOTAL_ROUND + 1}
          onClick={() => checkAnswer(selectedAnswer)}
          className="mt-7"
        >
          Valider
        </Button>
      </div>

      <p className="text-center mt-4">{message}</p>

      <Ariakit.Dialog store={dialog} className="dialog">
        <Ariakit.DialogHeading className="heading">
          Fin du jeu
        </Ariakit.DialogHeading>
        <p className="description">
          <div>
            {correctAnswers} bonnes réponses en {totalTime.toFixed(2)} secondes
          </div>
          <div className="mt-2">
            <span className="font-medium">Score total : </span>{" "}
            {Number(
              ((correctAnswers * 1000) / totalTime).toFixed(0)
            ).toLocaleString("fr-FR")}{" "}
            points
          </div>
        </p>
        <div>
          <Ariakit.DialogDismiss as={Button} onClick={resetGame}>
            Nouvelle partie
          </Ariakit.DialogDismiss>
        </div>
      </Ariakit.Dialog>
    </div>
  );
};

export default Hand;
