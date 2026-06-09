import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trendy Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={require("../images/babycow.jpg")} style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>title</Text>
                    <Text style={styles.cardLabel}>label</Text>
                    <Text style={styles.cardDesc}>description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla enim necessitatibus nihil adipisci veritatis magni provident minima! Harum non doloribus quod voluptatum unde nobis optio similique at laudantium eum.</Text>
                    <Text style={styles.cardFooter}>footer</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 380,
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: 'black',
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 200,
        width: 350,
        marginBottom: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: 'white',
        fontSize: 18,
        marginBottom: 6,
    },
    cardDesc: {
        color: 'white',
        fontSize: 14,
        marginBottom: 12,
        flexShrink: 1,
    },
    cardFooter: {
        color: 'white',
        fontSize: 12,
        marginBottom: 6,
    },
})