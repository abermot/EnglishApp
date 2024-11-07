import {StyleSheet} from 'react-native';
import AppScrollView from '@/components/AppScrollView';
import { useState } from 'react';
import { TranslationBoxes } from '@/components/TranslationBoxes';

export default function TranslatorScreen() {
  const [text, onChangeText] = useState('Write here...');
  return (
    <AppScrollView
      headerBackgroundColor={{ light: '#e3f5ff', dark: '#1D3D47' }}
     >
      <TranslationBoxes onChangeText={onChangeText} text={text} languaje={'Inglés'} viewBackgroundColor={{
        dark: '#1D3D47',
        light: '#e3f5ff'
      }}/>
      <TranslationBoxes onChangeText={onChangeText} text={text} languaje={'Español'} viewBackgroundColor={{
        dark: '#1D3D47',
        light: '#e3f5ff'
      }}/>
      
    </AppScrollView>
  );
}

const styles = StyleSheet.create({
});