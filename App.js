import {Text, View, Button} from 'react-native';
import Login from './Pages/Login';
import CreateAccount from './Pages/Create';

const App = () => {
  return (
    <View>
      <View
        style={{
        }}>
        
        {/* <Login /> */}
        <CreateAccount />
      </View>
    </View>
  );
};

export default App;
