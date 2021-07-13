
import free from '../../img/free.png'


function MoreTime() {
    return (
        <div className="time-wrapper">
            <img className="time__free" src={free} alt=''></img>
            <h1 className="time__title">Need more time?</h1>
            <p className="time__text">We understand that making a decision right away might be hard for you.</p>
            <p className="time__text">No worries! You can take our service for a spin without paying a cent.</p>
            <p className="time__text"> <span className="time__text text-blue">Use 2000 trial credits</span> to see if The Lucky Date is right for you.</p>
            
            <button className='btnContinue time__btn'>Get trial and continue</button>

        </div>
    );
}

export default MoreTime;