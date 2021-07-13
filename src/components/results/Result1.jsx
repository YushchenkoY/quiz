import sky from '../../img/sky.png'
import ball from '../../img/ball.png'
import aries from '../../img/zodiac/aries.png'
import aquarius from '../../img/zodiac/aquarius.png'

function Result1() {
    return (
        <div className="result">
            <h1 className="result__heading">Here we go!</h1>
            <p className="result__text">Read about the woman who will spark your life</p>
            <div className="result__container">
                <h2 className="result__title">Our Forecast</h2>
                <p className="result__percent">92<span>%</span></p>
                <p className="result__text">According to your profile, 92%chances that you find partner/someone to talk</p>
            </div>
            <img alt='' src={sky} className="result__sky" />
            <div className="result__container">
                <h2 className="result__title">Your most compatible zodiac signs are</h2>
                <div className="result__zodiac-wrapper">
                    <div className="result__zodiac">
                        <img src={aries} alt="" className="result__zodiac-img" />
                        <p className="result__zodiac-text">Aries</p>
                    </div>
                    <div className="result__zodiac">
                        <img src={aquarius} alt="" className="result__zodiac-img" />
                        <p className="result__zodiac-text">Aquarius</p>
                    </div>
                </div>
            </div>

            <h2 className="result__title">This woman is an extrovert</h2>
            <p className="result__text">However, that doesn’t mean that she will hang out in clubs all the time</p>
            <img alt='' src={ball} className="result__ball" />

            <div className="result__container container-padding">
                <p className="result__text result__text-left">Your <span className="result__text result__text-blue">perfect woman</span> strives for communication, but a warm conversation over a cup of tea or a glass of wine will be enough.</p>
            </div>



        </div>
    );
}

export default Result1;