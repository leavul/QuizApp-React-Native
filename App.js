import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import ProgressBar from './src/components/ProgressBar/ProgressBar';
import QuestionTile from './src/components/QuestionTile/QuestionTile';
import CustomButton from './src/components/CustomButton/CustomButton';
import SubmitAnswerButton from './src/components/SubmitAnswerButton/SubmitAnswerButton';

export default function App() {
  const totalQuestions = 5;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const correctAnswerIndex = 0;

  const [userAnswerIndex, setUserAnswerIndex] = useState(null);
  const [userSumbitAnswer, setUserSumbitAnswer] = useState(false);;
  const [score, setScore] = useState(0);

  const [answerInfo, setButtonAnswerInfoLabel] = useState(null);

  const [finishQuestions, setFinishQuestions] = useState(false);

  function fetchQuestions() {
    setCurrentQuestionIndex(0);
    setUserAnswerIndex(null);
    setUserSumbitAnswer(false);
    setScore(0);
    setButtonAnswerInfoLabel(null);
    setFinishQuestions(false);
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
      setButtonAnswerInfoLabel('Incorrect! ❌');
    }

  }

  function moveToNextQustion() {
    // Reset states
    setUserAnswerIndex(null);
    setUserSumbitAnswer(false);
    setButtonAnswerInfoLabel(null);

    if (currentQuestionIndex + 1 === totalQuestions) {
      setFinishQuestions(true);
      return;
    }

    // Move to next question index
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={styles.cardView}>
          {
            finishQuestions
              ? (
                <>
                  <View style={styles.resultContainer}>
                    <Text style={styles.resultTitle}>Quiz Completed!</Text>
                    <Text style={styles.resultLabel}>Your Score:</Text>
                    <Text style={styles.resultScore}>{score} / {totalQuestions}</Text>
                  </ View>
                  <CustomButton
                    onPress={fetchQuestions}
                    enabled={true}
                    backgroundColor={'#000000ff'}
                    forgroundColor={'#ffffffff'}
                    label={'Take Quiz Again'} />
                </>
              )
              : (
                <>
                  <View style={styles.infoView}>
                    <Text style={styles.appTitleText}>Quiz App</Text>
                    <Text style={styles.subtitleText}>Qustion {currentQuestionIndex + 1} of {totalQuestions}</Text>
                  </View>

                  <ProgressBar progress={(((currentQuestionIndex + 1) / totalQuestions) * 100)} />

                  <Text style={styles.subtitleText}>Score: {score} correct</Text>
                  <Text style={styles.questionText}>What is the capital of Saudi Arabia?</Text>

                  {
                    /*
                      - Render a list of answer choices dynamically using map
                      - Each answer is shown as a QuestionTile with:
                          • A label (numbered 1, 2, 3, ...)
                          • A text
                      - When a user taps an answer, update the selected index
                      - Highlight the selected answer
                      - After submitting:
                          • Mark the correct answer
                          • Mark the selected wrong answer (if any)
                    */
                  }
                  <View style={styles.answersView}>
                    {["Riyadh", "Jeddah", "Dammam", "Mecca"].map((text, index) => (
                      <QuestionTile
                        key={index}
                        onPress={() => setUserAnswerIndex(index)}
                        isSelected={userAnswerIndex === index}
                        label={`${index + 1}.`}
                        text={text}
                        userSumbitAnswer={userSumbitAnswer}
                        isCorrect={index === correctAnswerIndex}
                        isIncorrect={index === userAnswerIndex && userAnswerIndex !== correctAnswerIndex}
                      />
                    ))}
                  </View>
                  {
                    userSumbitAnswer
                      ?
                      <View style={styles.answerInfoView}>
                        <Text style={styles.answerInfoText}>{answerInfo}</Text>
                        {
                          /*
                          - The next question button
                          - Label is dynamic based on state:
                            • Last question → "Finish Quiz"
                            • Otherwise → show "Next Question"
                          */
                        }
                        <CustomButton onPress={moveToNextQustion}
                          label={
                            (currentQuestionIndex + 1 === totalQuestions)
                              ? 'Finish Quiz'
                              : 'Next Question'
                          } />
                      </View>
                      :

                      /*
                        - The main quiz button
                            • Only submits if an answer is selected and not already submitted
                            • Disabled otherwise
                      */
                      <SubmitAnswerButton
                        onPress={userAnswerQuestion}
                        // Enable the button only if the user has selected an answer and hasn't submitted yet
                        enabled={userAnswerIndex != null && !userSumbitAnswer}
                      />
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
  answerInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  answerInfoText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
