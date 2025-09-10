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

  const [userAnswerIndex, setUserAnswerIndex] = useState(null);
  const [userSumbitAnswer, setUserSumbitAnswer] = useState(false);;
  const [score, setScore] = useState(0);

  const [buttonAnswerInfoLabel, setButtonAnswerInfoLabel] = useState(null);

  function fetchQuestions() {

  }

  function userAnswerQuestion() {
    setUserSumbitAnswer(true);

    // Check if user answer is right
    if (userAnswerIndex === correctAnswerIndex) {
      setScore(score + 1);
      // Show correct answer info
      setButtonAnswerInfoLabel('Correct! ✅');
    } else {
      // Show incorrect answer info, with tell witch answer is correct
      setButtonAnswerInfoLabel('Incorrect! ❌' + '\n\n' + 'The correct answer was A. Riyadh');
    }

    // Move to next question after 1.5 seconds
    setTimeout(() => {
      // Reset states
      setUserAnswerIndex(null);
      setButtonAnswerInfoLabel(null);

      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      // Reset submit answer state,
      // to allow the user to select an answer for the next question
      setUserSumbitAnswer(false);
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

                <View style={styles.answersView} pointerEvents={userSumbitAnswer ? "none" : null}>
                  <QuestionTile onPress={() => setUserAnswerIndex(0)} isSelected={userAnswerIndex === 0} label={'A.'} text={'Riyadh'} />
                  <QuestionTile onPress={() => setUserAnswerIndex(1)} isSelected={userAnswerIndex === 1} label={'B.'} text={'Jeddah'} />
                  <QuestionTile onPress={() => setUserAnswerIndex(2)} isSelected={userAnswerIndex === 2} label={'C.'} text={'Dammam'} />
                  <QuestionTile onPress={() => setUserAnswerIndex(3)} isSelected={userAnswerIndex === 3} label={'D.'} text={'Mecca'} />
                </View>


                {
                  /* 
                  - Answer the question and show the answer info button
                  - Disable the button if the user didn't select an answer or already submitted it
                  - If the user submits an answer, show the answer info label,
                    and move to the next question after a specific duration
                  */

                }
                <CustomButton
                  // Handle button press: only submit answer if an answer is selected and not already submitted
                  onPress={() => {
                    if (!userSumbitAnswer && userAnswerIndex != null) {
                      userAnswerQuestion();
                    }
                  }}
                  // Enable the button only if the user has selected an answer and hasn't submitted yet
                  enabled={userAnswerIndex != null && !userSumbitAnswer}
                  // Update the label: show answer info if submitted, otherwise prompt to answer the question
                  label={userSumbitAnswer ? buttonAnswerInfoLabel : 'Answer Question'}
                />


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
