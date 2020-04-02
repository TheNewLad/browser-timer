import React from 'react';

import DateTime from 'react-datetime';

import './DateTime.css';
import styles from './DateTimePicker.module.css';
import moment, { Moment } from 'moment';

const DateTimePicker = () => {
    const handleChange = (event: string | Moment) => {
        console.log(event.valueOf());
    };

    return (
        <div className="columns is-centered">
            <div className="column is-half">
                <DateTime input={false} onChange={handleChange} defaultValue={new Date()} />
            </div>
        </div>

    );
};

export default DateTimePicker;