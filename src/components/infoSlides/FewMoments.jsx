
import fewMoments_img from '../../img/fewMoments_img.png'

function FewMoments(props) {

    return (
        <div>
            <h1 className='info__title'>You are just few moments 
            away from finding out who is your perfect woman.</h1>
            <img className='fewMoments__img' src={fewMoments_img} alt='' />
            <div className='intro__text-wrapper'>
                <p className='info__text'>Have you know that <span className='intro__text info__text-blue'>61% of americans </span>agree that online dating is easier and more efficient than other ways of meeting people
                </p>
            </div>

            <button className="btnContinue" onClick={() => {
                props.onAnswerHandler()
            }}>Continue</button>
        </div>
    )


};

export default FewMoments;

