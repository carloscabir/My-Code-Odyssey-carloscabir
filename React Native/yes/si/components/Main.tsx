// import Constants from 'expo-constants';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GameCard, { AnimateGameCard } from './GameCard';
import { useEffect, useState } from 'react';
import { getLatestGames } from 'lib/metacritic';

export default function Main() {
  const insets = useSafeAreaInsets();

  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getLatestGames();
      setGames(data);
    })();
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* </SafeAreaView> JUST FOR IOS */}

      {games.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item: game, index }) => {
            return <AnimateGameCard game={game} index={index} />;
          }}
        ></FlatList>
      )}
    </View>
  );
}
