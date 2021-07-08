
/**
 * 
 * @param {*} props = {
 *  question: {
 *      id: number;
 *      type: string;
 *      header?: string;
 *      question: string;
 * opitons: string[]
 *  }
 * onAnswerHandler: (a) => void
 * }
 * @returns 
 */
import { useState } from 'react';


function Question(props) {
    const [answer, setAnswer] = useState('');

    if (props.question.type === 'input') {
        return (
            <div>
                <p className="quiz__question">{props.question.question}</p>

                <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
                <button className="btnContinue" onClick={() => {
                    props.onAnswerHandler(answer)
                    setAnswer("")
                }}>Continue</button>
            </div>
        )
    } else if (props.question.type === 'radio') {
        return (
            <div>
                <p className="quiz__question" >{props.question.question}</p>

                {/* <ul>
                    {props.question.opitons.map((answer) => (
                        <li>
                            <label>
                                <input type="radio" value={answer} name="props.question.id" onChange={(e) => setAnswer(e.target.value)} />
                                {answer}
                            </label>
                        </li>
                    )
                    )}
                </ul> */}

                <button className="btnContinue" onClick={() => {
                    props.onAnswerHandler(answer)
                    setAnswer("")
                }}>Continue</button>
            </div>
        )
    }

};

export default Question;

