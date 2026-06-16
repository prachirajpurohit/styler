import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactLists() {
  const contacts = [
    {
      uid: 1,
      name: 'Shizuku Tsukishima',
      status: 'its like we are in the sky!',
      imageUrl: 'https://64.media.tumblr.com/df667553b35c01f9580155152ad35668/a0853835281e0903-f3/s400x600/066a4161343b00761911689e6f55259ec55d5dfd.pnj',
    },
    {
      uid: 2,
      name: 'Seiji Amasawa',
      status: 'I read all kinds of books',
      imageUrl: 'https://cdn.rafled.com/anime-icons/images/81ba9437c0b6939ec9c3584052b907bb5630edd7ece8e618f570e9e26e1abe4d.jpg',
    },
    {
      uid: 3,
      name: 'Moon',
      status: 'meow meow meow',
      imageUrl: 'https://i.pinimg.com/1200x/2f/0c/0a/2f0c0a4ede89f2cb2bbb44ef704c0cf1.jpg',
    },
    {
      uid: 4,
      name: 'Baron Humbert von Gikkingen',
      status: 'Im Baron Humbert von Gikkingen.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeg8FZvdjlEOH7Blts6g4OJAvRB501jCXfxCIY7GeqFhn9ylhs-GkKDFI&s=10',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactLists</Text>
      <ScrollView
        style={styles.container}
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
    backgroundColor: '#563457',
    padding: 8,
    margin: 8,
    borderRadius: 25,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#fff'
  },
});