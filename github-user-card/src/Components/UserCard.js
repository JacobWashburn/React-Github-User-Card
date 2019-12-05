import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CardWrapper = styled.div`

`;

const UserImg = styled.img`

`;

const NameH2 = styled.h2`

`;

const UserInfo = styled.p`

`;

const UserCard = props => {
    return (
        <CardWrapper>
            <UserImg src={props.user.avatar_url}/>
            <NameH2>{props.user.name}</NameH2>
            <UserInfo>UserName: {props.user.login}</UserInfo>
            <UserInfo>Location: {props.user.location}</UserInfo>
            <UserInfo>Bio: {props.user.bio}</UserInfo>
            <Link to='/followers'>
                <UserInfo>Followers: {props.user.followers}</UserInfo>
            </Link>
            <UserInfo>Following: {props.user.following}</UserInfo>
        </CardWrapper>
    );
};

export default UserCard;