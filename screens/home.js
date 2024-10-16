import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useContext} from 'react'
import { PracticeContext } from '../Global/PracticeContext'
import { printToFileAsync } from 'expo-print';
import {shareAsync} from 'expo-sharing'

export default function Home({ navigation }) {

    const {
        fullName,
        setFullName, 
        address, 
        setAddress,
        email,
        setEmail,
        education, 
        setEducation,
        personalBio, 
        setPersonalBio,
        number, 
        setNumber,
        experience, 
        setExperience,
        generatePdf
    } = useContext(PracticeContext);

    const pressHandler = () => {
        navigation.navigate('EditHome')
    }

    

  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Text style={styles.firstText}>CV APP</Text>
      </View>
      <ScrollView>
        <View style={styles.secondContainer}>
            <View style={styles.secondView}>
                <Text style={styles.secondText}>full name</Text>
                <Text style={styles.secondsubText}>{fullName}</Text>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.secondText}>address</Text>
                <Text style={styles.secondsubText}>{address}</Text>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.secondText}>phone number</Text>
                <Text style={styles.secondsubText}>{number}</Text>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.secondText}>email</Text>
                <Text style={styles.secondsubText}>{email}</Text>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.secondText}>personal bio</Text>
                <Text style={styles.secondsubText}>{personalBio}</Text>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.secondText}>education / year</Text>
                <Text style={styles.secondsubText}>{education}</Text>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.secondText}>experience / year</Text>
                <Text style={styles.secondsubText}>{experience}</Text>
            </View>
        </View>
            <View style={styles.buttonView}>
                <TouchableOpacity 
                style={styles.button}
                onPress={pressHandler}
                >
                    <Text style={styles.buttonText}>edit cv</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button1}
                onPress={generatePdf}
                >
                    <Text style={styles.buttonText}>Generate pdf</Text>
                </TouchableOpacity>
            </View>
      </ScrollView>
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
        marginTop: 30,
        borderWidth: 2, // Add a border
        borderColor: 'lightgray',
        padding: 5,
        borderRadius: 10
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
      },
    button1: {
        backgroundColor: '#1a1919',
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 40,
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
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-around'
      }
})