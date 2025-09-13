import { Text } from "react-native"
import styles from './ErrorViewStyles';
import CustomButton from "../CustomButton/CustomButton";

export default function ErrorView({ onTryAgain, text }) {
    return (
        <>
            <Text style={styles.errorTitle}>Failed to fetch questions:</Text>
            <Text style={styles.errorLabel}>{text}</Text>
            <CustomButton onPress={onTryAgain} text={'Try Again'} />
        </>
    );
}