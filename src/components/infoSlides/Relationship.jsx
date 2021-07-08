import relationship_img from '../../img/relationship_img.png'

function Relationship(props) {

    return (
        <div>
            <h1 className='info__title'>So, you are looking for 
            a pretty woman. Fair enough. 
            And our survey is almost over.</h1>
            <img className='relationship__img' src={relationship_img} alt='' />
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

