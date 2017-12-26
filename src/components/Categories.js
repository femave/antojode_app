'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Input, Card, CardSection } from './common';


class Categories extends Component {
    try() {
        console.log(this.props.data)
    }

    render() {
        return(
            <Card>
                <Header headerText={this.props.title} home/>
                <CardSection style={styles.align}>
                    <Button iconName="fish" title="Eat" iconSize={80} onPress={this.try()} />
                    <Button iconName="fish" title="fish" iconSize={80} />
                </CardSection>
                <CardSection style={styles.align}>
                    <Button iconName="food" title="Eat" iconSize={80} />
                    <Button iconName="food-fork-drink" title="Drink" iconSize={80} />
                </CardSection>
                <CardSection style={styles.align}>
                    <Button iconName="food" title="Eat" iconSize={80} />
                    <Button iconName="food-fork-drink" title="Drink" iconSize={80} />
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    align: {
        marginTop: 150,
        justifyContent: 'space-around'
    }
}

export default connect()(Categories);