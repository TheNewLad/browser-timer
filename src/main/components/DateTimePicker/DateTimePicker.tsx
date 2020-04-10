import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import DateTime from 'react-datetime';
import moment, { Moment } from 'moment';
import { TIMER_PATH } from '../../constants/constants';

import '@fortawesome/fontawesome-free/css/all.css';
import './DateTime.css';

const DateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState<string | undefined>();
    const [timerLink, setTimerLink] = useState<string | undefined>();
    const [epochTime, setEpochTime] = useState<number | undefined>();

    const location = removeTrailingSlash(window.location.href);
    const history = useHistory();
    const timerLinkInput = useRef<HTMLInputElement>(null);

    const handleChange = (event: string | Moment) => {
        const eventMoment: Moment = moment(event).startOf('minute');
        updateSelectedDate(eventMoment);
        updateLinkToTimer(eventMoment.valueOf());
        setEpochTime(eventMoment.valueOf());
    };
    const updateSelectedDate = (moment: Moment) => {
        setSelectedDate(moment.format('LLLL'));
    };
    const updateLinkToTimer = (event: number) => {
        setTimerLink(`${location}${TIMER_PATH}/${event}`);
    };
    const copyLinkToClipboard = () => {
        if (timerLinkInput.current !== null) {
            timerLinkInput.current.select();
            document.execCommand('copy');
        }
    };
    const openTimerLink = () => epochTime ? history.push(`${TIMER_PATH}/${epochTime}`) : void (0);

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-three-quarters">
                    <div className="container">

                        <DateTime
                            className="has-text-centered"
                            input={false}
                            onChange={handleChange}
                            defaultValue={new Date()}
                        />
                    </div>
                    <div className="container">
                        <div className="field has-addons">
                            <div className="control is-expanded">

                                <input
                                    ref={timerLinkInput}
                                    className="input"
                                    type="text"
                                    placeholder="Generated Link (COPY ON CLICK)"
                                    value={timerLink}
                                    readOnly
                                />
                                <p className="help">{!selectedDate ? "" : `Selected Date: ${selectedDate}`}</p>

                            </div>
                            <div className="control">
                                <button onClick={copyLinkToClipboard} className="button far fa-copy"></button>
                            </div>
                            <div className="control">
                                <button onClick={openTimerLink} className="button fas fa-external-link-alt"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const removeTrailingSlash = (url: string): string => url.replace(/\/$/, "");

export default DateTimePicker;