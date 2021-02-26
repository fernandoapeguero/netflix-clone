import React from 'react';
import {FaqsContainer} from '../containers/faqs'
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer'
import {HeaderContainer} from '../containers/header'
import {OptForm} from '../components'
import {Feature} from '../components'

export default function Home() {
    return (
            <>
                <HeaderContainer>
                
                    <OptForm>
                        <Feature>
                            <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                            <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                            <OptForm.Input placeholder="Email Address" />
                            <OptForm.Button >Try it now</OptForm.Button>
                            <OptForm.Break />
                            <OptForm.Text>Ready to watch? Enter your email to create or restart
                                your membership.</OptForm.Text>
                        </Feature>
                    </OptForm>
                </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            </>
    )
}