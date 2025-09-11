import { TouchableOpacity, Text } from 'react-native';
import styles from './CustomButtonStyles';

export default function CustomButton({ onPress, enabled = true, backgroundColor = '#000000ff', label }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
            disabled={!enabled}
            activeOpacity={0.7}>
            <Text
                style={styles.buttonText}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}