import { Text, TouchableOpacity } from 'react-native';
import styles from './QuestionTileStyles';

// QuestionTile Component
// ----------------------
// Represents a single answer option in the quiz.
// - Displays a label (e.g., "1.") and the answer text.
// - Changes background and text color based on state:
//     • Selected → dark background
//     • Correct (after submission) → green background
//     • Wrong (after submission) → red background
// - Disabled after the result is shown to prevent re-selection.
export default function QuestionTile({ onPress, isSelected, label, text, userSumbitAnswer, isCorrect, isIncorrect }) {
    // The default colors
    let backgroundColor = '#ffffffff';
    let textColor = '#000000ff';
    let borderColor = '#f1f1f1';

    if (userSumbitAnswer) {
        if (isCorrect) {
            // Mark correct answer: green background + white text
            const CorrectAnswer = '#4CAF50';

            backgroundColor = CorrectAnswer;
            textColor = '#ffffffff';
            borderColor = CorrectAnswer;
        } else if (isIncorrect) {
            // Mark incorrect selected answer: red background + white text
            const incorrectColor = '#F44336';

            backgroundColor = incorrectColor;
            textColor = '#ffffffff';
            borderColor = incorrectColor;
        }
    } else if (isSelected) {
        // Mark selected answer: black background + white text
        const selectedColor = '#000000ff'

        backgroundColor = selectedColor;
        textColor = '#ffffffff';
        borderColor = selectedColor;
    }

    return (
        <TouchableOpacity
            style={[styles.cardView, { backgroundColor, borderColor }]}
            onPress={onPress}
            activeOpacity={0.7}
            // Prevent clicking once an answer has been submitted
            disabled={userSumbitAnswer}
        >
            <Text style={[styles.choiceLabel, { color: textColor }]}>{label}</Text>
            <Text style={[styles.choiceText, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    );
}
