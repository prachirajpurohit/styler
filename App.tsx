import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import MoreCards from './components/MoreCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactLists from './components/ContactLists'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <MoreCards />
        <ContactLists />
        <ActionCard />
        <FancyCards imageSrc={require('./images/crying_kitten.jpg')} />
        <FancyCards imageSrc={require('./images/banana.jpg')} />
        <FancyCards imageSrc={require('./images/babycow.jpg')} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App