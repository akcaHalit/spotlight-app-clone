import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: "#000"}}>
        
        <Stack screenOptions={{ headerShown: false}}/>
      
      </SafeAreaView>
    </SafeAreaProvider>

  );


  

    {/* First:
       This way we can edit the settings of the pages. 
    <Stack.Screen name="index" options={{title: "Anasayfa"}}  />
    <Stack.Screen name="notifications" 
    options={{
      title: "Bildirimler",
      headerShown: false
    }}  />
  </Stack> 
    */}
  

}
