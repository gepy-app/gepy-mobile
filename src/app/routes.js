import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import News from './pages/news';
import Agenda from './pages/agenda';
import Boletim from './pages/boletim';
import Recados from './pages/recados';
import Tarefas from './pages/tarefas';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6700B3',
        tabBarInactiveTintColor: '#8300E4',
        tabBarStyle: {
          height: 100,
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingBottom: 5,
          paddingTop: 5,
          marginTop: -20,
        },
      }}
    >
      <Tab.Screen
        name="news"
        component={News}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="newspaper"
                  size={size}
                  color={color}
                  style={{
                    borderRadius: 50,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: '#6700b3',
                  }}
                />
              );
            }
            return (
              <Ionicons
                name="newspaper-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="agenda"
        component={Agenda}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="calendar"
                  size={size}
                  color={color}
                />
              );
            }
            return (
              <Ionicons
                name="calendar-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="boletim"
        component={Boletim}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="reader"
                  size={size}
                  color={color}
                />
              );
            }
            return (
              <Ionicons
                name="reader-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="recados"
        component={Recados}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="notifications"
                  size={size}
                  color={color}
                />
              );
            }
            return (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="tarefas"
        component={Tarefas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="clipboard"
                  size={size}
                  color={color}
                />
              );
            }
            return (
              <Ionicons
                name="clipboard-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
