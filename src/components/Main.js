'use strict';

import React, { Component } from 'react';
import { Button, Header, Input, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
    
    render() {
        return (
            <Card>
                <Header headerText={this.props.title} />
                <CardSection style={styles.align}>
                    <Button 
                        iconName="food" 
                        title="Eat" 
                        iconSize={80} 
                        onPress={() => Actions.catgories('Eat')}
                    />
                    <Button 
                      iconName="food-fork-drink" 
                      title="Drink"
                      iconSize={80} 
                      onPress={() => Actions.catgories('Drink')}
                    />
                </CardSection>
                <CardSection style={{borderWidth: 2 , borderColor: "black"}}>
                    <Input placeholder="Search that you want!" iconName="search"/>
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    align: {
        marginTop: 150,
        justifyContent: 'space-around'
    }
}

export default Main;
