import { TouchableOpacity, Text } from 'react-native';
import styles from './CustomButtonStyles';

export default function CustomButton({ onPress, enabled, label }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: enabled ? '#000000' : '#a2a2a2ff' }]}
            onPress={onPress}
            disabled={!enabled}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}