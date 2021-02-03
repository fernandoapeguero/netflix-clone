import React from 'react';
import {Jumbotron} from '../components';
import { Item } from '../components/jumbotron/Styles/jumbotron';
import jumboData from '../fixtures/jumbo.json'

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
        {jumboData.map((item) => (
            <Jumbotron key={item.id} direction={Item.direction}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src={item.image} alt={item.alt} />
                </Jumbotron.Pane>
               
            </Jumbotron>
        ))} 
        </Jumbotron.Container>
    )
}