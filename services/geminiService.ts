import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiTravelTip = async (location: string, activity: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      I am a tourist in Thailand. I am currently at "${location}" doing "${activity}".
      Give me one short, interesting, and specific cultural tip or fun fact about this place.
      Keep it under 40 words.
      Tone: Friendly, local, enthusiastic.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Enjoy the moment! Thailand is the land of smiles.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Check out the local architecture and smile at the locals!";
  }
};

export const getThaiPhrase = async (context: string): Promise<{thai: string, pronunciation: string, english: string}> => {
  try {
     // Mocking response structure for safety if JSON parsing fails, but attempting JSON response
     const model = 'gemini-2.5-flash';
     const prompt = `
       Give me a useful Thai phrase for this situation: "${context}".
       Return ONLY a JSON object with keys: "thai" (Thai script), "pronunciation" (English phonetics), "english" (meaning).
     `;
     
     const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: { responseMimeType: 'application/json' }
     });
     
     const text = response.text;
     if(!text) throw new Error("No text returned");
     return JSON.parse(text);

  } catch (e) {
    return {
      thai: "สวัสดี",
      pronunciation: "Sa-wat-dee",
      english: "Hello (General greeting)"
    };
  }
}