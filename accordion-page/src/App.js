import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import questions from "./data";
function App() {
  const [faq, setFaq] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {faq.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
