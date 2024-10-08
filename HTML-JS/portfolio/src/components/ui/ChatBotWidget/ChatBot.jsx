import React, { useEffect, useState } from "react";

import "react-chat-elements/dist/main.css"
import { Button, Input, MessageList } from "react-chat-elements";

// @chatscope/chat-ui-kit-react - reading doc...

import axios from "axios";

import { API_GEMINI_URL } from "@constants/url";
import { GEMINI_KEY } from "@constants/envUrl";

import SendIcon from '@mui/icons-material/Send';

import { Dot } from "@components/ui";

import { ChatBotWidgetStyle } from "@components/styles";

import classNames from "classnames/bind";
const cx = classNames.bind(ChatBotWidgetStyle);

export default function ChatBot() {
  const [isReplying, setIsReplying] = useState(false)

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      position: "left",
      type: "text",
      text: "Hi 👋 How can I assist you?",
    }
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsReplying(true)
    const question = e.target[0].value

    const userMessage = {
      position: "right",
      // title: 'You',
      type: "text",
      text: question,
    };
    setMessages([...messages, userMessage]);
    setInputValue('');

    try {
      const response = await axios({
        url: `${API_GEMINI_URL}?key=${GEMINI_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
        // timeout: 2000
      });

      const aiMessage = {
        position: "left",
        type: "text",
        text: response["data"]["candidates"][0]["content"]["parts"][0]["text"],
      };

      setIsReplying(false)
      setMessages([...messages, userMessage, aiMessage]);

      // scroll to bottom  msg-list
      // const msgList = document.querySelector('.msgList');
      // msgList.scrollTo({
      //   top: msgList.scrollHeight,
      //   behavior: 'smooth'
      // });
    } catch (error) {
      console.log(error);
      setIsReplying(false)
    }
  }

  return (
    <div className={cx(["chatBotFrame", "ml-auto w-[88%] bg-white rounded-xl"])}>
      <div className={cx(["eveBotTitle", "flex items-center justify-center p-3 rounded-ss-xl rounded-se-xl bg-black text-xl text-cyan-300 font-semibold border border-solid border-cyan-300 border-b-0"])}>EveBot</div>
      <MessageList
        className={cx(['msgList', 'message-list pl-1 pr-1 h-72 rounded-xl overflow-y-auto'])}
        lockable={false}
        toBottomHeight={'100%'}
        dataSource={messages}
      />
      {isReplying ? (
        <div className="p-1 pl-2 flex gap-1 items-end text-[darkcyan]">
          <p className="text-[1.2rem]">Eve is replying</p>
          <Dot className="text-4xl">.</Dot>
          <Dot className="text-4xl">.</Dot>
          <Dot className="text-4xl">.</Dot>
        </div>
      ) : (
        <form
          className="flex gap-1 p-1 border-t border-t-gray-300 border-solid rounded-es-xl rounded-ee-xl"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <Input
              inputStyle={{ height: '2.55rem' }}
              placeholder="Type here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <Button
            className="rounded-xl !bg-white"
            title="Send"
            icon={{
              component: <SendIcon fontSize="small" sx={{ color: 'black', '&:hover': { color: 'darkcyan' } }} />
            }}
            type="submit"
          />
        </form>

      )}
    </div>
  )
}
