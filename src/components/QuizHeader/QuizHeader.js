import { View, Text } from 'react-native';
import styles from './QuizHeaderStyle';
import ProgressBarComponent from '../ProgressBarComponent/ProgressBarComponent';

// QuizHeader Component
// ----------------------
// Displays the quiz header with:
// - App title
// - Current question number
// - Progress bar
// - Score
export default function QuizHeader({ numberOfQuestions, currentQuestionIndex, score }) {
    return (
        <>
            <View style={styles.upperView}>
                <Text style={styles.appTitleText}>Quiz App</Text>
                <Text style={styles.subtitleText}>Qustion {currentQuestionIndex + 1} of {numberOfQuestions}</Text>
            </View>

            <ProgressBarComponent progress={(((currentQuestionIndex + 1) / numberOfQuestions) * 100)} />

            <Text style={styles.subtitleText}>Score: {score} correct</Text>
        </>

    );
}