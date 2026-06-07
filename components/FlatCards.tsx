import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DATA = [
  {
    id: "One",
    text: "Red"
  },
  {
    id: "Two",
    text: "Yellow"
  },
  {
    id: "Three",
    text: "Blue"
  },
  {
    id: "Four",
    text: "Red"
  },
  {
    id: "Five",
    text: "Yellow"
  },
  {
    id: "Six",
    text: "Blue"
  },
];

type ItemProps = { text: string, backgroundColor: string }

const Item = ({ text, backgroundColor }: ItemProps) => (
  <View style={[styles.card, { backgroundColor }]}>
    <Text style={styles.cardText}>
      {text}
    </Text>
  </View>
);

export default function FlatCards() {
  const colors = ["red", "yellow", "blue"];

  return (
    <View>
      <Text style={styles.headingStyles}>FlatCards</Text>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => {
            const itemColor = colors[index % colors.length];
            return (
              <Item text={item.text}
                backgroundColor={itemColor}
              />)
          }}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 12,
    margin: 8,
  },
  cardText: {
    color: 'black',
    fontWeight: 'bold',
  }
})