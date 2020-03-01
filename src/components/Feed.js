import React from 'react';
import Posts from '../pages/Posts';
import Users from './Users';

export default function Feed() {
    return (
        <div className="container feed">
            <Posts />
            <Users />
        </div>
    )
}