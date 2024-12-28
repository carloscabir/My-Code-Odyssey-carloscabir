import { StyledText } from './StyledText'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import Constants from 'expo-constants'
import theme from '../theme'

import { Link } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  }
})

export const AppBar = () => { 
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StyledText fontWeight='bold' style={styles.text}>
          Repositories
        </StyledText>
      </View>
    </SafeAreaView>
  )
}