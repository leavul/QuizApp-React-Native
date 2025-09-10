import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
    },
    choiceLabel: {
        fontWeight: '500',
        marginRight: 20,
    },
    choiceText: {
        flex: 1,
        fontWeight: '400',
    },
});
