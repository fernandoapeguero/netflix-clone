import React, {useState} from 'react';
import {HeaderContainer} from '../containers/header'
import {Form } from '../components';
import * as ROUTES from '../constants/routes'
import { FooterContainer } from '../containers/footer';

export default function Signup(){

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' | emailAddress === '' | password === '';


    const handleSignUp = (event) => {
        event.preventDefault();
        console.log('brincalo')
    }

    return (
        <>
        <HeaderContainer>
            <Form >
                <Form.Title>Sign up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignUp} method="POST">
                    <Form.Input 
                        placeholder="First Name"
                        value={firstName}
                        onChange={({target}) => setFirstName(target.value)}
                    />

                    <Form.Input
                        placeholder="Email Address"
                        type="email"
                        value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value)}
                    />

                    <Form.Input 
                        placeholder="password"
                        type="Password"
                        value={password}
                        autcomplete="off"
                        onChange={({target}) => setPassword(target.value)}
                    />
                </Form.Base>

                <Form.Submit disabled={isInvalid} type="submit" >Sign Up</Form.Submit>

                <Form.Text>
                    Already a user? <Form.Link to="/signin" >Sign In</Form.Link>
                </Form.Text>

                <Form.TextSmall>
                    This page is protected by Google reCAPTCHa.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}
