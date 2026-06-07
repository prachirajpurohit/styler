import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MoreCards() {
    return (
        <View>
            <Text style={styles.headingStyles}>MoreCards</Text>
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Image source={require('../images/babycow.jpg')} style={styles.card} resizeMode='cover' />
                    <Image source={require('../images/kitten2.jpg')} style={styles.card} resizeMode='cover' />
                    <Image source={require('../images/tikku.png')} style={styles.card} resizeMode='cover' />
                    <Image source={require('../images/crying_kitten.jpg')} style={styles.card} resizeMode='cover' />
                    <Image source={require('../images/kitten.png')} style={styles.card} resizeMode='cover' />
                    <Image source={require('../images/silly_catto.jpg')} style={styles.card} resizeMode='cover' />
                    <Image source={require('../images/banana.jpg')} style={styles.card} resizeMode='cover' />
                    <Image source={require('../images/pablo.png')} style={styles.card} resizeMode='cover' />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingStyles: {
        fontSize: 36,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginTop: 20,
    },
    container: {
        padding: 8,
    },
    card: {
        height: 100,
        width: 100,
        margin: 8,
        borderRadius: 8,
    }
})