import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DATA = [
    {
        id: '1',
        imagesrc: require('../images/babycow.jpg'),
    },
    {
        id: '2',
        imagesrc: require('../images/kitten2.jpg'),
    },
    {
        id: '3',
        imagesrc: require('../images/tikku.png'),
    },
    {
        id: '4',
        imagesrc: require('../images/crying_kitten.jpg'),
    },
    {
        id: '5',
        imagesrc: require('../images/kitten.png'),
    },
    {
        id: '6',
        imagesrc: require('../images/silly_catto.jpg'),
    },
    {
        id: '7',
        imagesrc: require('../images/banana.jpg'),
    },
    {
        id: '8',
        imagesrc: require('../images/pablo.png'),
    },
];

type ImageDataType = { imagesrc: ImageSourcePropType };

const Images = ({ imagesrc }: ImageDataType) => (
    <Image
        source={imagesrc}
        style={styles.card}
        resizeMode='cover'
    />
);

type CardItemType = { id: string, imagesrc: ImageSourcePropType }

const renderItem = ({ item }: { item: CardItemType }) => (
    <Images imagesrc={item.imagesrc} />
)

export default function MoreCards() {
    return (
        <View>
            <Text style={styles.headingStyles}>MoreCards</Text>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
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
    },
});
