import { useState, useEffect } from 'react'

function Relationship(props) {
    const [percent, setPersent] = useState(31);

    useEffect(() => {
        if (percent < 73) {
            setTimeout(() => setPersent(percent + 1), 80);
        } 
    });



    return (
        <div>
            <h1 className='info__title'>So, you are looking for
                a pretty woman. Fair enough.
                And our survey is almost over.</h1>

            <div class="circle-wrap">
                <div class="circle">
                    <div class="mask full">
                        <div class="fill fill-ref"></div>
                    </div>
                    <div class="mask half">
                        <div class="fill fill-ref"></div>
                    </div>
                    <div class="inside-circle">
                    {percent}%
                    </div>
                </div>
            </div>

            <div className='intro__text-wrapper'>
                <p className='info__text'>Let’s only find out how
                    you see your perfect relationship, and we’re done
                    here.
                </p>
            </div>

            <button className="btnContinue" onClick={() => {
                props.onAnswerHandler()
            }}>Continue</button>
        </div>
    )


};

export default Relationship;

