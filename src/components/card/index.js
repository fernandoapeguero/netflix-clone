import React, {useState, useContext, createContext} from 'react';
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureClose,
    FeatureText,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image
} from './styles/card';


const FeatureContext = createContext();


export default function Card({children, ...restProps}){
    const [showfeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState(false);

    return (
        <FeatureContext.Provider value={{showfeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}


Card.Group = function CardGroup ({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle ({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle ({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardSubTitle ({children, ...restProps}){
    return <Text{...restProps}>{children}</Text>
}

Card.Entities = function CardEntities ({children, ...restProps}){
    return <Entities {...restProps}>{children}</Entities>
}

Card.Meta = function CardMeta ({children, ...restProps}){
    return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({item, children, ...restProps}){

    const {setShowFeature, setItemFeature} = useContext(FeatureContext);


    return (
        <Item 
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps} >

        </Item>)
}

Card.Image = function CardImage({src , ...restProps}){
    return <Image {...restProps} ></Image>
}


Card.Feature = function CardFeature({children, category, ...restProps}){
    const {showfeature, itemFeature , setShowFeature} = useContext(FeatureContext);

    return showfeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.Title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).upperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null;
}
