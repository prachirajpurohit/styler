import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteUrl: string) {
        try {
            Linking.openURL(websiteUrl);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Eenie Meenie Miney Mo
                    </Text>
                </View>
                <Image source={require("../images/pablo.png")} style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum consectetur voluptatem, ipsam totam nobis excepturi ipsa tempore ipsum quisquam, quam saepe deleniti quibusdam soluta asperiores adipisci optio mollitia modi vitae.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        // onPress={() => openWebsite("geo: 0,0?q=98.123,76.213")}
                        onPress={() => openWebsite("https://prachi-rajpurohit.vercel.app")}
                    >
                        <Text style={styles.footerText}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => openWebsite("geo: 0,0?q=98.123,76.213")}
                        onPress={() => openWebsite("https://prachi-rajpurohit.vercel.app")}
                    >
                        <Text style={styles.footerText}>
                            Follow Me
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 32,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: 'orange',
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 180,
        width: 350,
        resizeMode: 'stretch',
    },
    bodyContainer: {
        padding: 12,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    footerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 6,
    }
})