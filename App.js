import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';
import { useState } from 'react';

const HelloWorld = () => {
  const size = 256;
  const r = size * 0.33;

  const [size2, setSize2] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Text>{size2}</Text>
      <Canvas
        style={{ flex: 1 }}
        onLayout={(e) => setSize2(e.nativeEvent.layout.height)}
        onSize={console.log}
      >
        <Group blendMode='multiply'>
          <Circle cx={r} cy={r} r={r} color='cyan' />
          <Circle cx={size - r} cy={r} r={r} color='magenta' />
          <Circle cx={size / 2} cy={size - r} r={r} color='yellow' />
        </Group>
      </Canvas>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </View>
  );
}
