import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import ProgressBar from './src/components/ProgressBar/ProgressBar';
import QuestionTile from './src/components/QuestionTile/QuestionTile';
import CustomButton from './src/components/CustomButton/CustomButton';

export default function App() {
  const [userAnswer, setUserAnswer] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={styles.cardView}>
          <View style={styles.infoView}>
            <Text style={styles.appTitleText}>Quiz App</Text>
            <Text style={styles.subtitleText}>Qustion 1 of 5</Text>
          </View>

          <ProgressBar progress={0.20} />

          <Text style={styles.subtitleText}>Score: 0 correct</Text>
          <Text style={styles.questionText}>What is the capital of Saudi Arabia?</Text>

          <View style={styles.answersView}>
            <QuestionTile onPress={() => setUserAnswer(0)} isSelected={userAnswer === 0} label={'A.'} text={'Riyadh'} />
            <QuestionTile onPress={() => setUserAnswer(1)} isSelected={userAnswer === 1} label={'B.'} text={'Jeddah'} />
            <QuestionTile onPress={() => setUserAnswer(2)} isSelected={userAnswer === 2} label={'C.'} text={'Dammam'} />
            <QuestionTile onPress={() => setUserAnswer(3)} isSelected={userAnswer === 3} label={'D.'} text={'Mecca'} />
          </View>

          <CustomButton onPress={() => { console.log('button press') }} isOn={userAnswer != null} label={'Answer Question'} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  cardView: {
    width: '100%',
    maxWidth: 400,
    borderColor: '#f1f1f1ff',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#565656ff',
    fontSize: 13,
  },
  questionText: {
    fontSize: 16,
    marginTop: 25,
    marginBottom: 25,
  },
  answersView: {
    gap: 12,
    marginBottom: 25,
  },
});
