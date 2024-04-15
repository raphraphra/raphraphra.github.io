import {useState, useEffect} from 'react';

function Clock(){

    const [time, setTime] = useState(new Date());

    const [remark, setRemark] = useState();

    const deadlineTime = 23;

    useEffect(() => {
        setInterval(ChangeTime, 1000);
    }, []);

    function ChangeTime(){
        setTime(new Date());
        const display = Number(time.getHours()) >= deadlineTime;
        let text = display ? <p className='clock'>Why are you <b>still</b> awake ? Ah, apologies. You have no life.</p> : <p className='clock'>Nice. You are not too late.</p>;
        setRemark(text);
        
    }

    function PadZero(num){

        return (num < 10 ? "0" : "") + num;

    }

    function getTime(){

        const seconds = time.getSeconds();
        const minutes = time.getMinutes();
        const hours = time.getHours();

        return `🤖${PadZero(hours)}:${PadZero(minutes)}:${PadZero(seconds)}🤖`;

    }

    return (
        <div className='header'>
            <p className="clock">{getTime()}</p>
            {remark}
        </div>
    )

}

export default Clock;