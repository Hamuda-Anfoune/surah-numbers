
export type OptionsParams = {
  correctOption: number | null,
  handleOptionSelected: (selectedOption: number) => void,
}

export type FeedbackParams = {
  chosenSurahNumber: number | null,
  isShowingCorrectAnswerSign: boolean,
  isShowingWrongAnswerSign: boolean,
  wrongAnswerCount: number,
}
