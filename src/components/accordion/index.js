import React from 'react';
import {Container, Inner, Title, Header, Body, Item} from './styles/accordion';


export default function  Accordion ({children, ...restprops}) {

    return(
        <Container {...restprops}>
            <Inner>{children} </Inner>
        </Container>
    )
}


Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}


Accordion.Header = function AccordionHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
    return <Body {...restProps}>{children}</Body>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>
}


