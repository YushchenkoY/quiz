import { useState } from 'react';
import './questions.css';

function Checkbox(props) {
    const [localAnswer, setAnswer] = useState([]);


    console.log(localAnswer)
    return (
        <div>
            <p className="quiz__question" >{props.question.question}</p>
            <div className='answer-wrapper'>
                {props.question.opitons.map((answer) => (
                    <div className="answer_radio_btn">
                        <label className="answer_label">
                            <input type="checkbox"
                                key = {props.question.id + props.question.opitons.indexOf(answer)}
                                value={answer}
                                name={props.question.id}
                                onChange={(e) => {
                                    if (localAnswer.includes(answer)) {
                                        let localAnswer2 = localAnswer.filter((elem) =>
                                            elem !== e.target.value
                                        )
                                        setAnswer([...localAnswer2])
                                    } else {
                                        setAnswer([...localAnswer, e.target.value])
                                        
                                    }
                                }}
                            />
                            <div className='choice answer_choice'>✓</div>
                            <p className='answer'>{answer}</p>
                            <div className='answer_choice-null'></div>
                        </label>
                    </div>
                ))}
            </div>
            <button
                className="btnContinue"
                onClick={() => {
                    props.onAnswerHandler(localAnswer)
                    setAnswer([])
                }}>Continue</button>
        </div>
    )
}



export default Checkbox;