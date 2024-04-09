import "./calculator.scss";
import { useEffect, useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState([])

  const addToResult = num => {
    const newResult = [...result]

    switch (newResult.length) {
      case 0:
        if (num >= 0 && num <= 9) {
          newResult.push(num)
        }

        break;
      case 1:
        if (num == "+") {
          newResult.push("+")
        }

        break;
      case 2:
        if (num >= 0 && num <= 9) {
          newResult.push(num)
        }
      default:
        if (num == "=") {
          const total = result[0] + result[2]

          newResult.push(num)
          newResult.push(total)
          newResult.push("       (Yes!, it works!!)")
        }
    }

    setResult(newResult)
  }
  
  return (
    <div id="phone">
      <div id="phone-header">{result.join(" ")}</div>
      <div id="buttons">
        <div className="button-row">
          <div className="button-header" onClick={() => setResult([])}>CLEAR</div>
        </div>
        <div className="button-row">
          <div className="button-header" onClick={() => addToResult(7)}>7</div>
          <div className="button-header" onClick={() => addToResult(8)}>8</div>
          <div className="button-header" onClick={() => addToResult(9)}>9</div>
        </div>
        <div className="button-row">
          <div className="button-header" onClick={() => addToResult(4)}>4</div>
          <div className="button-header" onClick={() => addToResult(5)}>5</div>
          <div className="button-header" onClick={() => addToResult(6)}>6</div>
        </div>
        <div className="button-row">
          <div className="button-header" onClick={() => addToResult(1)}>1</div>
          <div className="button-header" onClick={() => addToResult(2)}>2</div>
          <div className="button-header" onClick={() => addToResult(3)}>3</div>
        </div>
        <div className="button-row">
          <div className="button-header" onClick={() => addToResult("+")}>+</div>
          <div className="button-header" onClick={() => addToResult("=")}>=</div>
        </div>
      </div>
    </div>
  )
}
