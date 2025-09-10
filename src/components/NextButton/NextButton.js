import CustomButton from '../CustomButton/CustomButton';

// NextButton Component
// --------------------
// Button for moving to the next step in the quiz.
// - Submits the selected answer
// - Shows correct/incorrect state
// - Label is passed as a prop and reflects the current quiz state 
//   (e.g., "Answer Question", "Correct"/"Incorrect", "Finish Quiz")
export default function NextButton({ onPress, enabled, answerSubmited, label }) {

    // Style changes based on button state
    let backgroundColor = enabled
        ? '#000000ff' // Active state (user selects an answer and waits to submit it)
        : answerSubmited
            ? '#ECECF0' // Submitted answer state
            : '#a2a2a2ff'; // Disabled state (user does not select any choice yet)
    let forgroundColor = answerSubmited
        ? '#000000ff' // Submitted state
        : '#ffffffff'; // Any other state (Active and Disabled state (user does not select any choice yet))
    let fontWeight = answerSubmited
        ? 'normal' // Submitted state
        : 'bold'; // Any other state (Active and Disabled state (user does not select any choice yet))

    return (
        <CustomButton onPress={onPress}
            enabled={enabled}
            backgroundColor={backgroundColor}
            forgroundColor={forgroundColor}
            fontWeight={fontWeight}
            label={label} />
    );
}