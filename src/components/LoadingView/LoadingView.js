import { ActivityIndicator, Text } from "react-native"
import styles from './LoadingViewStyles';

export default function LoadingView() {
    return (
        <>
            <ActivityIndicator size="large" color={'#000000ff'} />
            <Text style={styles.loadingText}>Loading ...</Text>
        </>
    );
}