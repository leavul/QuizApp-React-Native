import { View, Text } from 'react-native';
import styles from './ResultViewStyles';
import CustomButton from '../CustomButton/CustomButton';

export default function ResultView({ score, numberOfQuestions, onRestartQuiz }) {
    return (
        <>
            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>Quiz Completed!</Text>
                <Text style={styles.resultLabel}>Your Score:</Text>
                <Text style={styles.resultScore}>{score} / {numberOfQuestions}</Text>
            </ View>
            <CustomButton
                onPress={onRestartQuiz}
                enabled={true}
                backgroundColor={'#000000ff'}
                forgroundColor={'#ffffffff'}
                text={'Take Quiz Again'} />
        </>
    );
}