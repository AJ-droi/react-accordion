import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({info, title}) => {
  const [answer, setAnswer] = useState(false);
  return (
    <article className="question">
          <header>
            <h4>{title}</h4>
            <button  class="btn" onClick={() => setAnswer(!answer)}>
              {answer ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </button>
          </header>
          {answer && <p> {info}</p>}
      </article>
  )
};

export default Question;
