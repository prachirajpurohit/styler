import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactLists() {
  const contacts = [
    {
      uid: 1,
      name: 'piu pondal',
      status: 'just a baby',
      imageUrl: 'https://github.com/purohitprachi72',
    },
    {
      uid: 2,
      name: 'Carlos',
      status: 'Smooooooth Operatorrrr',
      imageUrl: 'https://github.com/acyutaharidas',
    },
    {
      uid: 3,
      name: 'miu mondal',
      status: 'meow meow meow',
      imageUrl: 'https://github.com/prachirajpurohit',
    },
    {
      uid: 4,
      name: 'Baron Humbert von Gikkingen',
      status: 'Im Baron Humbert von Gikkingen.',
      imageUrl: 'https://github.com/humbert',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactLists</Text>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
    marginRight: 12,
    marginTop: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  userStatus: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#111'
  },
});