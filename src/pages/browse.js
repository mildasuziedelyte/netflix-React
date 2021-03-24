import React from 'react';
import {useContent} from '../hooks';

export default function Browse() {
    const { series } = useContent('series');

    console.log(series);
    // we need series and films in header
    // slides
    // pass it to the browse container
    return (
        <p>Hello from the browse!</p>
    );
}