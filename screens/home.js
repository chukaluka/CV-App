import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useContext} from 'react'
import { PracticeContext } from '../Global/PracticeContext'

export default function Home({ navigation }) {

    const {
        fullName,
        setFullName, 
        slackUsername, 
        setSlackUsername,
        githubHandle, 
        setGithubHandle,
        personalBio, 
        setPersonalBio
    } = useContext(PracticeContext);

    const pressHandler = () => {
        navigation.navigate('EditHome')
    }

  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Text style={styles.firstText}>HNGX CV APP</Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.secondView}>
            <Text style={styles.secondText}>full name</Text>
            <Text style={styles.secondsubText}>{fullName}</Text>
        </View>
        <View style={styles.secondView}>
            <Text style={styles.secondText}>slack username</Text>
            <Text style={styles.secondsubText}>{slackUsername}</Text>
        </View>
        <View style={styles.secondView}>
            <Text style={styles.secondText}>github handle</Text>
            <Text style={styles.secondsubText}>{githubHandle}</Text>
        </View>
        <View style={styles.secondView}>
            <Text style={styles.secondText}>personal bio</Text>
            <Text style={styles.secondsubText}>{personalBio}</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity 
        style={styles.button}
        onPress={pressHandler}
        >
            <Text style={styles.buttonText}>edit cv</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black' ,
        marginTop: 30,
        padding: 20,
    },
    firstText: {
        color: 'white',
        fontFamily: 'serif',
        letterSpacing: 5,
        fontSize: 20
    },
    secondContainer: {
        marginStart: 25,
        marginTop: 35,
        marginEnd: 25
    },
    secondText: {
        textTransform: 'uppercase',
        fontFamily: 'serif',
        letterSpacing: 3,
        fontSize: 20
    },
    secondsubText: {
        fontFamily: 'sans-serif-light',
        fontSize: 17
    },
    secondView: {
        marginTop: 30
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      buttonText: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'serif',
        letterSpacing: 3
      },
      buttonView: {
        alignItems: 'center'
      }
})