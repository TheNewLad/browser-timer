import React, { useState } from 'react';
import DateTime from 'react-datetime';
import moment, { Moment } from 'moment';

import '@fortawesome/fontawesome-free/css/all.css';
import './DateTime.scss';
import colors from '../../styles/_colors.module.scss';
import Link from '../Link/Link';

const DateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Moment>();

    const handleChange = (event: string | Moment) => {
        const eventMoment: Moment = moment(event).startOf('minute');
        setSelectedDate(eventMoment);
    };

    return (
        <div className="container is-fluid">
            <div className="columns is-centered">
                <div className="column is-one-quarter">
                    <div className="content">
                        <h2>Date/Time Picker Instructions</h2>
                        <p>
                            <b className={colors.accentColor}>Disclaimer: </b>
                            This tool is designed to only show the hours, minutes,
                            and seconds as a countdown.
                        </p>
                        <p>
                            After picking an start or end time, you can either copy the link for a later time,
                            or follow the generated link. Ensure the date and time picked are correct,
                            and you're good to go!
                        </p>
                    </div>
                </div>
                <div className="box column is-three-fifths is-offset-1">
                    <div className="container">

                        <DateTime
                            className="has-text-centered"
                            input={false}
                            onChange={handleChange}
                            defaultValue={new Date()}
                        />
                    </div>
                    <div className="container">
                        <Link selectedDate={selectedDate}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateTimePicker;