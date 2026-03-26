import { Configuration, OpenAIApi } from 'openai';

// OpenAI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Function to analyze meals using OpenAI
export const analyzeMeal = async (mealDescription) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Analyze the following meal: ${mealDescription}`,
      max_tokens: 100,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error analyzing meal:', error);
    throw new Error('Unable to analyze meal. Please try again later.');
  }
};
