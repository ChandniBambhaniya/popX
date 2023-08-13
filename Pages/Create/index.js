import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const CreateAccount = () => {
  return (
    <React.Fragment>
      <View style={{margin: '3%', justifyContent: 'center'}}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: '#000'}}>
          Create your popX account
        </Text>

        <View style={{marginTop: '10%'}}>
          <View style={styles.labelContainer}>
            <Text style={{color: '#6c25ff'}}>Full Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput > <Text>Marry Doe</Text></TextInput>
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
export default CreateAccount;
