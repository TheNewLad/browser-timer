import React from 'react';
import {mount, shallow} from 'enzyme';
import Link from '../../../main/components/Link/Link';
import moment from 'moment';
import {TIMER_PATH} from "../../../main/constants/constants";

const mockHistory = jest.fn();
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockHistory,
    }),
}));

describe('Link component tests', () => {
    const href = 'http://localhost';
    const selectedDate = moment('2020-01-01');
    const expectedPath = `${TIMER_PATH}?date=${selectedDate.format('YYYY-MM-DD')}&time=${selectedDate.format('HHmm')}`;
    const expectedUrl = `${href}${expectedPath}`;
    const { location } = window;
 
    beforeAll((): void => {
        delete window.location;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        window.location = {
            href: href,
        };
    });
 
    afterAll((): void => {
        window.location = location;
    });

    it('should have link to webpage to timer', () => {
        const wrapper = shallow(<Link selectedDate={selectedDate} />);
        expect(wrapper.find('.generatedLink').props().value).toEqual(expectedUrl);
    });

    it('should copy link', () => {
        document.execCommand = jest.fn();
        const wrapper = mount(<Link selectedDate={selectedDate} />);
        const copyButton = wrapper.find('button[aria-label="copy button"]');
        copyButton.simulate('click');
        expect(document.execCommand).toBeCalledWith('copy');
    });

    it('should not copy link', () => {
        document.execCommand = jest.fn();
        const wrapper = shallow(<Link selectedDate={selectedDate} />); // this causes input.current to be null
        const copyButton = wrapper.find('button[aria-label="copy button"]');
        copyButton.simulate('click');
        expect(document.execCommand).not.toBeCalled();
    });

    it('should open link', () => {
        const wrapper = shallow(<Link selectedDate={selectedDate} />);
        const openLinkButton = wrapper.find('button[aria-label="open link button"]');
        openLinkButton.simulate('click');
        expect(mockHistory).toBeCalledWith(expectedPath);
    });
});