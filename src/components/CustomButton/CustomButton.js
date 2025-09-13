import { TouchableOpacity, Text } from 'react-native';
import styles from './CustomButtonStyles';

// CustomButton
// ----------------------
// Display a custom button with the following props:
// - onPress: function to call when button is pressed
// - enabled: boolean to enable or disable the button
// - backgroundColor: string to set the button background color
// - text: string to set the button text
export default function CustomButton({ onPress, enabled = true, backgroundColor = '#000000ff', text }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
            disabled={!enabled}
            activeOpacity={0.7}>
            <Text
                style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}