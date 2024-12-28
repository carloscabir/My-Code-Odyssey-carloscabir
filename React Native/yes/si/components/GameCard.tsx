import { useEffect, useRef, useState } from 'react';
import { getLatestGames } from 'lib/metacritic';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

export default function GameCard({ game }) {
  // className='bg-white'
  return (
    <View key={game.slug}>
      <Image source={{ uri: game.image }} style={styles.image}></Image>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>
    </View>
  );
}

export function AnimateGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 900,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 40,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 2,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 15,
  },
  description: {
    color: '#eee',
    fontSize: 12,
  },
  score: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
