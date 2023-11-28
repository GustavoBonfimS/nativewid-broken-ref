import { FlatList, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { useRef } from 'react';

const ITEM_COUNT = 100;

const items = Array.from(Array(ITEM_COUNT).keys());
export default function TabOneScreen() {
  const listRef = useRef<FlatList>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={items}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{
          gap: 20
        }}
        renderItem={(_) => (
          <View style={styles.block} />
        )}
        ListFooterComponent={() => (
          <View style={[styles.block, { backgroundColor: 'yellow'}]} />
        )}
      />

      <Pressable style={styles.goEndButton} onPress={() => {
        listRef?.current?.scrollToEnd?.({
          animated: true
        });
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30
  },
  block: {
    height: 100,
    width: '100%',
    backgroundColor: 'purple'
  },
  goEndButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'red'
  }
});
