import React from 'react';
import styled from 'styled-components';

import FollowerCard from './FollowerCard';
import {Link} from 'react-router-dom';

const FollowersListWrapper = styled.div`

`;

const FollowersList = props => {
    return (
        <FollowersListWrapper>
            <Link to='/'>home</Link>
            {props.followers.map((person, index) => {
               return <FollowerCard key={index} follower={person}/>
            })}
        </FollowersListWrapper>
    );
};

export default FollowersList;