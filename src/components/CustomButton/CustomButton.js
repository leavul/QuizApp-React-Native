import { TouchableOpacity, Text } from 'react-native';
import styles from './CustomButtonStyles';

export default function CustomButton({ onPress, isOn, label }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: isOn ? '#000000' : '#a2a2a2ff' }]}
            onPress={onPress}
            disabled={!isOn}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}