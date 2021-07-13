function Indicator(props) {

    return (
        <div className="indicator-wrapper">
            <progress className="indicator__line" max="100" value={props.question.percent}></progress>
            <p className="indicator__number"><span>{props.question.index}</span>/26</p>
        </div>
    )


};

export default Indicator;

