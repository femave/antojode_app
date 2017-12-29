'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Input, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import { categorieEat, categorieDrink } from '../actions'

class Main extends Component {
    componentWillMount() {
        this.setState({})
    }

    onButtonPress(categorie) {
        if(categorie == 'eat'){
            this.props.categorieEat({ value: categorie })
        }else {
            this.props.categorieDrink({ value: categorie })
        }
        Actions.catgories()
    }
    
    render() {
        return (
            <Card>
                <Header headerText={this.props.title} />
                <CardSection style={styles.align}>
                    <Button 
                        iconName="food" 
                        title="Eat" 
                        iconSize={80}
                        onPress={() => this.onButtonPress('eat')}
                    />
                    <Button 
                      iconName="food-fork-drink" 
                      title="Drink"
                      iconSize={80} 
                      onPress={() => this.onButtonPress('drink')}
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

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { categorieEat, categorieDrink })(Main);
