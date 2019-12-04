import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardWrapper = styled.div`

`;

const FollowerCard = props => {
    const [data, setData] = useState({});
    axios.get(props.follower.url)
        .then(re => {
            setData(re.data);
        });
    return (
        <CardWrapper>
            <img src={data.avatar_url}/>
            <p>{data.login}</p>
            <p>{data.bio}</p>
        </CardWrapper>
    );
};

export default FollowerCard;