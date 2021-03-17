import React from 'react';
import {ReleaseBody, Spinner, LockBody, Picture} from './style/loading'

export default function Loading({src, ...restProps}){

    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}


Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />

}