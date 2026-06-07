import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import MoreCards from './components/MoreCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <MoreCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App