import React from 'react';

import DateTime from 'react-datetime';

import './DateTime.css';
import { Moment } from 'moment';

const DateTimePicker = () => {
    const handleChange = (event: string | Moment) => {
        console.log(event.valueOf());
    };

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column">
                    <DateTime
                        className="has-text-centered"
                        input={false}
                        onChange={handleChange}
                        defaultValue={new Date()}
                    />
                </div>
            </div>
        </div>
    );
};

export default DateTimePicker;