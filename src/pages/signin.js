import React, {useState} from 'react';
import { Form } from '../components';
import {HeaderContainer} from '../containers/header'

export default function Signin(){
    const [error, setError] = useState('')

    return (
        <HeaderContainer>
            <Form>
                {error && <Form.Error>{error}</Form.Error>}
            </Form>
        </HeaderContainer>
    )
}