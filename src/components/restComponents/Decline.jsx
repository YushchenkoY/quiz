
import deny from '../../img/deny.png'


function Decline() {
    return (
        <div className="decline-wrapper">
            <img className="decline__deny" src={deny} alt=''></img>
            <h1 className="decline__title">Payment was declined</h1>
            <p className="decline__text">But don’t think that we’ll let you go away all upset and disappointed.</p>
            <p className="time__text">Try The Lucky Date for free. Yep, here are yours <span className="decline__text text-blue">2000 trial credits</span> to take our service for a spin.</p>

            <button className='btnContinue decline__btn'>Get trial and continue</button>
        </div>
    );
}

export default Decline;