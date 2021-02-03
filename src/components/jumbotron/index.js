import React from 'react';
import {Item, Container, Inner, Title, Subtitle, Image, Pane} from './Styles/jumbotron';

export default function Jumbotron({children, direction = 'row' , ...props}){
    return(
        <Item {...props}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )

}


Jumbotron.Container = function JumbotronContainer({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}


Jumbotron.Title = function JumbotronContainer({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.Subtitle = function JumbotronContainer({ children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>;
}

Jumbotron.Image = function JumbotronImage({...restProps}){
    return <Image {...restProps} />;
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}