
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
import './questions.css';


function Radiobutton(props) {
    const [answer, setAnswer] = useState('');



    return (
        <div>
            <p className="quiz__question" >{props.question.question}</p>
            <div className='answer-wrapper'>
                {props.question.opitons.map((opiton) => (
                    <div className="answer_radio_btn">
                        <label className="answer_label">
                            <input type="radio"
                                value={opiton.answer}
                                name={props.question.id}
                                checked={opiton.answer == answer}
                                onChange={(e) => setAnswer(e.target.value)} />
                            <div className='choice answer_choice'>✓</div>
                            <p className='answer'>{opiton.answer}</p>
                            <div className='answer_img-wrapper'>
                                <p className='answer_img'>{opiton.emoji}</p>
                            </div>
                        </label>
                    </div>
                ))}
            </div>
            <button disabled={!answer}
                className="btnContinue"
                onClick={() => {
                    props.onAnswerHandler(answer)
                    setAnswer("")
                }}>Continue</button>
        </div>
    )
};

export default Radiobutton;

