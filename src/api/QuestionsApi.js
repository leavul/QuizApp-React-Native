// getQuestions
// ----------------------
// Fetch questions from API
// - Amount: 5 questions
// - Category: General Knowledge
// - Difficulty: Easy
// - Type: Multiple Choice
// - Return: Array of questions
export default async function getQuestions() {
    // API URL
    const url = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple';

    try {
        // Fetch questions from API
        let response = await fetch(url);

        // Check if response is ok
        if (!response.ok) {
            throw new Error("Could not fetch questions");
        }

        // Get response data
        const data = await response.json();

        // Initialize questions list
        let questionsList = [];

        // Loop through questions
        for (let question of data['results']) {
            // Get question incorrect choices
            let choices = question['incorrect_answers'];

            // Get question correct answer
            let correct_answer = question['correct_answer']
            // Generate random index for correct answer
            // Use to append correct answer to the question choices
            let randomIndexForCorrectAnswer = Math.floor(Math.random() * (choices.length + 1));
            // Add correct answer to choices at random index
            choices.splice(randomIndexForCorrectAnswer, 0, correct_answer);

            // Create new question object
            const newQuestionObject = {
                // Store question text
                question: question['question'],
                // Store what the correct answer index is
                correctAnswerIndex: randomIndexForCorrectAnswer,
                // Store question choices
                choices: choices,
            }
            // Add new question object to questions list
            questionsList.push(newQuestionObject);
        }
        // Return questions list
        return questionsList;

    } catch (error) {
        // Throw error
        throw new Error(error.message);
    }
}