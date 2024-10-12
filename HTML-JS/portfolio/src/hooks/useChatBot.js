import axios from "axios";

import { API_GEMINI_URL } from "@constants/url";
import { GEMINI_KEY } from "@constants/envUrl";

export default async function useChatBot(question, setIsReplying) {
  let msg = {};
  try {
    const response = await axios({
      url: `${API_GEMINI_URL}?key=${GEMINI_KEY}`,
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
      // timeout: 2000
    });

    msg = {
      position: "left",
      type: "text",
      text: response["data"]["candidates"][0]["content"]["parts"][0]["text"],
    };

    // scroll to bottom  msg-list
    // const msgList = document.querySelector('.msgList');
    // msgList.scrollTo({
    //   top: msgList.scrollHeight,
    //   behavior: 'smooth'
    // });
  } catch (error) {
    console.log(error);
  } finally {
    setIsReplying(false);
  }
  return msg;
}
