import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import LoadingView from './src/components/LoadingView/LoadingView';
import ErrorView from './src/components/ErrorView/ErrorView';
import ResultView from './src/components/ResultView/ResultView';
import QuizHeader from './src/components/QuizHeader/QuizHeader';
import QuestionTile from './src/components/QuestionTile/QuestionTile';
import AnswerSection from './src/components/AnswerSection/AnswerSection';
import getQuestions from './src/api/QuestionsApi';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState('');

  const [questions, setQuestions] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finishQuestions, setFinishQuestions] = useState(null);

  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  // Fetch questions when app loads
  useEffect(() => {
    fetchQuestions();
  }, []);

  // Funtion to fetch questions from API
  async function fetchQuestions() {
    setLoading(true);
    setErrorText('');

    setQuestions([]);
    setCurrentQuestionIndex(0);
    setFinishQuestions(false);

    setCurrentAnswerIndex(null);
    setAnswerSubmitted(false);
    setAnswerIsCorrect(null);
    setScore(0);

    try {
      // Fetch questions from API
      const fetchedQuestions = await getQuestions();

      // If no questions are fetched, throw error
      if (!fetchedQuestions.length) {
        throw new Error('No questions found. Please try again latter')
      }
      setQuestions(fetchedQuestions);
      setNumberOfQuestions(fetchedQuestions.length);
    } catch (error) {
      setErrorText(error.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // Function to validate user answer
  function validateAnswer(correctAnswerIndex) {
    setAnswerSubmitted(true);

    // Check if user answer is right
    if (currentAnswerIndex === correctAnswerIndex) {
      setScore(score + 1);
      // Set answer is correct
      setAnswerIsCorrect(true);
    } else {
      // Set answer is incorrect
      setAnswerIsCorrect(false);
    }

  }

  // Function to move to next question or finish quiz
  function nextQustionOrFinishQuiz(isLastQuestion) {
    // Reset states
    setCurrentAnswerIndex(null);
    setAnswerSubmitted(false);
    setAnswerIsCorrect(null);

    // If it is the last question, finish quiz
    if (isLastQuestion) {
      setFinishQuestions(true);
      return;
    }

    // Move to next question index
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  // Loading state
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <LoadingView />
      </SafeAreaView>
    );
  }

  // Error state
  else if (errorText) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.cardView}>
          <ErrorView onTryAgain={fetchQuestions} text={errorText} />
        </View>
      </SafeAreaView>
    );
  }

  // Finish all questions state
  else if (finishQuestions) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.cardView}>
          <ResultView
            score={score}
            numberOfQuestions={numberOfQuestions}
            onRestartQuiz={fetchQuestions}
          />
        </View>
      </SafeAreaView>
    );

  }
  // Default state
  // Show question and it's choices
  else {
    // Check if it is the last question
    const isLastQuestion = (currentQuestionIndex + 1) === numberOfQuestions;

    // Get current question
    const currentQuestion = questions[currentQuestionIndex];
    const questionText = currentQuestion['question'];
    const correctAnswerIndex = currentQuestion['correctAnswerIndex'];
    const questionChoices = currentQuestion['choices'];

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.cardView}>
          {
            /*
            Show: 
            - quiz app title
            - question number
            - progress bar
            - score
            */
          }
          <QuizHeader
            numberOfQuestions={numberOfQuestions}
            currentQuestionIndex={currentQuestionIndex}
            score={score}
          />

          {
            /* 
            Show:
            - the question text
            */
          }
          <QuestionTile text={questionText} />

          {
            /* 
            Show:
            - question choices
            - answer info if user submitted an answer otherwise submit answer button 
            */
          }
          <AnswerSection
            setCurrentAnswerIndex={setCurrentAnswerIndex}
            onSubmitAnswer={() => validateAnswer(correctAnswerIndex)}
            onNextQustionOrFinishQuiz={() => nextQustionOrFinishQuiz(isLastQuestion)}
            questionChoices={questionChoices}
            currentAnswerIndex={currentAnswerIndex}
            answerSubmitted={answerSubmitted}
            correctAnswerIndex={correctAnswerIndex}
            answerIsCorrect={answerIsCorrect}
            isLastQuestion={isLastQuestion}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
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
});
