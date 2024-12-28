import { FlatList, View } from 'react-native'
import { repositories } from '../data/repositories'
import { RepositoryItem } from './RepositoryItem'

export const RepositoryList = () => { 
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}>
    </FlatList>
  )
}