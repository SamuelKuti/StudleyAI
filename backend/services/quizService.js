const openai = require('../config/openai');
const { extractTextFromPDF } = require('../utils/pdfParser');

class QuizService {
  async generateQuiz(pdfBuffer, numQuestions = 5) {
    try {
      const text = await extractTextFromPDF(pdfBuffer);

      const prompt = `Create a multiple choice quiz from the following text. Generate ${numQuestions} questions. Format as a JSON array where each question object has: "question", "options" (array of 4 choices), "correctAnswer" (index of correct option), and "explanation". Text: ${text}`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that creates educational quizzes. Create clear, challenging questions that test understanding rather than just memorization."
          },
          {
            role: "user",
            content: prompt
          }
        ],
      });

      const content = completion.choices[0].message.content;
      const jsonStr = content.replace(/```json\n?|\n?```/g, '').trim();
      const quiz = JSON.parse(jsonStr);
      
      return quiz;

    } catch (error) {
      console.error('Error details:', error);
      throw new Error('Failed to generate quiz: ' + error.message);
    }
  }
}

module.exports = new QuizService(); 