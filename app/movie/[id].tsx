import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const details=()=>{
    const {id}=useLocalSearchParams();
    return(
        <View>
            <Text>Movie details for {id}</Text>
        </View>
    )
}
export default details