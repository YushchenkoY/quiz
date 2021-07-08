import good_job_img from '../../img/good_job_img.png'
function GoodJob(props) {

    return (
        <div>
            <h1 className='info__title'>Good job</h1>
            <img className='goodJob__img' src={good_job_img} alt='' />
            <div className='intro__text-wrapper'>
                <p className='info__text'>Now we have a bit of information about you. But don’t stop here! .
                    <span className='intro__text info__text-blue'>
                    Let’s see what kind of girl is the best for you
                    </span>
                </p>
            </div>

            <button className="btnContinue" onClick={() => {
                props.onAnswerHandler()
            }}>Continue</button>
        </div>
    )


};

export default GoodJob;

