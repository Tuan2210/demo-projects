// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import axios from "axios";
// import OpenAI from "openai";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config({ path: path.resolve(__dirname, "../../.env.local") }); // root

// // ERROR 409 end of limit call API openAI GPT

// const proxy = {
//   host: "proxyHost",
//   port: 9443,
// };

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3040/v1",
//   proxy: proxy,
// });

// const openai = new OpenAI({
//   apiKey: process.env.VITE_GPT_KEY,
//   // apiKey: "anything",
//   axios: axiosInstance,
// });

// const chatBotController = {
//   fetchChatGPT: async (req, res) => {
//     // const opts = {
//     //   method: "POST",
//     //   headers: {
//     //     "Authorization": `Bearer ${process.env.VITE_GPT_KEY}`,
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify({
//     //     model: "gpt-3.5-turbo",
//     //     messages: [{ role: "user", content: "how are u?" }],
//     //     max_tokens: 100,
//     //   }),
//     // };

//     // try {
//     //   const resp = await fetch('https://api.openai.com/v1/chat/completions', opts)
//     //   const data = await resp.json()
//     //   res.send(data)
//     // } catch (error) {
//     //   console.error(error)
//     // }

//     try {
//       const chatCompletion = await openai.chat.completions.create({
//         messages: [{ role: "user", content: "how are u?" }],
//         model: "gpt-3.5-turbo",
//         max_tokens: 100,
//       });

//       if (chatCompletion.choices && chatCompletion.choices.length > 0) {
//         res.send(chatCompletion.choices[0].message.content);
//       } else
//         res.status(500).send({ error: "No choices found in API response" });
//     } catch (error) {
//       console.error(error);
//       // res.status(500).send({ error: "Error fetching from OpenAI API" });
//     }
//   },
// };

// export default chatBotController;
