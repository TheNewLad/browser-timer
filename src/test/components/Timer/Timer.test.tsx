import React from "react";
import Timer from "../../../main/components/Timer/Timer";
import {shallow} from "enzyme";
import * as timer from '../../../main/components/Timer/Timer';
import * as dom from 'react-router';
import routeData from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: '?date=2020-05-15&time=1944'
    })
}));
describe('Timer component tests', () => {
    // const mockUseQuery = jest.fn<URLSearchParams>();
    // beforeAll(() => {
    //     jest.spyOn(dom, "useLocation").
    // jest.spyOn(useLocation, )
    // jest.spyOn(timer, "useQuery")
    // jest.spyOn(timer, "useQuery").mockImplementation(() => jest.fn());
    // });
    //
    // const mockLocation = {
    //     pathname: '/welcome',
    //     hash: '',
    //     search: '',
    //     state: '?date=2020-05-15&time=1944'
    // };
    // beforeEach(() => {
    //     jest.mock('react-router-dom', () => ({
    //         ...jest.requireActual('react-router-dom'),
    //         useLocation: () => ({
    //             mockLocation
    //         })
    //     }));
    // });

    it('should display 1h 1m 1s before countdown', () => {
        const wrapper = shallow(<Timer/>);
        expect(wrapper.find('.hours').text()).toBe('1h');
        expect(wrapper.find('.minutes').text()).toBe('1m');
        expect(wrapper.find('.seconds').text()).toBe('1s');
    });
});