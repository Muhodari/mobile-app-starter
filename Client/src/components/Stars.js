import { Text, View } from 'react-native-web';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Stars({ rating=0, size=40, color='#f7941d'}) {
  return (
    <FontAwesome 
    name="star" 
    size={size} 
    color={color} 
    rating={rating} 
    style={{margin: 5}}
    />
  )
}