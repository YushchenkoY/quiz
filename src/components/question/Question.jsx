
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
                <div  className='answer-wrapper'>                
                    {props.question.opitons.map((answer) => (
                    <div className="answer_radio_btn">
                        <label className="answer_label">
                            <input type="radio" value={answer.answer} name="props.question.id" onChange={(e) => setAnswer(e.target.value)} />
                            <p className='answer'>{answer.answer}</p>
                            <p className='answer_img'>{answer.emoji}</p>
                            <div className='choice answer_choice'>✓</div>
                        </label>
                    </div>
                ))}
                </div>
                <button className="btnContinue" onClick={() => {
                    props.onAnswerHandler(answer)
                    setAnswer("")
                }}>Continue</button>
            </div>
        )
    } else if (props.question.type === 'checkbox') {
        return (
            <div>
                <p className="quiz__question" >{props.question.question}</p>
                <div  className='answer-wrapper'>                
                    {props.question.opitons.map((answer) => (
                    <div className="answer_radio_btn">
                        <label className="answer_label">
                            <input type="checkbox" value={answer} name="props.question.id" onChange={(e) => setAnswer(e.target.value)} />
                            <p className='answer'>{answer}</p>
                            <div className='answer_choice-null'></div>
                            <div className='choice answer_choice'>✓</div>
                        </label>
                    </div>
                ))}
                </div>
                <button className="btnContinue" onClick={() => {
                    props.onAnswerHandler(answer)
                    setAnswer("")
                }}>Continue</button>
            </div>
        )
    }

};

export default Question;

