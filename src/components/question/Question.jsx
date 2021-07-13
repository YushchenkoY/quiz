
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
import './radio.css';


function Question(props) {
    const [answer, setAnswer] = useState('');

    // if (props.question.type === 'input') {
    //     return (
    //         <div>
    //             <p className="quiz__question">{props.question.question}</p>

    //             <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
    //             <button className="btnContinue" onClick={() => {
    //                 props.onAnswerHandler(answer)
    //                 setAnswer("")
    //             }}>Continue</button>
    //         </div>
    //     )
    // } else 
    if (props.question.type === 'radio') {
        console.log(answer)
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
                                <p className='answer_img'>{opiton.emoji}</p>
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
    } 


};

export default Question;

