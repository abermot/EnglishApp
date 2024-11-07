import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AppScrollView from '@/components/AppScrollView';

export default function CardsScreen() {
  return (
    <AppScrollView
      headerBackgroundColor={{ light: '#e3f5ff', dark: '#1D3D47' }}
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Comming soon</ThemedText>
      </ThemedView>
    </AppScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
