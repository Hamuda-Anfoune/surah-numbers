"use client"
import { NUMBER_OF_OPTIONS } from "@/lib/config/app";
import { useEffect, useState } from "react";
import { OptionsParams } from "./Play.types";

export default function Options ({ correctOption, handleOptionSelected }: OptionsParams) {
  const [options, setOptions] = useState<number[]> ([]);

  const addCorrectOptionToListAtRandomIndex = (falseOptions: number[]) => {
    const randomIndex: number = Math.floor(Math.random() * NUMBER_OF_OPTIONS);

    const options = correctOption ?
      [
        ...falseOptions.slice(0, randomIndex),
        correctOption,
        ...falseOptions.slice(randomIndex),
      ] :
      [];

    return options;
  }

  const generateAndSetOptions = () => {
    const falseOptions: number[] = [];

    /**
     * Get random surah numbers, make sure we get the requested number of options - 1,
     * so that we have room to add the correct option to the list,
     * but have a safety guard to stop the loop if it ran 2* the requested number of options
     */
    let counter = 0;
    while (falseOptions.length < NUMBER_OF_OPTIONS  - 1 && counter < NUMBER_OF_OPTIONS * 2) {
      const randomFalseOption = Math.ceil(Math.random() * 114);

      /** Make sure the new random number is: 
       *  a- not equal to the correctOption, and
       *  b- not already added to the array.
       */
      if (randomFalseOption !== correctOption && !falseOptions.includes(randomFalseOption)) {
        falseOptions.push(randomFalseOption);
      }

      counter++;
    }

    // Add the correct option to the list of options at a random index
    const allOptions = addCorrectOptionToListAtRandomIndex(falseOptions);

    setOptions(allOptions);
  }

  useEffect(() => {
    generateAndSetOptions();
  }, [correctOption]);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {
        options && options.map((option) => {
          return (
            <button
              key={option}
              onClick={() => {handleOptionSelected(option)}}
              className={"btn-w-option btn-bordered cursor-pointer bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--foreground)]"}
            >
              { option }
            </button>
          );
        })
      }
    </div>
  );
}