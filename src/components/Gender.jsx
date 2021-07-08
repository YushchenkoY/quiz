import { useState } from 'react';


function Gender(props) {
    const [answer, setAnswer] = useState('');


    return (
        <div>
            <p className="quiz__question" >{props.question.question}</p>


            <button className="btnContinue" onClick={() => {
                props.onAnswerHandler(answer)
                setAnswer("")
            }}>Continue</button>
        </div>
    )


};

export default Gender;

