import React, { useRef, RefObject } from 'react';
import { useHistory } from 'react-router-dom';
import { TIMER_PATH } from '../../constants/constants';
import { Moment } from 'moment';
import { History } from 'history';

type LinkProps = {
    selectedDate: Moment | undefined;
}

const Link = ({ selectedDate }: LinkProps) => {
    const history = useHistory();
    const timerLinkInput = useRef<HTMLInputElement>(null);

    const date = selectedDate && selectedDate.format('YYYY-MM-DD');
    const time = selectedDate && selectedDate.format('HHmm');
    
    const link = (date || time ) && `${TIMER_PATH}?date=${date}&time=${time}`;

    return (
        <div className="field has-addons">
            <div className="control is-expanded">

                <input
                    ref={timerLinkInput}
                    className="input generatedLink"
                    type="text"
                    placeholder="Generated Link"
                    value={getTimerUrl(link)}
                    readOnly
                    aria-label="generated link"
                />
                <p className="help">{!selectedDate ? "" : `Selected Date: ${selectedDate}`}</p>

            </div>
            <div className="control">
                <button onClick={() => copyLinkToClipboard(timerLinkInput)} className="button far fa-copy" aria-label="copy button"></button>
            </div>
            <div className="control">
                <button onClick={() => openTimerLink(link, history)} className="button fas fa-external-link-alt" aria-label="open link button"></button>
            </div>
        </div>
    );
};

const copyLinkToClipboard = ( input: RefObject<HTMLInputElement> ) => {
    if (input.current !== null) {
        input.current.select();
        document.execCommand('copy');
    }
};

const openTimerLink = (link: string | undefined, history: History<History.PoorMansUnknown>) => link && history.push(link);

const removeTrailingSlash = (url: string): string => url.replace(/\/$/, "");

const getTimerUrl = (path: string | undefined): string | undefined => {
    if (path) {
        return `${removeTrailingSlash(window.location.href)}${path}`;
    }
};

export default Link;