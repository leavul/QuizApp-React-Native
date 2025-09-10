import { TouchableOpacity, Text } from 'react-native';
import styles from './CustomButtonStyles';

export default function CustomButton({ onPress, enabled, backgroundColor, forgroundColor, fontWeight, label }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor }]}
            onPress={onPress}
            disabled={!enabled}
            activeOpacity={0.7}>
            <Text
                style={[styles.buttonText, { color: forgroundColor, fontWeight: fontWeight }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}