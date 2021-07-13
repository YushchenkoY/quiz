import { useState } from 'react';
import './gender.css';


function Gender(props) {
    const [answer, setAnswer] = useState('');


    return (
        <div>
            <p className="quiz__question" >{props.question.question}</p>
            <div className='gender-wrapper'>
                {props.question.answer.map((answer) => (
                    <div className="gender_radio_btn">
                        <label className="gender_label">
                            <input type="radio" 
                            value={answer.gender} 
                            name={props.question.id} 
                            onChange={(e) => setAnswer(e.target.value)} />
                            <div className='choice gender_choice'>✓</div>
                            <p className='gender_img'>{answer.emoji}</p>
                            <p className='gender'>{answer.gender}</p>
                        </label>
                    </div>
                ))}
            </div>

            <button className="btnContinue" 
            disabled={!answer} 
            onClick={() => {
                props.onAnswerHandler(answer)
                setAnswer("")
            }}>Continue</button>
        </div>
    )


};

export default Gender;

