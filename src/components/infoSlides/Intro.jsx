import IntroImg from '../../img/intro_img.png'

function Intro(props) {


    return (
        <div>
            <h1 className='info__title'>Intro – get to know you better</h1>

            <img className='intro__img' src={IntroImg} alt='' />
            <div className='intro__text-wrapper'>
                <p className='info__text'>Our specialists create a
                    diverse range of
                    carefully selected questions
                    that fully reveal you as a person.
                    <span className='intro__text info__text-blue'>
                        Find out your perfect woman
                    </span>
                    and stop wasting time on meaningless
                    connections.
                </p>
            </div>

            <p className='info__text info__text-small'>*All your personal data is secure and confidential.
                Your report summary will be visible only for you.</p>

            <button className="btnContinue" onClick={() => {
                props.onAnswerHandler()
            }}>Continue</button>
        </div>
    )


};

export default Intro;

