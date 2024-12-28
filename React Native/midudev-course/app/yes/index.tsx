import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Index = () => { 
  return (
    <View>
      <Text> This is the Yes page</Text>

      <View style={{ backgroundColor: "#fff"}}>
        <Link href='/'>Go back to Home</Link>
      </View>
    </View>
  )
}

export default Index