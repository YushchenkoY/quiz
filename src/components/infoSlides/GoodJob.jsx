function GoodJob(props) {

    return (
        <div>
            <h1 className='info__title'>Good job</h1>

            <div class="circle-wrap">
                <div class="circle">
                    <div class="mask full-job">
                        <div class="fill-jod"></div>
                    </div>
                    <div class="mask half-job">
                        <div class="fill-jod fill"></div>
                    </div>
                    <div class="inside-circle">
                        31%
                    </div>
                </div>
            </div>

            
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

