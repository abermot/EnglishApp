import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren } from 'react';
import { StyleSheet, View, Text, TextInput, useColorScheme } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

type Props = PropsWithChildren<{
    onChangeText: React.Dispatch<React.SetStateAction<string>>, 
    text: string, 
    languaje: string
    viewBackgroundColor: { dark: string; light: string },
  }>;

export function TranslationBoxes({onChangeText, text, languaje, viewBackgroundColor}: PropsWithChildren & Props) {
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
        <View style={[styles.viewTextInput, {backgroundColor: viewBackgroundColor[theme]}]}>
            <Text style={{
                fontSize: 17,
                paddingBottom: 5, 
                color: theme === 'light' ? Colors.light.text : Colors.dark.text
                }}>
                {languaje}
            </Text>
            <TextInput
            style={[styles.input, 
                {backgroundColor: viewBackgroundColor[theme],
                color: theme === 'light' ? Colors.light.text : Colors.dark.text,
                }]}
            onChangeText={onChangeText}
            value={text}
            multiline={true}
            selectTextOnFocus={true}
            textAlignVertical='top' // required for android
            />
        </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 15,
  }, 
  viewTextInput: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom:20
  }
});

