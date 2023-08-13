import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RadioButton from '../../componenta/radioButton';

const CreateAccount = () => {
  const [selectedNo, setSelectedNo] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <React.Fragment>
      <View style={{margin: '3%', justifyContent: 'center'}}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: '#000'}}>
          Create your popX account
        </Text>

        <View style={{marginTop: '10%'}}>
          <View style={styles.labelContainer}>
            <Text style={{color: '#6c25ff'}}>
              Full Name <Text style={{color: 'red'}}>* </Text>
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput>
              <Text>Marry Doe</Text>
            </TextInput>
          </View>
        </View>

        <View style={{marginTop: '5%'}}>
          <View style={styles.labelContainer}>
            <Text style={{color: '#6c25ff'}}>
              Phone Number <Text style={{color: 'red'}}>* </Text>{' '}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput>
              <Text>Marry Doe</Text>
            </TextInput>
          </View>
        </View>

        <View style={{marginTop: '5%'}}>
          <View style={styles.labelContainer}>
            <Text style={{color: '#6c25ff'}}>
              Email Address <Text style={{color: 'red'}}>* </Text>
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput>
              <Text>Marry Doe</Text>
            </TextInput>
          </View>
        </View>

        <View style={{marginTop: '5%'}}>
          <View style={styles.labelContainer}>
            <Text style={{color: '#6c25ff'}}>
              Password <Text style={{color: 'red'}}>* </Text>
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput>
              <Text>Marry Doe</Text>
            </TextInput>
          </View>
        </View>

        <View style={{marginTop: '5%'}}>
          <View style={styles.labelContainer}>
            <Text style={{color: '#6c25ff'}}>Comapny Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput>
              <Text>Marry Doe</Text>
            </TextInput>
          </View>
        </View>

        <View style={{marginTop: '5%'}}>
          <View>
            <Text style={{color: '#000'}}>
              Are you an Agency? <Text style={{color: 'red'}}>* </Text>
            </Text>
            <View style={{marginTop: '2%', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => setSelected(!selected)}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton selected={selected} />
                <Text style={{color: '#000', marginLeft: '5%'}}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedNo(!selectedNo)}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton selected={selectedNo} />
                <Text style={{color: '#000', marginLeft: '5%'}}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginTop: '10%', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#6c25ff',
              alignItems: 'center',
              borderRadius: 5,
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Create Account</Text>
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
