import * as React from 'react';
import * as enzyme from 'enzyme';
import casual from 'casual'
import GridContainer, {IGridContainerProps} from './GridContainer';

const fakeJSXElement = (): JSX.Element => {
    return casual.random_element([
        React.createElement("div", { key: casual.uuid }, casual.string),
        React.createElement("span", { key: casual.uuid }, casual.string)
    ]);
};

const fakeGrid = (): IGridContainerProps => ({
    children: fakeJSXElement(), 
    className: casual.sentence
});

describe("<GridContainer />", () => {
    it('renders without crashing', () => {
        const wrapper = enzyme.shallow(<GridContainer><p>hi</p></GridContainer>);
        console.log(wrapper);
        expect(wrapper).toBeTruthy();
    });    
})