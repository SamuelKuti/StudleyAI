const openai = require('../config/openai');
const { extractTextFromPDF } = require('../utils/pdfParser');

class FlashcardService {
  async generateFlashcards(pdfBuffer) {
    try {
      // Extract text from PDF
      const text = await extractTextFromPDF(pdfBuffer);

      // Create prompt for GPT-4o
      const prompt = `Create flashcards from the following text. Format them as an array of JSON objects with "front" and "back" properties. Each flashcard should focus on a key concept. Text: ${text}`;

      // Call GPT-4o API
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that creates educational flashcards. Create concise, clear flashcards that help students learn effectively."
          },
          {
            role: "user",
            content: prompt
          }
        ],
      });

      // Parse the response
      const content = completion.choices[0].message.content;
      const jsonStr = content.replace(/```json\n?|\n?```/g, '').trim();
      const flashcards = JSON.parse(jsonStr);
      
      return flashcards;

    } catch (error) {
      throw new Error('Failed to generate flashcards: ' + error.message);
    }
  }
}

module.exports = new FlashcardService();