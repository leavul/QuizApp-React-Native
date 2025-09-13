import { Text, View } from 'react-native';
import styles from './ProgressBarComponentStyles';

// ProgressBarComponent
// ----------------------
// Displays a progress bar with the given progress percentage
export default function ProgressBarComponent({ progress }) {
    return (
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
    );
}