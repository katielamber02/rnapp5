import React, { Component } from 'react'
import {View,StyleSheet,Animated,TouchableWithoutFeedback,Text} from 'react-native'

export default class Ball extends Component {
    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0)
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 }
        }).start()
    }
    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball}></View>
                <Text>some text</Text>
            </Animated.View>
        )
    }
}
const styles=StyleSheet.create({
    ball:{
        height:60,
        width:60,
        borderRadius:30,
        borderColor:'black',
        backgroundColor:'tomato'
      }
    
})