'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { searchByValue } from '../actions'
import { Button, Header, Input, Card, CardSection } from './common';
import uuid from '../../assets/uuid';


class Categories extends Component {
    state = { latitude: null, longitude: null, error: null }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      }

    renderButtons(){      
        const categories = this.props.categoriesReducer;

        let first = []
        return (
            categories.map(({name, icon}, index) => {
                if(index % 2){
                    return  <CardSection style={styles.align} key={uuid()}>
                                {first}
                                <Button key={name} iconName={icon} title={name} iconSize={80} onPress={() => this.onButtonPress({name})} />
                            </CardSection>
                } else {
                    first = <Button key={name} iconName={icon} title={name} iconSize={80} onPress={() => this.onButtonPress({name})} />
                }
            })
        )        
    }

    onButtonPress(searcher) {
        const { name } = searcher;
        this.props.searchByValue(name, this.state)
    }

    render() {
        return(
            <Card style={{flex:1 }}>
                <Header headerText={this.props.title} home/>                
                {this.renderButtons()}                
            </Card>
        )
    }
}

const styles = {
    align: {
        marginTop: 150,
        justifyContent: 'space-around',

    }
}


const mapStateToProps = (state) => {

    return state;
  }

export default connect(mapStateToProps,{ searchByValue })(Categories);