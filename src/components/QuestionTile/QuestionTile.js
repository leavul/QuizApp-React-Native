import { Text } from 'react-native';
import styles from './QuestionTileStyles';

// QuestionTile
// ----------------------
// Displays a question tile
export default function QuestionTile({ text }) {
    return (
        <Text style={styles.questionText}>{text}</Text>
    );
}