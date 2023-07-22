const Message = (props) => {
    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes();

    if(props.isHuman)
        return <div id="humanChat">
            <p>
                {props.props}
                <span className="timeStamp">
                    {showTime}
                </span>
            </p>
        </div>;
    else
        return <div id="botChat">
            <p>
                {props.props} 
                <span className="timeStamp">
                    {showTime}
                </span>
            </p>
        </div>;
};

export default Message;