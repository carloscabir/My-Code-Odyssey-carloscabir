import { View, StyleSheet, Image } from "react-native"
import { StyledText } from './StyledText'
import React from 'react'
// import { Repository } from '../consts/types'
import { RepositoryStats } from './RepositoryStats'
import theme from '../theme'

interface Repository { 
  id: string,
  fullName: string,
  description: string,
  language: string,
  forksCount: number,
  starsCount: number,
  ratingAverage: number,
  reviewCount: number,
  ownerAvatarUrl: string,
}

const RepositoryItemHeader: React.FC<Repository> = ({ ownerAvatarUrl, fullName }) => {
  const username = fullName.split('/')[0]

  return (
      <View style={styles.header}>
        <Image style={styles.image} source={{uri: ownerAvatarUrl}} />
      
        <StyledText color='white'>{username}</StyledText>
      </View>
  )
}

const RepositoryItemBody: React.FC<Repository> = ({ fullName, description, language }) => {
  return (
    <View style={styles.body}>
      <StyledText fontWeight='bold' fontSize='subtitle' color='white'>{ fullName }</StyledText>
    
      <StyledText fontSize='subheading' color='white'>{description}</StyledText>

      <StyledText style={styles.language} color='white'>{language}</StyledText>
    </View>
  )
}

export const RepositoryItem: React.FC<Repository> = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />

      <RepositoryItemBody {...props} />
      
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    // backgroundColor: theme.colors.surface,
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 5
  },
  language: {
    alignSelf: "flex-start",
    padding: 4,
    backgroundColor: theme.colors.surface,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 10
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: "hidden",
  }, 
  strong: {
    fontWeight: "bold",
    color: "#987554"
  },
})