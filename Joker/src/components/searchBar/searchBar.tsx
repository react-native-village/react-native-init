import React, {useState} from 'react';

import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Octicons';

interface SearchBarProps {}

export function SearchBar({}: SearchBarProps) {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }>
        {/* <FeatherIcon
          name="search"
          size={20}
          color="black"
          style={{margin: 1}}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* 
        {clicked && (
          <EntypoIcon
            name="cross"
            size={20}
            color="black"
            style={{padding: 1}}
            onPress={() => {
              setSearchPhrase('');
            }}
          />
        )} */}
      </View>
      {clicked && (
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
            setSearchPhrase('');
          }}>
          <Text style={styles.textCancel}>Cancel</Text>
          {/* <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          /> */}
        </TouchableOpacity>
      )}
    </View>
  );
}
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    height: 50,
  },
  cancel: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 70,
    height: 50,
  },
  // eslint-disable-next-line react-native/no-color-literals
  textCancel: {
    color: '#1761FF',
    fontSize: 18,
  },
  // eslint-disable-next-line react-native/no-color-literals
  searchBar__unclicked: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  // eslint-disable-next-line react-native/no-color-literals
  searchBar__clicked: {
    flexDirection: 'row',
    width: '70%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '90%',
  },
});
