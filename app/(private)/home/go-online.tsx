import { useAuth } from '@/contexts/AppProvider';
import { useUser } from '@/hooks/api/useUser';
import { Redirect } from 'expo-router';
import * as Location from 'expo-location';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toast } from 'sonner-native';
import HomeScreen from '../orders';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function GoOnlineScreen() {
  const { state: { user } } = useAuth();
  const { updateProfile, loading } = useUser();

  

  const handleGoOnline = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        toast.error('Location permission is required to go online');
        return;
      }

      await updateProfile({ online: true });
      toast.success('You are now online');
    } catch (error: any) {
      console.error('Failed to go online:', error);
      toast.error(error?.message || 'Failed to go online');
    }
  };

  if (user && user.online) {
    return <Redirect href="/(private)/home" />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://api.builder.io/api/v1/image/assets/TEMP/3619225119bd10f6a1c9579a1f7e6b81d11749d1?width=860",
        }}
        style={styles.worldMap}
        resizeMode="cover"
      />
      
      <SafeAreaView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>You are currently offline</Text>
          <Text style={styles.subtitle}>
            Go online to start receiving delivery requests and managing your orders.
          </Text>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleGoOnline}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Go Online</Text>
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  worldMap: {
    width: SCREEN_WIDTH,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.5,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Raleway-Bold',
    color: '#100A37',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#7C8BA0',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#0085FF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway-Bold',
    color: '#FFF',
  },
});