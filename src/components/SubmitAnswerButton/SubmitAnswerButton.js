import CustomButton from '../CustomButton/CustomButton';

// submitAnswerButton Component
// --------------------
// Button to submit the selected answer to the question in the quiz.
export default function SubmitAnswerButton({ onPress, enabled }) {
    // Style changes based on button state
    let backgroundColor = enabled
        ? '#000000ff' // Active state (user selects an answer and waits to submit it)
        : '#a2a2a2ff'; // Disabled state (user does not select any choice yet)

    return (
        <CustomButton
            onPress={onPress}
            enabled={enabled}
            backgroundColor={backgroundColor}
            label={'Answer Question'} />
    );
}