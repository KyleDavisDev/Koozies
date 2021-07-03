import * as React from 'react';
import * as enzyme from 'enzyme';
import casual from 'casual'
import GridContainer, {IGridContainerProps} from './GridContainer';

casual.seed(15);
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
        const wrapper = enzyme.shallow(<GridContainer>{fakeJSXElement()}</GridContainer>);
        expect(wrapper).toBeTruthy();
    });
    
    it('matches snapshot', () => {
        const wrapper = enzyme.shallow(<GridContainer>{fakeJSXElement()}</GridContainer>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders expected children', () => {
        const children = fakeGrid().children;
        const wrapper = enzyme.shallow(<GridContainer>{children}</GridContainer>);
        
        expect(wrapper.find("WithStyles(ForwardRef(Grid))").prop("children")).toBeTruthy();
        expect(wrapper.find("WithStyles(ForwardRef(Grid))").prop("children")).toEqual(children)
    });
})