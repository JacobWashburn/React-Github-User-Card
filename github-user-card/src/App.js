import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Route} from 'react-router-dom';

import UserCard from './Components/UserCard';
import FollowersList from './Components/FollowersList';

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
`;

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            user: {},
            followers: []
        };
    }

    componentDidMount () {
        axios.get('https://api.github.com/users/JacobWashburn')
            .then(re => {
                console.log('user response', re);
                this.setState({...this.state, user: re.data});
            });
        axios.get(`https://api.github.com/users/JacobWashburn/followers`)
            .then(re => {
                console.log('followers response', re);
                this.setState({...this.state, followers: re.data})
            })
            .catch(er => {
                console.log(er.message)
            })
    }

    render () {
        return (

            <AppDiv className="App">
                <Route
                    exact
                    path='/'
                    render={props => <UserCard {...props} user={this.state.user}/>}
                />
                <Route
                    path='/followers'
                    render={props => <FollowersList {...props} followers={this.state.followers}/>}
                />
            </AppDiv>
        );
    }
}

export default App;
