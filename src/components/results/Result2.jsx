import sky from '../../img/sky.png'
import ball from '../../img/ball.png'
import tree from '../../img/girl_and_tree.png'
import brench from '../../img/brench.svg'

import heart from '../../img/heart.png'
import free from '../../img/free.png'

import macafeeSecure from '../../img/macafee-secure.png'
import sslSecure from '../../img/ssl-secure.png'
import norton from '../../img/norton.png'
import mastercard from '../../img/mastercard-id.png'
import visa from '../../img/visa-verified.png'
import pci from '../../img/pci-compliant.png'

import taurus from '../../img/zodiac/taurus.png'
import capricorn from '../../img/zodiac/capricorn.png'

function Result2() {
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
                        <img src={taurus} alt="" className="result__zodiac-img" />
                        <p className="result__zodiac-text">Taurus</p>
                    </div>
                    <div className="result__zodiac">
                        <img src={capricorn} alt="" className="result__zodiac-img" />
                        <p className="result__zodiac-text">Capricorn</p>
                    </div>
                </div>
            </div>
            <div className="result__wrapper">
                <h2 className="result__title">This woman is an introvert,</h2>
                <p className="result__text">although she needs to go wild with her friends or boyfriend from time to time. Don't make her stay at home and bake pies. She will be your everything, just let it be her choice.</p>

            </div>
            <img alt='' src={ball} className="result__ball" />

            <div className="result__container">
                <p className="result__text text-left">Your <span className="result__text text-blue">perfect woman</span> strives for communication, but a warm conversation over a cup of tea or a glass of wine will be enough.</p>
            </div>

            <div className="result__container-two">
                <h2 className="result__title text-left" >To win her heart,</h2>
                <p className="result__text text-italic text-left ">be active and persistent. Surprise her – text a poem, prepare an unexpected gift and, most importantly, be yourself.</p>
            </div>

            <img alt='' src={tree} className="result__tree" />
            <p className="result__text">She is passionate about dancing and always ready for a spontaneous adventure.</p>

            <div className="result__container">
                <p className="result__title text-red">Stop putting your love life on the back burner!</p>
            </div>

            <img alt='' src={brench} className="result__brench" />

            <div className="result__wrapper">
                <p className="result__text">More than <span className="result__text text-blue">10 000 people</span> already get connected on The Lucky Date</p>

            </div>


            <button className='btnContinue result__btn'>Stop being lonely now</button>

            <div className="result__wrapper">
                <h2 className="result__title text-left">Join The Original Anti-Swiping Community</h2>
                <p className="result__text text-left">We’re not saying Tinder doesn’t have its uses, but why not spend your time a little more… intelligently?</p>
            </div>

            <div className="result__wrapper">
                <p className="result__text text-get" >What you get</p>
                <table>
                    <tr>
                        <td>
                            <div className="result__choice">✓</div>
                        </td>
                        <td>
                            <p className="result__text text-left">Don’t just swipe profiles, get answers</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="result__choice">✓</div>
                        </td>
                        <td>
                            <p className="result__text text-left">Spice up your dating experience with audios and video messages</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="result__choice">✓</div>
                        </td>
                        <td>
                            <p className="result__text text-left">Get a crush on a lovely girl – only hand-picked matches for you</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="result__choice">✓</div>
                        </td>
                        <td>
                            <p className="result__text text-left">Be free in your moves and desires – no pressure at The Lucky Date</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="result__choice">✓</div>
                        </td>
                        <td>
                            <p className="result__text text-left">Get help from our support team at any time</p>
                        </td>
                    </tr>
                </table>


                <div className="result__wrapper">
                    <h2 className="result__title text-red">Don’t miss your special offer</h2>
                    <p className="result__text">Enjoy premium experience </p>
                    <p className="result__text text-blod">with the 70% discount</p>
                </div>

                <div className="result__container">
                    <div className="result__container-white">
                        <img className="result__heart" src={heart} alt=''></img>
                        <div className="result__bonus">
                            <h2 className="result__title bonus-title text-left">2 000 credits</h2>
                            <p className="result__text text-left text-strikethrough">$9 <sup>99</sup></p>
                            <p className="result__text text-left text-green text-blod">$2 <sup>99</sup></p>
                        </div>
                    </div>
                    <p className="result__text text-green text-blod">+</p>
                    <div className="result__container-white">
                        <img className="result__free" src={free} alt=''></img>
                        <div className="result__bonus">
                            <h2 className="result__title bonus-title text-left">2 000 credits</h2>
                            <p className="result__text text-left text-green text-blod">For free*</p>
                        </div>
                    </div>
                </div>
                <p className="result__text text-small text-left">* Free bonus credits will be added automatically to your account after the payment</p>

                <table className="result__pay">
                    <tr>
                        <td>
                            <img alt='Macafee Secure' src={macafeeSecure} />
                            <img alt='SSL Secure' src={sslSecure} />
                            <img alt='Norton' src={norton} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt='Mastercard' src={mastercard} />
                            <img alt='Visa' src={visa} />
                            <img alt='PCI' src={pci} />
                        </td>
                    </tr>
                </table>


                <div className="result__guarantee-wrapper">
                    <div className="result__guarantee">
                    <h2 className="result__title">30-Days Money Back Guarantee</h2>
                    <p className="result__text text-left">We believe that you’ll find your one and only on The Lucky Date. But things can turn differently, and that’s okay. According to the money-back policy, we will return your funds unless you find your perfect match on our platform.</p>
                    </div>
                </div>

                <button className='btnContinue result__btn'>Continue</button>

            </div>
        </div>
    );
}

export default Result2;