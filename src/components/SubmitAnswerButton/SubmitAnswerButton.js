import CustomButton from '../CustomButton/CustomButton';

// SubmitAnswerButton
// ----------------------
// Button to submit the selected answer of the current question
// - Active state: user selects an answer and waits to submit it
// - Disabled state: user does not select any choice yet
export default function SubmitAnswerButton({ onSubmitAnswer, canSubmitAnswer }) {
    // Style changes based on button state
    let backgroundColor = canSubmitAnswer
        ? '#000000ff' // Active state (user selects an answer and waits to submit it)
        : '#a2a2a2ff'; // Disabled state (user does not select any choice yet)

    return (
        <CustomButton
            onPress={onSubmitAnswer}
            enabled={canSubmitAnswer}
            backgroundColor={backgroundColor}
            text={'Submit Answer'} />
    );
}