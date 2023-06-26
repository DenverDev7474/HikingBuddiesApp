import * as Font from 'expo-font';
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';


import {
    RobotoSlab_300Light,
    RobotoSlab_400Regular
  } from '@expo-google-fonts/roboto-slab';

export default useFonts = async () => {
  await Font.loadAsync({
    OpenSans_400Regular,
    OpenSans_700Bold,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
  });
};