import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <Image source={ require("../assets/images/icon.png")} 
      style={{ width: 100, height: 100}}/>
      
      
      <TouchableOpacity onPress={ () => alert("You touched") }>
        <Text>Press Me!</Text>
      </TouchableOpacity>
    </View>

  );
}
