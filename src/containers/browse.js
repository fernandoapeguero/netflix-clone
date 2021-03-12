import React, { useState} from 'react';
import {Header} from '../components'
import * as ROUTES from '../constants/routes'
import {FirebaseContext} from './profiles';
import {SelectProfileContainer} from './profiles'
import {FooterContainer} from './footer'

export function BrowseContainer(){

    const [profile, setProfile] = useState({})

    const user = {
        displayname: 'Karl',
        photoURL: '1'
    }

    return profile.displayname ? (
        <>
            <p> Browse Container</p>
            <FooterContainer />
        </>
    ): (<SelectProfileContainer />)
}