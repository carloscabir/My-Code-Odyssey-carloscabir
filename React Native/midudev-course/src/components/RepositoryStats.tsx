import { StyleSheet, View } from 'react-native'
import { StyledText } from './StyledText'
import { Repository } from '../consts/types'
import theme from '../theme'

const parseThousands = (value: number) => (
    value >= 1000 ? `${Math.floor(value / 1000)}k` : String(value)
)

export const RepositoryStats: React.FC<Repository> = ({ ratingAverage, reviewCount, starsCount, forksCount, id}, props) => {
  const stats = [
    { label: 'Stars', count: parseThousands(starsCount) },
    { label: 'Forks', count: parseThousands(forksCount) },
    { label: 'Reviews', count: parseThousands(reviewCount) },
    { label: 'Rating', count: parseThousands(ratingAverage) }];
  
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {stats.map(({ label, count }, i) => { 
        return (
          <View key={i}>
            <StyledText align='center' color='gray' fontWeight='bold'>{ count }</StyledText>
            <StyledText align='center' color='gray'>{ label }</StyledText>
          </View>
        )
      })}
    </View>
  )
 }