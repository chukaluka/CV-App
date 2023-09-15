import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
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
        slackUsername, 
        setSlackUsername,
        githubHandle, 
        setGithubHandle,
        personalBio, 
        setPersonalBio
    } = useContext(PracticeContext);


    pressHandler = () => {
        navigation.navigate('Home')
    }

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        }}>
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
                <Text style={styles.secondText}>slack username</Text>
                <TextInput
                    style={styles.input}
                    value={slackUsername}
                    onChangeText={(text) => setSlackUsername(text)}
                />
            </View>
            <View style={styles.secondView}>
                <Text style={styles.secondText}>github handle</Text>
                <TextInput
                    style={styles.input}
                    value={githubHandle}
                    onChangeText={(text) => setGithubHandle(text)}
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