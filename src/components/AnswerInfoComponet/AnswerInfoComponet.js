import { View, Text } from "react-native"
import styles from './AnswerInfoComponetStyles';
import CustomButton from "../CustomButton/CustomButton";

// AnswerInfoComponet
// ----------------------
// Display answer info text and next question button:
// - Answer info text:
//   • Correct! ✅ or Incorrect! ❌ depends on the answer
// - Next question button:
//   • Last question → "Finish Quiz"
//   • Otherwise → show "Next Question"
export default function AnswerInfoComponet({ onNextQustionOrFinishQuiz, answerIsCorrect, isLastQuestion }) {
    return (
        <View style={styles.answerInfoView}>
            <Text style={styles.answerInfoText}>
                {
                    answerIsCorrect
                        ? 'Correct! ✅'
                        : 'Incorrect! ❌'
                }
            </Text>
            <CustomButton
                onPress={onNextQustionOrFinishQuiz}
                text={
                    isLastQuestion
                        ? 'Finish Quiz'
                        : 'Next Question'
                }
            />
        </View>
    );
}