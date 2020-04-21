import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import moment, { Moment, Duration } from 'moment';

import styles from './Timer.module.css';

const Timer = () => {

    const query = useQuery();
    const [timeLeft, setTimeLeft] = useState<Duration>();

    const date = query.get('d') || query.get('date');
    const time = query.get('t') || query.get('time');
    
    let endTime: Moment;

    if (time && !date) {
        endTime = moment(`${time}`, 'HHmm');
    } else {
        endTime = moment(`${date} ${time}`, 'YYYY-MM-DD HHmm');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(endTime, moment().startOf('second')));
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    let timerHtml;
    if (timeLeft) {
        timerHtml = (
            <span className="timer">
                {timeLeft?.hours() !== 0 && <span className="hours">{`${Math.floor(timeLeft?.asHours())}h `}</span>}
                {timeLeft?.minutes() !== 0 && <span className="minutes">{`${timeLeft?.minutes()}m `}</span>}
                <span className="seconds">{`${timeLeft?.seconds()}s`}</span>
            </span>
        );
    } else {
        timerHtml = (<React.Fragment />);
    }

    return (
        <section className={styles.container}>
            {timerHtml}
        </section>
    );
};

const getTimeLeft = (endTime: Moment, currentTime: Moment) => {
    if (endTime.isAfter(currentTime)) {
        return moment.duration(endTime?.diff(currentTime));
    }
    return moment.duration(currentTime?.diff(endTime));
};

const useQuery = () => new URLSearchParams(useLocation().search);

export default Timer;