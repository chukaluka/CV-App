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
        personalBio, 
        setPersonalBio,
        number, 
        setNumber,
        experience, 
        setExperience
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
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>address</Text>
                        <TextInput
                            style={styles.input}
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>phone number</Text>
                        <TextInput
                            style={styles.input}
                            value={number}
                            onChangeText={(text) => setNumber(text)}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>personal bio</Text>
                        <TextInput
                            style={styles.input}
                            value={personalBio}
                            multiline
                            onChangeText={(text) => setPersonalBio(text)}
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>education / year</Text>
                        <TextInput
                            style={styles.input}
                            value={education}
                            multiline
                            onChangeText={(text) => setEducation(text)}
                        />
                    </View>
                    <View style={styles.secondView}>
                        <Text style={styles.secondText}>experience / year</Text>
                        <TextInput
                            style={styles.input}
                            value={experience}
                            multiline
                            onChangeText={(text) => setExperience(text)}
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
    },
    input: {
        fontFamily: 'sans-serif-light',
        fontSize: 17,
        borderWidth: 2, // Add a border
        borderColor: 'lightgray',
        padding: 5,
        borderRadius: 10
    },
    secondView: {
        marginTop: 30
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