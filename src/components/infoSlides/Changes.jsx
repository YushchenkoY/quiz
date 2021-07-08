import man from '../../img/man.png'
function Changes(props) {


    return (
        <div>
            <div className='changes__text-wrapper'>
                <h1 className='info__title'>It’s time to bring some changes to your love life</h1>
                <p className='info__text'>Especially now, when the world
                    has changed dramatically, it might be challenging to
                    build a healthy relationship.
                    We’re here to help you out!</p>
                <p className='info__text-bold' >This test is just the thing if you:</p>

                <ul className='changes__list'>
                    <li><span className='info__text'>Haven’t been in a relationship for a long time</span></li>
                    <li><span className='info__text'>Keep meeting girls who don’t match your vibe</span></li>
                    <li><span className='info__text'>Wind up having meaningless connections</span></li>
                    <li><span className='info__text'>Give up the idea of finding the love of your life</span></li>
                </ul>

                <p className='info__text'>We’ve created a diverse
                    range of carefully selected questions that
                    fully reveal you as a person. Your honest
                    answers will help us find a perfect match
                    for you.Take this short test to get the
                    answers you’ve been hunting for.</p>

                <div className="changes__disclaimer-wrapper">
                    <img className="changes__img" alt="" src={man} />
                    <p className='info__text'><span className='info__text-bold'> * All your personal data is secure and confidential.</span> Your report summary will be visible only for you.</p>
                </div>
                <div className='info__text info__text-small text-center'>
                <p>By continuing you agree to our</p>
                <p><a>Terms of Service</a> | <a>Privacy Policy</a> | <a>Money-Back Policy</a></p>

                </div>

            </div>
            <button className="btnContinue info_btn" onClick={() => {
                props.onAnswerHandler()
            }}>Continue</button>
        </div>
    )


};

export default Changes;

