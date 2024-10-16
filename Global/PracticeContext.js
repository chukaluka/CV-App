import React, {useState} from "react";
import { printToFileAsync } from 'expo-print';
import {shareAsync} from 'expo-sharing'

const PracticeContext = React.createContext();

const PracticeProvider = ({children}) => {
    [fullName, setFullName] = useState('');
    [address, setAddress] = useState('');
    [number, setNumber] = useState('');
    [email, setEmail] = useState('');
    [personalBio, setPersonalBio] = useState('');
    [education, setEducation] = useState('');
    [experience, setExperience] = useState('');

    const html = `
        <html>
            <head>
                <style>
                    body {
                        background-color: black;
                    }
                </style>
            </head>
            <body>
                <h1>Name: <br/> ${fullName}</h1>
                <h1>Address: <br/> ${address}</h1>
                <h1>Phone number: <br/> ${number}</h1>
                <h1>Objective: <br/> ${personalBio}</h1>
                <h1>Education: <br/> ${education}</h1>
                <h1>Experience: <br/> ${experience}</h1>
            </body>
        </html>
    `

    let generatePdf = async () => {
        const file = await printToFileAsync({
            html: html,
            base64: false
        })

        await shareAsync(file.uri)
    }

    return(
        <PracticeContext.Provider value={{
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
        }}>
            {children}
        </PracticeContext.Provider>
    )
}

export {PracticeContext, PracticeProvider}