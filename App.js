import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import ProgressBar from './src/components/ProgressBar/ProgressBar';
import QuestionTile from './src/components/QuestionTile/QuestionTile';
import CustomButton from './src/components/CustomButton/CustomButton';

export default function App() {
  const totalQuestions = 5;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const correctAnswerIndex = 0;

  const [userAnswer, setUserAnswer] = useState(null);
  const [doesUserSumbitAnswer, setDoesUserSumbitAnswer] = useState(false);;
  const [score, setScore] = useState(0);

  const [buttonAnswerInfoLabel, setButtonAnswerInfoLabel] = useState(null);

  function fetchQuestions() {

  }

  function userSubmitAnswer() {
    setDoesUserSumbitAnswer(true);

    // Check if user answer is right
    if (userAnswer === correctAnswerIndex) {
      setScore(score + 1);
      setButtonAnswerInfoLabel('Correct! ✅');
    } else {
      setButtonAnswerInfoLabel('Incorrect! ❌' + '\n\n' + 'The correct answer was A. Riyadh');
    }

    setTimeout(() => {
      setButtonAnswerInfoLabel(null)
      setUserAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setDoesUserSumbitAnswer(false);
    }, 1500);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={styles.cardView}>
          {currentQuestionIndex + 1 > totalQuestions ?
            (
              <>
                <View style={styles.resultContainer}>
                  <Text style={styles.resultTitle}>Quiz Completed!</Text>
                  <Text style={styles.resultLabel}>Your Score:</Text>
                  <Text style={styles.resultScore}>{score} / {totalQuestions}</Text>
                </ View>
                <CustomButton onPress={fetchQuestions} enabled={true} label={'Take Quiz Again'} />
              </>
            )
            :
            (
              <>
                <View style={styles.infoView}>
                  <Text style={styles.appTitleText}>Quiz App</Text>
                  <Text style={styles.subtitleText}>Qustion {currentQuestionIndex + 1} of {totalQuestions}</Text>
                </View>

                <ProgressBar progress={(((currentQuestionIndex + 1) / totalQuestions))} />

                <Text style={styles.subtitleText}>Score: {score} correct</Text>
                <Text style={styles.questionText}>What is the capital of Saudi Arabia?</Text>

                <View style={styles.answersView} pointerEvents={doesUserSumbitAnswer ? "none" : null}>
                  <QuestionTile onPress={() => setUserAnswer(0)} isSelected={userAnswer === 0} label={'A.'} text={'Riyadh'} />
                  <QuestionTile onPress={() => setUserAnswer(1)} isSelected={userAnswer === 1} label={'B.'} text={'Jeddah'} />
                  <QuestionTile onPress={() => setUserAnswer(2)} isSelected={userAnswer === 2} label={'C.'} text={'Dammam'} />
                  <QuestionTile onPress={() => setUserAnswer(3)} isSelected={userAnswer === 3} label={'D.'} text={'Mecca'} />
                </View>

                {
                  doesUserSumbitAnswer ?
                    <CustomButton label={buttonAnswerInfoLabel} /> :
                    <CustomButton onPress={() => userSubmitAnswer(userAnswer)} enabled={userAnswer != null} label={'Answer Question'} />
                }

              </>

            )}
        </View>
      </SafeAreaView >
    </View >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  resultScore: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  cardView: {
    width: '100%',
    maxWidth: 400,
    borderColor: '#f1f1f1ff',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#565656ff',
    fontSize: 13,
  },
  questionText: {
    fontSize: 16,
    marginTop: 25,
    marginBottom: 25,
  },
  answersView: {
    gap: 12,
    marginBottom: 25,
  },
});
