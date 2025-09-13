import { View } from "react-native"
import ChoiceTile from '../ChoiceTile/ChoiceTile';
import styles from './ChoicesSectionStyles';

// ChoicesSection
// ----------------------
// Displays the choices of the current question
export default function ChoicesSection({ setCurrentAnswerIndex, questionChoices, currentAnswerIndex, answerSubmitted, correctAnswerIndex }) {
    return (
        <View style={styles.answersView}>
            {
                questionChoices.map(
                    (text, index) =>
                    (
                        <ChoiceTile
                            key={index}
                            setCurrentAnswerIndex={() => setCurrentAnswerIndex(index)}
                            answerSubmitted={answerSubmitted}
                            isSelected={currentAnswerIndex === index}
                            isCorrect={index === correctAnswerIndex}
                            isIncorrect={index === currentAnswerIndex && currentAnswerIndex !== correctAnswerIndex}
                            label={`${index + 1}.`}
                            text={text}
                        />
                    )
                )
            }
        </View>
    );
}
