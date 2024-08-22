import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from './pages/News';
import Boletim from './pages/Boletim';
import Agenda from './pages/Agenda';
import Recados from './pages/Recados';
import Tarefas from './pages/Tarefas';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='news'
        component={News}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='agenda'
        component={Agenda}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='boletim'
        component={Boletim}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='recados'
        component={Recados}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='tarefas'
        component={Tarefas}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
