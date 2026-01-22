import Options from "./Options";

function Question({ currQue, setScore }) {
  const que = currQue.question;
  const options = currQue.options;
  const correctOpt = currQue.correctAnswerIndex;

  function validateAns(idx) {
    if (idx === correctOpt) {
      setScore((prev) => prev + 1);
    }
  }
  return (
    <div>
      <h1>{que}</h1>
      {options.map((item, idx) => (
        <Options 
        opt={item}
         key={idx}
         index={idx}
          validateAns={validateAns} />
      ))}
    </div>
  );
}

export default Question;
