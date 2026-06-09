import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import MoreCards from './components/MoreCards'
import FancyCards from './components/FancyCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <MoreCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App