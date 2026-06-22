import { View, Text, TextInput, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function PostScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [camPermission, requestCamPermission] = ImagePicker.useCameraPermissions();

  if (!camPermission) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if(!camPermission.granted) {
    return (
      <View>
        <Text>
          Spotattu needs access to your camera to create posts.
        </Text>
        <Button title="Grant Camera Permission" onPress={requestCamPermission} />
      </View>
    )
  }

  return (
    <View>
      <TextInput placeholder="Spot Name"></TextInput>
      <TextInput placeholder="Description"></TextInput>
    </View>
  );
}