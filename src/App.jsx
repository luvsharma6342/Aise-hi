import React, { useState } from "react";

function App() {
  // const [position, setPosition] = useState({top: top-1/2, left: left-1/2});

  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [translateLeft, setTranslateLeft] = useState("translate-x-0");
  const [translateRight, setTranslateRight] = useState("translate-y-0");

  function moveButton() {
    setCount(count + 1);
    if (count == 1) {
      setTranslateLeft("translate-x-[7rem]");
      setTranslateRight("translate-y-[-10rem]");
    }
    if (count == 2) {
      setTranslateRight("translate-y-[3rem]");
    }
    if (count == 3) {
      setTranslateLeft("translate-x-[-7rem]");
      setTranslateRight("translate-y-[-5rem]");
    }
  }

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="w-screen h-screen bg-zinc-700 flex justify-center items-center flex-col">
      {/* Visibility of the first image */}
      {isVisible && (
        <div className="flex justify-center items-center flex-col">
          {/* Heading for asking for date */}
          <div className="text-white text-2xl font-bold text-center">
            Do you wanna go out with me ?
          </div>
          <div className="text-white text-2xl font-bold text-center">
            Are you free tomorrow ?
          </div>

          {/* Div containing the image for teddy bear asking for a date */}
          <div>
            <img
              src="https://media.tenor.com/y1et82rwFeAAAAAi/bear-love-you.gif"
              className="h-80"
              alt=""
            />
          </div>

          {/* Buttons for answering in YES or NO */}
          <div className="flex gap-10">
            <button
              className={`text-white bg-green-600 px-5 py-1 rounded-md`}
              onClick={handleVisibility}
            >
              Yes
            </button>
            <button
              onClick={moveButton}
              className={`text-white bg-green-600 px-5 py-1 rounded-md translate-x-0 transition-all duration-700 ${translateLeft} ${translateRight} ${
                count === 5 ? "hidden" : "inline"
              }`}
            >
              No
            </button>
          </div>
        </div>
      )}

      {!isVisible && (
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="text-white text-2xl font-bold">Hurray</div>
          <div>
            <img
              src="https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.webp"
              className="h-64 border-black rounded-3xl"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
