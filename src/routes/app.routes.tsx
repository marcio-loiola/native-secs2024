import { CardBlock } from "@components/CardBlock";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="dashboard"
        component={Home}
      />
    </Navigator>
  );
}

export default AppRoutes;