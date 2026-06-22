import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { lightColors, darkColors } from '../theme/colors';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: lightColors.accent, headerShown: true }}>
            <Tabs.Screen 
            name="map"
            options={{
                title: "Explore",
                tabBarIcon: ({ color }) => <Ionicons name="map" size={28} color={color} />,
            }}
            />
            <Tabs.Screen 
            name="post"
            options={{
                title: "Post",
                tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={28} color={color} />,
            }}
            />
            <Tabs.Screen
            name="saved"
            options={{
                title: "Saved", 
                tabBarIcon: ({ color }) => <Ionicons name="heart" size={28} color={color} />,
            }}
            />
            <Tabs.Screen 
            name="profile"
            options={{
                title: "Profile",
                tabBarIcon: ({ color }) => <Ionicons name="person" size={28} color={color} />,
            }}
            />
        </Tabs>
    )
}