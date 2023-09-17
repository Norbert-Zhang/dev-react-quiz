import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { answer, dispatch, index, numQuestions } = useQuiz();

  if (answer === null || index > numQuestions - 1) return null;
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
