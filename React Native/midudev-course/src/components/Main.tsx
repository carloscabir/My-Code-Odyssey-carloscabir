import { Pressable, View } from 'react-native'
import { RepositoryList } from './RepositoryList'
import { AppBar } from './AppBar'

import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'

export const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#222" }}>
      <View>
      <AppBar />
      </View>

      <RepositoryList />
{/*     
      <View style={{ backgroundColor: "#fff"}}>
        <Link  href="/yes">About</Link>
      </View> */}
    </View>
  ) 
 }