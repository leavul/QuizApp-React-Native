import { Text, View } from 'react-native';
import styles from './ProgressBarStyles';

export default function ProgressBar({ progress }) {
    return (
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
    );
}