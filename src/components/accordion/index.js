import React, {useState, useContext, createContext} from 'react';

const ToggleContext = createContext(){

}

export default function Accordion({
    children, 
    ...restProps 
}) {
  return (
  <Container {...restProps}>
      <Inner>
          {children}
      </Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToogleShow] = useState(false);

    return  (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <Title 
            onClick= { () => setToggleShow ((toggleShow) => !toggleShow) } 
            {...restProps}
        >
            {children}
        </Title>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const {toggleShow} = useContext(ToggleContext);

    return (
        toggleShow ? 
        <Body {...restProps}>{children}</Body> :
        null
        );
};