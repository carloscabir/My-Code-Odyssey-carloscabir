import { RepositoryList } from '@/components/RepositoryList'
import { AppBar } from '@/components/AppBar'

import { View } from 'react-native'

const Index = () => {
  return (
    <View style={{ flexDirection: 'column', flex: 1, backgroundColor: "#222",}}>

      <AppBar />

      <RepositoryList />
    
      {/*
      <View style={{ backgroundColor: "#fff"}}>
        <Link  href="/yes">About</Link>
      </View> */}
    </View>
  ) 
 }

export default Index