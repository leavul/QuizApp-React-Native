import { Text, TouchableOpacity } from 'react-native';
import styles from './ChoiceTileStyles';

// ChoiceTile Component
// ----------------------
// Represents a single choice option in the quiz.
// - Changes background and text color based on state:
//     • Selected → dark background + white text
//     • Correct (after submission) → green background + white text
//     • Wrong (after submission) → red background + white text
// - Disabled after the result is shown to prevent re-selection.
export default function ChoiceTile({ setCurrentAnswerIndex, answerSubmitted, isSelected, isCorrect, isIncorrect, label, text }) {
    // Default colors
    let backgroundColor = '#ffffffff';
    let textColor = '#000000ff';
    let borderColor = '#f1f1f1';

    // Change colors based on state
    // ----------------------
    // If the answer is submitted
    if (answerSubmitted) {
        // If the answer is correct
        if (isCorrect) {
            const correctAnswerColor = '#4CAF50';

            backgroundColor = correctAnswerColor;
            textColor = '#ffffffff';
            borderColor = correctAnswerColor;
        }
        // If the answer is incorrect
        else if (isIncorrect) {
            const incorrectAnswerColor = '#F44336';

            backgroundColor = incorrectAnswerColor;
            textColor = '#ffffffff';
            borderColor = incorrectAnswerColor;
        }
    }
    // If no answer is submitted yet and there is a selected answer
    else if (isSelected) {
        const selectedColor = '#000000ff'

        backgroundColor = selectedColor;
        textColor = '#ffffffff';
        borderColor = selectedColor;
    }

    return (
        <TouchableOpacity
            style={[styles.cardView, { backgroundColor, borderColor }]}
            onPress={setCurrentAnswerIndex}
            activeOpacity={0.7}
            // Prevent clicking once an answer has been submitted
            disabled={answerSubmitted}
        >
            <Text style={[styles.choiceLabel, { color: textColor }]}>{label}</Text>
            <Text style={[styles.choiceText, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    );
}
