import React from "react";
import classes from "./FinishedQuiz.module.scss";
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if(props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {
          props.quiz.map((quizItem, index) => {
            const result = props.results[quizItem.id];
            console.log(props.results);
            return (
              <li key={index}>
                <strong>{index + 1}</strong>&nbsp;
                {quizItem.question}
                &nbsp;<strong className={classes[result]}>{result === "success" ? "v" : "x"}</strong>
              </li>
            );
          })
        }
        {/* <li>
          <strong>1.</strong>&nbsp;
          How are you? 
          &nbsp;<strong className={classes.error}>x</strong>
        </li>
        <li>
          <strong>1.</strong>&nbsp;
          How are you? 
          &nbsp;<strong className={classes.success}>v</strong>
        </li> */}
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRetry} type="primary">Повторить</Button>
        <Link to="/">
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
}

export default FinishedQuiz