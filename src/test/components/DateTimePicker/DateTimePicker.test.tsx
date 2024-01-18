import React from 'react';
import { shallow } from 'enzyme';
import DateTimePicker from '../../../main/components/DateTimePicker/DateTimePicker';

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

describe('DateTimePicker test suite', () => {
    it('should pass selected date to Link component', () => {
        const wrapper = shallow(<DateTimePicker />);
        const linkWrapper = wrapper.find('Link');
        expect(wrapper.find('.colorRedd').text()).toBe('Disclaimer:');
    });
});