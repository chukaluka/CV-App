import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, {useState,  useContext} from 'react'
import { PracticeContext } from '../Global/PracticeContext'

export default function EditHome({ navigation }) {
    // [fullName, setFullName] = useState('Okonkwo Chukwuka David');
    // [slackUsername, setSlackUsername] = useState('chukaluka');
    // [githubHandle, setGithubHandle] = useState('chukaluka');
    // [personalBio, setPersonalBio] = useState('An avid learner willing to put in the efforts and time, to improve, grow and achieve goals and tasks. I want to shine.');
    
    const {
        fullName,
        setFullName, 
        address, 
        setAddress,
        email,
        setEmail,
        education, 
        setEducation,
        certificate,
        setCertificate,
        roles,
        setRoles,
        year,
        setYear,
        personalBio, 
        setPersonalBio,
        number, 
        setNumber,
        experience, 
        setExperience,
        experienceYear, 
        setExperienceYear,
    } = useContext(PracticeContext);


    pressHandler = () => {
        navigation.navigate('Home')
    }

  return (
    <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            }}>
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={80}  // Adjust as needed
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                <View style={styles.firstView}>
                    <Text style={styles.firstText}>EDIT CV</Text>
                </View>
                
                <View style={styles.secondContainer}>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>full name</Text>
                        <TextInput
                            style={styles.input}
                            value={fullName}
                            onChangeText={(text) => setFullName(text)}
                            placeholder='john doe...'
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>address</Text>
                        <TextInput
                            style={styles.input}
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                            placeholder='xyz street...'
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>phone number</Text>
                        <TextInput
                            style={styles.input}
                            value={number}
                            onChangeText={(text) => setNumber(text)}
                            keyboardType='numeric'
                            placeholder='...'
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder='abc@gmail.com...'
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>personal bio</Text>
                        <TextInput
                            style={styles.input}
                            value={personalBio}
                            multiline
                            onChangeText={(text) => setPersonalBio(text)}
                            placeholder='...'
                        />
                    </View>
                    <View style={styles.secondView1}>
                        <Text style={styles.secondText}>education</Text>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={[styles.input, styles.inputHalf]}
                                value={education}
                                multiline
                                onChangeText={(text) => setEducation(text)}
                                placeholder='institution'
                            />
                            <TextInput
                                style={[styles.input, styles.inputHalf]}
                                value={year}
                                keyboardType="numeric"
                                onChangeText={(text) => setYear(text)}
                                placeholder='year'
                            />
                        </View>
                        <TextInput
                                style={styles.input1}
                                value={certificate}
                                onChangeText={(text) => setCertificate(text)}
                                placeholder='certification'
                                multiline
                            />

                    </View>
                    <View style={styles.secondView1}>
                        <Text style={styles.secondText}>experience</Text>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={[styles.input, styles.inputHalf]}
                                value={experience}
                                multiline
                                onChangeText={(text) => setExperience(text)}
                                placeholder='work'
                            />
                            <TextInput
                                style={[styles.input, styles.inputHalf]}
                                value={experienceYear}
                                keyboardType='numeric'
                                onChangeText={(text) => setExperienceYear(text)}
                                placeholder='year'
                            />
                        </View>
                        <TextInput
                                style={styles.input1}
                                value={roles}
                                onChangeText={(text) => setRoles(text)}
                                placeholder='roles'
                                multiline
                            />

                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={pressHandler}
                    >
                        <Text style={styles.buttonText}>Done</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    firstView: {
        backgroundColor: 'black' ,
        marginTop: 40,
        padding: 20,
    },
    firstText: {
        color: 'white',
        fontFamily: 'serif',
        letterSpacing: 5
    },
    secondContainer: {
        marginStart: 25,
        marginTop: 8,
        marginEnd: 25
    },
    secondText: {
        textTransform: 'uppercase',
        fontFamily: 'serif',
        letterSpacing: 3,
        marginBottom: 10
    },
    input: {
        fontFamily: 'sans-serif-light',
        fontSize: 17,
        borderWidth: 2, // Add a border
        borderColor: 'lightgray',
        padding: 5,
        borderRadius: 10
    },
    input1: {
        fontFamily: 'sans-serif-light',
        fontSize: 17,
        borderWidth: 2, // Add a border
        borderColor: 'lightgray',
        padding: 5,
        borderRadius: 10,
        marginTop: 5
    },
    secondView: {
        marginTop: 30
    },
    secondView1: {
        marginTop: 30,
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row',   // Align elements in a row
        justifyContent: 'space-between',  // Distribute space between them
    },
    inputHalf: {
        flex: 1,  // Take up equal space
        marginRight: 10,  // Add space between the two inputs
    },

    button: {
        backgroundColor: 'hsl(120, 40%, 30%)',
        padding: 10,
        borderRadius: 5,
        marginTop: 40,
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
        alignItems: 'center'
      }
})