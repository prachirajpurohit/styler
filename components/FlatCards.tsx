import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingStyles}>FlatCards</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}><Text>Red</Text></View>
          <View style={[styles.card, styles.cardTwo]}><Text>Yellow</Text></View>
          <View style={[styles.card, styles.cardThree]}><Text>Blue</Text></View>
          <View style={[styles.card, styles.cardOne]}><Text>Red</Text></View>
          <View style={[styles.card, styles.cardTwo]}><Text>Yellow</Text></View>
          <View style={[styles.card, styles.cardThree]}><Text>Blue</Text></View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingStyles: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 12,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'yellow',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
})