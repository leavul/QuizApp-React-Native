import { Text, TouchableOpacity } from 'react-native';
import styles from './QuestionTileStyles';

export default function QuestionTile({ onPress, isSelected, label, text }) {
    return (
        <TouchableOpacity
            style={[styles.cardView, { backgroundColor: isSelected ? '#000000' : null }]}
            onPress={onPress}
            activeOpacity={0.7}
            >
            <Text style={[styles.choiceLabel, { color: isSelected ? '#ffffffff' : null }]}>{label}</Text>
            <Text style={[styles.choiceText, { color: isSelected ? '#ffffffff' : null }]}>{text}</Text>
        </TouchableOpacity>
    );
}