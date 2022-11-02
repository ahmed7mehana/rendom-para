import "./styles.css";
import data from "../Data";
import { useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);
  const [text, setText] = useState([]);

  const handelsubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    amount < 0 ? (amount = 1) : "";
    amount > 11 ? (amount = 11) : "";

    setText(data.slice(0, amount));
  };

  return (
    <div className="App">
      <div>
        <h2> you want some pragraphs ?with one click</h2>
        <form onSubmit={handelsubmit}>
          <label htmlFor="amount">pragraphs :</label>
          <input
            type="number"
            name="amount"
            value={count}
            id="amount"
            onChange={(e) => setcount(e.target.value)}
          />
          <button type="submt"> click here </button>
        </form>
        <article>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </div>
    </div>
  );
}
