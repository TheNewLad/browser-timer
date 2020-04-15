import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment, { Moment, Duration } from 'moment';

import styles from './Timer.module.css';

type TimerTypes = {
    datetime: string
}

const Timer = () => {
    const { datetime } = useParams<TimerTypes>();

    const [timeLeft, setTimeLeft] = useState<Duration>();
    const endTime = moment(+datetime).startOf('minute');

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(endTime, moment()));
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);
    
    let timerHtml;
    if (timeLeft) {
        timerHtml = (
            <span className="timer">
                { timeLeft?.hours() !== 0 && <span className="hours">{ `${Math.floor(timeLeft?.asHours())}h ` }</span> }
                { timeLeft?.minutes() !== 0 && <span className="minutes">{ `${timeLeft?.minutes()}m ` }</span> }
                <span className="seconds">{ `${timeLeft?.seconds()}s` }</span>
            </span>
        );
    } else {
        timerHtml = (<React.Fragment />);
    }

    return (
        <section className={styles.container}>
            { timerHtml }
        </section>
    );
};

const getTimeLeft = (endTime: Moment, currentTime: Moment) => moment.duration(endTime?.diff(currentTime));

export default Timer;