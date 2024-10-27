import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeButton from "../Components/themeButton";

const wordList = ["got lost!", "what?", "why?", "how?", "uhhh", "huh?"];

export default function ErrorPage() {
  const [word, setWord] = useState("");

  useEffect(() => {
    document.title = "Error! - Goggles Inc.";

    const getRandomWord = () => {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      setWord(wordList[randomIndex]);
    };

    getRandomWord();

    const interval = setInterval(getRandomWord, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <main className="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-text-600">ERR</p>
          <h1 className="mt-4 text-6xl font-bold tracking-tight text-text-900">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 text-text-600">
            An unexpected error has occurred!
          </p>
          <p className="mt-3 font-mono text-base text-text-900">{word}</p>
          <div className="mt-3 flex items-center justify-center gap-x-6">
            <Link to="/">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={
                  "rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 active:bg-background-400"
                }
              >
                Go back
              </motion.button>
            </Link>
            <Link
              to="https://github.com/gogglesinc/gogglesinc.github.io/issues/"
              target="_blank"
              className="text-sm font-semibold text-text-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <ThemeButton className="hidden" />
      </main>
    </>
  );
}
