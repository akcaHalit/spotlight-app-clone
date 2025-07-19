import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import InitialLayout from "@/components/initialLayout";
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if(!publishableKey){
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>

        <SafeAreaProvider>
          <SafeAreaView style={{flex:1, backgroundColor: "#000"}}>
              <InitialLayout />  
              {/* Since it is InitialLayout and the settings are not done yet, it will be a black screen  */}
          </SafeAreaView>
        </SafeAreaProvider>

      </ClerkLoaded>
    </ClerkProvider>
  );

}
