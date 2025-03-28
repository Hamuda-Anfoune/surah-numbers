"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Options from "./options";
import Feedback from "./feedback";
import { SURAHS } from "@/lib/constants/quran";

export default function Page () {
  const [chosenSurahNumber, setChosenSurahNumber] = useState<number|null> (null);
  const [isShowingCorrectAnswerSign, setIsShowingCorrectAnswerSign] = useState<boolean> (false);
  const [isShowingWrongAnswerSign, setIsShowingWrongAnswerSign] = useState<boolean> (false);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number> (0);

  const chooseSurahNumber = () => {
    setChosenSurahNumber(null);
    // Only random numbers currently
    const number = Math.floor(Math.random() * 114) + 1;

    setChosenSurahNumber(number);
  }

  const handleCorrectAnswer = () => {
    setIsShowingCorrectAnswerSign(true);
    setIsShowingWrongAnswerSign(false);
    setWrongAnswerCount(0);

    setTimeout(() => {
      setIsShowingCorrectAnswerSign(false);
    }, 750);
  }

  const handleWrongAnswer = () => {
    setIsShowingWrongAnswerSign(true);
    setIsShowingCorrectAnswerSign(false);
    
    const updatedWrongAnswerCount = wrongAnswerCount + 1;
    setWrongAnswerCount(updatedWrongAnswerCount);

    setTimeout(() => {
      setIsShowingWrongAnswerSign(false);

      // Ran out of attempts
      if (updatedWrongAnswerCount === 3) {
        chooseSurahNumber();
        setWrongAnswerCount(0);
      }
    }, 750);
  }

  const handleOptionSelected = (selectedOption: number) => {
    // Correct answer
    if (selectedOption === chosenSurahNumber) {
      handleCorrectAnswer();

      chooseSurahNumber();

      return;
    }

    handleWrongAnswer();
  }

  useEffect(() => {
    chooseSurahNumber();
  }, []);

  return (
    <main>
      {/* Surah name */}
      <div className="h-3/4 grid justify-center content-center items-center">
        { chosenSurahNumber && 
          <>
            <Image
              className="dark:invert"
              src={`/images/surah_names/${chosenSurahNumber}.svg`}
              alt="Surah name"
              width={180}
              height={87.27}
              priority
            />
            <span className="text-center uppercase text-2xl tracking-custom-03-center">{SURAHS[chosenSurahNumber - 1].name_english}</span>
          </>
        }
      </div>
      {/* Options */}
      <div className="flex justify-center items-center space-x-2">
        { chosenSurahNumber && 
          <Options
            correctOption = {chosenSurahNumber}
            handleOptionSelected = {handleOptionSelected}
          />
        }
      </div>
      {/* Feedback on answers */}
      <Feedback
        chosenSurahNumber = {chosenSurahNumber}
        isShowingCorrectAnswerSign = {isShowingCorrectAnswerSign}
        isShowingWrongAnswerSign = {isShowingWrongAnswerSign}
        wrongAnswerCount= {wrongAnswerCount}
      />
    </main>
  );
};