import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import logo from "../assets/static-images/logo.jpg";
import languageContext from "../contexts/languageContext";
import { BiSolidMessageRounded } from "react-icons/bi";

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(false);
    const { language } = useContext(languageContext);

    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [responses, loading]);

    // Bot greeting message
    useEffect(() => {
        setResponses([
            {
                role: "assistant",
                text:
                    language === "ro"
                        ? "Salut! Cu ce te pot ajuta?"
                        : "Hello, how can I help you?",
            },
        ]);
    }, [language]);

    const toggleChat = () => setOpen((prev) => !prev);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        const userMessage = { role: "user", text: query };
        setResponses((prev) => [...prev, userMessage]);
        setQuery("");
        setLoading(true);

        try {
            const res = await axios.post(
                "http://uiprimeapi.onrender.com/api/v1/chat/",
                { query },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );

            setResponses((prev) => [
                ...prev,
                { role: "assistant", text: res.data.answer },
            ]);
        } catch (error) {
            console.error("API Error:", error);
            setResponses((prev) => [
                ...prev,
                { role: "assistant", text: language === "ro" ? "A apărut o eroare." : "Something went wrong." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const TypingIndicator = () => {
        const [dots, setDots] = useState("");

        useEffect(() => {
            const interval = setInterval(() => {
                setDots((prev) => (prev.length < 3 ? prev + "." : ""));
            }, 400);
            return () => clearInterval(interval);
        }, []);

        return <p className="text-gray-500 italic">{language === "ro" ? "Scrie" : "Typing"}{dots}</p>;
    };

    return (
        <div className="font-barlow">
            {true && (
                <div className="fixed bottom-6 left-6 z-50">
                    <button
                        onClick={toggleChat}
                        className={`fixed flex items-center justify-center bottom-6 right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#1E2008] hover:bg-gray-800 rounded-full 
                            shadow-lg transition-all duration-300 z-50 cursor-pointer text-xl border-[3px] border-[#28b5af]`}
                    >
                        <BiSolidMessageRounded className="text-[#28b5af] text-2xl sm:text-3xl"/>
                    </button>
                </div>
            )}

            <div
                className={`fixed sm:right-[90px] w-full sm:w-[350px] h-[100vh] sm:h-[500px] bg-white sm:rounded-xl shadow-xl flex flex-col z-[999] transition-all duration-200 ease-in-out ${open ? "opacity-100 bottom-0" : "-bottom-[200vh] opacity-50 pointer-events-none"}`}
            >
                <div className="bg-white text-white border-b border-gray-300 p-4 rounded-t-xl flex justify-between items-center">
                    <div className="flex items-center gap-[10px]">
                        <img src={logo} alt="" className="h-[25px] rounded-lg" />
                        <span className="font-semibold text-black text-[18px]">AI Assistant</span>
                    </div>
                    <button onClick={toggleChat} className="text-black text-3xl font-bold cursor-pointer">×</button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
                    {responses.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
  key={idx}
  className={`px-4 py-2 rounded-[28px] break-words max-w-[80%] w-fit ${
    msg.role === "user"
      ? "bg-[#28b5af] text-white self-end ml-auto text-right"
      : "bg-gray-200 text-black self-start mr-auto text-left"
  }`}
  style={{ width: "fit-content", maxWidth: "70%" }}
>
  {msg.text}
</div>
                        </div>
                    ))}
                    {loading && <TypingIndicator />}
                    <div ref={bottomRef} />
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="p-3 border-t border-gray-300 bg-white flex items-center gap-2"
                >
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={language === "ro" ? "Scrie un mesaj..." : "Write your message..."}
                        className="flex-grow px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-[#28b5af] hover:bg-[#249c99] text-white px-4 py-2 rounded-full text-sm transition cursor-pointer"
                    >
                        ➔
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatBot;