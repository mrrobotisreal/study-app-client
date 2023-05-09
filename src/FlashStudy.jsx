import { useState, useEffect, useContext, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Alert from '@cloudscape-design/components/alert';
import BarChart from '@cloudscape-design/components/bar-chart';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Icon from '@cloudscape-design/components/icon';
import Input from '@cloudscape-design/components/input';
import Link from '@cloudscape-design/components/link';
import Modal from '@cloudscape-design/components/modal';
import PieChart from '@cloudscape-design/components/pie-chart';
import Select from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TextArea from '@cloudscape-design/components/textarea';
import { AppContext } from './AppContext';
// import AudioPlayer from './AudioPlayer';
import { FormattedMessage } from 'react-intl';
import { CollectionContext } from './context/CollectionContext';
import { ScoresContext } from './context/ScoresContext';
import Confetti from 'react-confetti';

export default function FlashStudy() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [selectedCollection, setSelectedCollection] = useState({});
  const [cardList, setCardList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [guessInput, setGuessInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [collectionName, setCollectionName] = useState('');
  const [pointsObj, setPointsObj] = useState({
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    'cards-left': cardList.length
  });
  const [answerObj, setAnswerObj] = useState({});
  const [grade, setGrade] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [resultData, setResultData] = useState([
    { x: '0', y: 0 },
    { x: '1', y: 0 },
    { x: '2', y: 0 },
    { x: '3', y: 0 },
  ]);
  const [visibleModal, setVisibleModal] = useState(false);
  const { collections, refreshCollections } = useContext(CollectionContext);
  const { setHasBeatenHighScore } = useContext(ScoresContext);

  const getSelectedCollection = () => setSelectedCollection(collections.filter((coll) => {
    console.log('[NAME IS] - ', name)
    console.log('colelctions ', collections);
    const newAnswerObj = answerObj;
    if (coll.name === name) {
      for (let i = 0; i < coll.cardList.length; i++) {
        newAnswerObj[String(i)] = false;
      }
      setAnswerObj(newAnswerObj);
      setCardList(coll.cardList);
      setCollectionName(coll.name);
      setQuestion(coll.cardList[currentIndex].question);
      setAnswer(coll.cardList[currentIndex].answer);
      setPhotoUrl(coll.cardList[currentIndex].photoUrl);
      const newPointsObj = pointsObj;
      newPointsObj['0'] = 0;
      newPointsObj['1'] = 0;
      newPointsObj['2'] = 0;
      newPointsObj['3'] = 0;
      newPointsObj['cards-left'] = coll.cardList.length;
      setPointsObj(newPointsObj);
    }
    return coll.name === name;
  }));

  const reveal = () => setIsRevealed(!isRevealed);

  const calculatePoints = (point) => {
    console.log('FIRE!!!')
    const newAnswObj = answerObj;
    console.log(pointsObj['cards-left']);
    const newObj = pointsObj;
    if (newObj['cards-left'] === 0) {
      return;
    }
    console.log('[ANSWER-OBJ]\n', answerObj);
    if (answerObj[String(currentIndex)] === true) {
      return;
    } else {
      newAnswObj[String(currentIndex)] = true;
      setAnswerObj(newAnswObj);
    }
    console.log('[DEBUG] = newAnswerObj\n', newAnswObj);
    newObj[String(point)] = newObj[String(point)] + 1;
    newObj['cards-left'] = newObj['cards-left'] - 1;
    console.log('[NEW-OBJ]\n', newObj);
    setPointsObj(newObj);
  };

  const checkAnswer = (confidence) => {
    /**
     * Depending on the confidence number passed in,
     * attach the confidence number to the card
     * currently being displayed. This number will then be used
     * to determine which cards to show first, and how many
     * times to show them.
     */
    // perform special character check then replace all special chars with a space,
    // except for periods (.) to indicate a full stop. Maybe also other common endings (?, !);
    const regexSpecChar = /[\!\@\#\$\%\^\&\*\(\)\_\+\[\]\\\;\'\,\.\/\{\}\:\"\<\>\?]+/g;
    const _isCorrect = answer.toLowerCase() === guessInput.toLowerCase();
    calculatePoints(confidence);
    setIsCorrect(_isCorrect);
    setIsRevealed(true);
    setIsVisibleAlert(true);
  };

  const handleGuessInput = ({ detail }) => {
    setGuessInput(detail.value);
    setIsCorrect(answer.toLowerCase() === detail.value.toLowerCase());
  };

  const handleNoIdeaClick = () => checkAnswer(0);

  const handleRandomGuessClick = () => checkAnswer(1);

  const handleConfidentGuessClick = () => checkAnswer(2);

  const handleCertainClick = () => checkAnswer(3);

  const handleNextCardClick = () => {
    setGuessInput('');
    setIsRevealed(false);
    setIsVisibleAlert(false);
    const newIndex = currentIndex === cardList.length - 1
    ? 0
    : currentIndex + 1;
    setCurrentIndex(newIndex);
    setQuestion(cardList[newIndex].question);
    setAnswer(cardList[newIndex].answer);
    setPhotoUrl(cardList[newIndex].photoUrl);
  };

  const handlePrevCardClick = () => {
    setGuessInput('');
    setIsRevealed(false);
    setIsVisibleAlert(false);
    const newIndex = currentIndex === 0
    ? cardList.length - 1
    : currentIndex - 1;
    setCurrentIndex(newIndex);
    setQuestion(cardList[newIndex].question);
    setAnswer(cardList[newIndex].answer);
    setPhotoUrl(cardList[newIndex].photoUrl);
  };

  const handleGoBackClick = () => {
    navigate('/app/collections');
  };

  const handleFinishClick = () => {
    // for (let i = 0; i < cardList.length; i++) {
    //   if (answerObj[String(i)] === false) {
    //     console.log('You must answer all the questions first.');
    //     return;
    //   }
    // }
    let totalPoints = 0;
    console.log('POINTS OBJ >>> ', pointsObj);
    totalPoints += (1 * pointsObj['1']) + (2 * pointsObj['2']) + (3 * pointsObj['3']);
    setTotalPoints(totalPoints);
    console.log('TOTAL POINTS >>> ', totalPoints);
    const percentGrade = ((totalPoints / (cardList.length * 3)) * 100).toFixed(2);
    setGrade(percentGrade);
    const newResultData = [
      { x: '0', y: pointsObj['0'] },
      { x: '1', y: pointsObj['1'] },
      { x: '2', y: pointsObj['2'] },
      { x: '3', y: pointsObj['3'] },
    ];
    console.log('NEW REISLT DATA >>> ', newResultData);
    setResultData(newResultData);
    setIsFinished(true);
    // set up graph
    //
  };

  const handleDismissAlert = () => {
    setIsVisibleAlert(false);
  };

  useEffect(() => {
    getSelectedCollection();
  }, [])

  useEffect(() => {
    if (pointsObj['cards-left'] === 0) {
      setHasBeatenHighScore(true);
      setVisibleModal(true);
      // setTimeout(() => setHasBeatenHighScore(false), 7000);
    }
  }, [pointsObj['cards-left']])

  const skip = () => {
    setAnswerObj({
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '4': true,
      '5': true,
      '6': true,
      '7': true,
      '8': true,
      '9': true,
      '10': true,
      '11': true,
      '12': true,
      '13': true,
      '14': true,
      '15': true,
      '16': true,
    });
    setPointsObj({
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 14,
      'cards-left': 0,
    });
  };

  return (
    <>
      <SpaceBetween direction="vertical" size="xl">
        <Container
          header={
            <Header
              variant="h1"
              description="Study Mode"
              counter={`${currentIndex + 1}/${cardList.length} - Card ${currentIndex + 1} ${
                answerObj[String(currentIndex)] === true
                ? 'has been answered ✅.'
                : 'has not been answered yet ❌.'
              }`}
              actions={
                <SpaceBetween direction="horizontal" size="s">
                  <Button
                    onClick={skip}
                  >
                    Skip
                  </Button>
                  <Button
                    onClick={handleGoBackClick}
                  >
                    Go back
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleFinishClick}
                  >
                    Finish
                  </Button>
                </SpaceBetween>
              }
            >
              {collectionName}
            </Header>
          }
        >
          <SpaceBetween direction="vertical" size="m">
            <Container
              header={
                <Header variant="h4">
                  Question
                </Header>
              }
            >
              {question}
            </Container>
            <Container
              header={
                <Header variant="h4"
                  // description="(The answer will be revealed once you've submitted your answer in the container below)"
                  // actions={
                  //   <SpaceBetween directio="horizontal" size="s">
                  //     <Button
                  //       onClick={reveal}
                  //     >
                  //       REVEAL
                  //     </Button>
                  //   </SpaceBetween>
                  // }
                >
                  Answer
                </Header>
              }
            >
              {!isRevealed
                ? "(The answer will be revealed once you've submitted your answer in the container below)"
                : (
                  <SpaceBetween direction="vertical" size="m">
                    {answer}
                    {isCorrect
                      ? (
                        isVisibleAlert &&
                        <Alert
                          dismissible
                          type="success"
                          header="Correct - Great job!"
                          onDismiss={handleDismissAlert}
                        >
                          <b>Your answer:</b> {guessInput}
                        </Alert>
                      )
                      : (
                        isVisibleAlert &&
                        <Alert
                          dismissible
                          type="error"
                          header="Incorrect - Maybe next time!"
                          onDismiss={handleDismissAlert}
                        >
                          <b>Your answer:</b> {guessInput}
                        </Alert>
                      )
                    }
                  </SpaceBetween>
                )
              }
            </Container>
            <Container
              header={
                <Header variant="h4">
                  Check your answer
                </Header>
              }
            >
              <SpaceBetween direction="vertical" size="m">
                <Input value={guessInput} type="text" onChange={handleGuessInput} />
                <SpaceBetween direction="horizontal" size="xl">
                  <Button
                    onClick={handleNoIdeaClick}
                  >
                    No idea
                  </Button>
                  <Button
                    onClick={handleRandomGuessClick}
                  >
                    Random guess
                  </Button>
                  <Button
                    onClick={handleConfidentGuessClick}
                  >
                    Confident Guess
                  </Button>
                  <Button
                    onClick={handleCertainClick}
                  >
                    Certain
                  </Button>
                </SpaceBetween>
              </SpaceBetween>
            </Container>
            <SpaceBetween direction="horizontal" size="xl">
              <Button
                onClick={handlePrevCardClick}
              >
                <Icon name="angle-left" size="medium"/>
              </Button>
              <Button
                onClick={handleNextCardClick}
              >
                <Icon name="angle-right" size="medium"/>
              </Button>
            </SpaceBetween>
          </SpaceBetween>
        </Container>
        {!isFinished
          ? null
          : (
            <Container
              header={
                <Header
                  variant="h1"
                >
                  Results
                </Header>
              }
            >
              <BarChart
                series={[
                  {
                    title: collectionName,
                    type: "bar",
                    data: [
                      { x: 'No idea', y: (pointsObj['0'] * 0) },
                      { x: 'Random guess', y: (pointsObj['1'] * 1) },
                      { x: 'Confident guess', y: (pointsObj['2'] * 2) },
                      { x: 'Certain', y: (pointsObj['3'] * 3) },
                    ],
                    valueFormatter: e => e,
                  },
                  {
                    title: "Your results",
                    type: "threshold",
                    y: totalPoints,
                    valueFormatter: e => e,
                  }
                ]}
                xDomain={[
                  'No idea',
                  'Random guess',
                  'Confident guess',
                  'Certain',
                ]}
                yDomain={[0, cardList.length * 3]}
                i18nStrings={{
                  filterLabel: "Filter displayed data",
                  filterPlaceholder: "Filter data",
                  filterSelectedAriaLabel: "selected",
                  detailPopoverDismissAriaLabel: "Dismiss",
                  legendAriaLabel: "Legend",
                  chartAriaRoleDescription: "line chart",
                  xTickFormatter: e => e,
                }}
                ariaLabel="Study results bar chart."
                errorText="Error loading results."
                height={300}
                loadingText="Loading results..."
                recoveryText="Retry"
                xScaleType="categorical"
                xTitle="Confidence level"
                yTitle="Cards"
                empty={
                  <Box textAlign="center" color="inherit">
                    <b>No data available</b>
                    <Box variant="p" color="inherit">
                      There is no data available
                    </Box>
                  </Box>
                }
                noMatch={
                  <Box textAlign="center" color="inherit">
                    <b>No matching data</b>
                    <Box variant="p" color="inherit">
                      There is no matching data to display
                    </Box>
                    <Button>Clear filter</Button>
                  </Box>
                }
              />
            </Container>
          )
        }
      </SpaceBetween>
      <Modal
        onDismiss={() => setVisibleModal(false)}
        visible={visibleModal}
        closeAriaLabel="Close modal"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button
                onClick={() => {
                  navigate('/app/collections')
                  setHasBeatenHighScore(false)
                  setVisibleModal(false)
                }}
              >
                View collections
              </Button>
              <Button
                onClick={() => {
                  setHasBeatenHighScore(false)
                  setVisibleModal(false)
                }}
              >
                Keep studying
              </Button>
            </SpaceBetween>
          </Box>
        }
      >
        Congrats! You finished this study session. You get participation confetti! 🥳🎉🎊
      </Modal>
    </>
  );
}
