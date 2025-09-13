import ChoicesSection from '../ChoicesSection/ChoicesSection';
import AnswerInfoComponet from "../AnswerInfoComponet/AnswerInfoComponet";
import SubmitAnswerButton from '../SubmitAnswerButton/SubmitAnswerButton';

// AnswerSection
// ----------------------
// Displays the choices of the current question and the submit answer button
// - The submit answer button is displayed when the answer is not submitted
// - The answer info view is displayed when the answer is submitted
export default function AnswerSection({ setCurrentAnswerIndex, onSubmitAnswer, onNextQustionOrFinishQuiz, questionChoices, currentAnswerIndex, answerSubmitted, correctAnswerIndex, answerIsCorrect, isLastQuestion }) {
    return (
        <>
            <ChoicesSection
                setCurrentAnswerIndex={setCurrentAnswerIndex}
                questionChoices={questionChoices}
                currentAnswerIndex={currentAnswerIndex}
                answerSubmitted={answerSubmitted}
                correctAnswerIndex={correctAnswerIndex}
            />
            {
                answerSubmitted
                    ? <AnswerInfoComponet
                        onNextQustionOrFinishQuiz={onNextQustionOrFinishQuiz}
                        answerIsCorrect={answerIsCorrect}
                        isLastQuestion={isLastQuestion}
                    />
                    : <SubmitAnswerButton
                        onSubmitAnswer={onSubmitAnswer}
                        canSubmitAnswer={currentAnswerIndex != null}
                    />
            }
        </>
    );
}