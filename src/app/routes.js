import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agenda from './pages/agenda';
import Boletim from './pages/boletim';
import News from './pages/news';
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
          height: 80,
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 11,
          paddingRight: 9,
          marginTop: -20,
        },
      }}
    >
      <Tab.Screen
        name="news"
        component={News}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="newspaper"
                  size={23}
                  color={color}
                  style={{
                    borderRadius: 25,
                    borderWidth: 2,
                    padding: 10,
                    borderColor: '#6700b3',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    // paddingLeft: 13,
                    // paddingRight: 7,
                  }}
                />
              );
            }

            return (
              <Ionicons
                name="newspaper-outline"
                size={size}
                color={color}
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: '#8300E4',
                }}
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
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="calendar"
                  size={23}
                  color={color}
                  style={{
                    borderRadius: 50,
                    borderWidth: 2,
                    padding: 10,
                    borderColor: '#6700b3',
                  }}
                />
              );
            }
            return (
              <Ionicons
                name="calendar-outline"
                size={size}
                color={color}
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: '#8300E4',
                }}
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
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="reader"
                  size={23}
                  color={color}
                  style={{
                    borderRadius: 50,
                    borderWidth: 2,
                    padding: 10,
                    borderColor: '#6700b3',
                  }}
                />
              );
            }
            return (
              <Ionicons
                name="reader-outline"
                size={size}
                color={color}
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: '#8300E4',
                }}
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
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="notifications"
                  size={23}
                  color={color}
                  style={{
                    borderRadius: 50,
                    borderWidth: 2,
                    padding: 10,
                    borderColor: '#6700b3',
                  }}
                />
              );
            }
            return (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: '#8300E4',
                }}
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
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="clipboard"
                  size={23}
                  color={color}
                  style={{
                    borderRadius: 50,
                    borderWidth: 2,
                    padding: 10,
                    borderColor: '#6700b3',
                  }}
                />
              );
            }
            return (
              <Ionicons
                name="clipboard-outline"
                size={size}
                color={color}
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: '#8300E4',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
