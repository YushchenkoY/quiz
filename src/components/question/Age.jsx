import { useState } from 'react';


function Age(props) {
    const [answer, setAnswer] = useState('');


    return (
        <div>
            <p className="quiz__question" >{props.question.question}</p>
            <input type="date" id="date"/>

            <button className="btnContinue" onClick={() => {
                props.onAnswerHandler(answer)
                setAnswer("")
            }}>Continue</button>
        </div>
    )


};

export default Age;

