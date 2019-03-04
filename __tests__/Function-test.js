import 'react-native';
import React from 'react';
import Home from '../App.js';
import renderer from 'react-test-renderer';

it('function and state test case', () => {
    let HomeData = renderer.create(<Home />).getInstance();
    HomeData.setStateFunction('tres');
    expect(HomeData.state.text).toEqual('tres!!!');
    //expect(HomeData.getNextValue('tres')).toEqual('tres!!!');
})