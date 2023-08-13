import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const Login = () => {
  return (
    <React.Fragment>
      <View style={{margin: '3%', justifyContent: 'center'}}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: '#000'}}>
          Signin to your popX account
        </Text>
        <Text style={{fontSize: 20, marginTop: '2%'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Text>
        <View style={{marginTop: '5%'}}>
          <View style={styles.labelContainer}>
            <Text style={{color:"#6c25ff"}}>Email Address</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter email address" />
          </View>
        </View>

        <View style={{marginTop: '5%'}}>
          <View style={styles.labelContainer}>
            <Text style={{color:"#6c25ff"}}>Password</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter password" />
          </View>
        </View>

        <View style={{marginTop: '5%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'gray',
              alignItems: 'center',
              borderRadius: 5,
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
    marginStart: 10,
    zIndex: 1,
    elevation: 1,
    shadowColor: 'white',
    position: 'absolute',
    top: -12,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 2,
  },
});

export default Login;
