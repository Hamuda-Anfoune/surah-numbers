"use client"
import Image from "next/image";
import { FeedbackParams } from "./Play.types"

export default function Feedback ({
  chosenSurahNumber,
  isShowingCorrectAnswerSign,
  isShowingWrongAnswerSign,
  wrongAnswerCount
}: FeedbackParams) {
  return (<>
    { isShowingCorrectAnswerSign && 
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <Image
          className="dark:invert"
          src={`/images/signs/correct.svg`}
          alt="Correct answer"
          width={300}
          height={300}
        />
      </div>
    }
    {/* Handling wrong answers */}
    { isShowingWrongAnswerSign && wrongAnswerCount > 0 &&
      <>
        { wrongAnswerCount <= 2 && 
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            { Array.from({ length: wrongAnswerCount }, (_, index) => (
              <Image
                key={index}
                src={`/images/signs/wrong.svg`}
                alt="Wrong answer"
                width={300}
                height={300}
                className="dark:invert"
              />
            ))};
          </div>
        }
        { wrongAnswerCount === 3 && 
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            { <div className="overflow-hidden rounded-xl bg-white w-[300] h-[300] grid content-center text-center inverted-text-color">
                <span>The right answer is</span>
                <span>الإجابة الصجيجة هي</span>
                <span className="inverted-text-color text-center text-9xl">{chosenSurahNumber}</span>
              </div>}
          </div>
        }
      </>
    }
  </>);
}