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
    [year, setYear] = useState('');
    [certificate, setCertificate] = useState('');
    [experience, setExperience] = useState('');
    [experienceYear, setExperienceYear] = useState('');
    [roles, setRoles] = useState('');

    const html = `
        <html>
            <head>
                <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: sans-serif;
                }
                    .header {
                        text-align: center;
                        margin-left: 100px; 
                        margin-right: 100px;
                    }
                    .first {
                        text-transform: uppercase;
                        font-size: 40px;
                        font-weight: 800;
                        padding-top: 20px;
                        margin-top: 20px;
                    }

                    .second {
                        text-transform: lowercase;
                    }

                    .third {
                        padding-bottom: 10px;
                    }

                    .bio {
                        text-align: center;
                        padding-top: 30px;
                        margin: 0px 80px 0px;
                        font-size: 13px;
                        
                    }

                    .bio-h1 {
                        padding-bottom: 30px;
                    }

                    .span-bio {
                        padding-top: 10px;
                        font-size: 20px;   
                    }

                    .main {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .left {
                        flex: 1;
                        padding: 40px;
                        font-size: 13px;
                        direction: flex;
                        justify-content: space-between;
                    }

                    .right {
                        flex: 1;
                        padding: 40px;
                        font-size: 15px;
                    }

                    .span-left {
                        padding-top: 10px;
                        font-size: 20px;  
                    }
                    .span-right {
                        padding-top: 10px;
                        font-size: 20px;  
                    }

                    .main-h2 {
                        font-size: 17px;
                        margin-top: 5;
                    }

                </style>
            </head>
            <body>
                <div class="header">
                    <h1 class="first"> ${fullName}</h1>
                    <h2 class="second"> ${address}</h2>
                    <h3 class="third"> ${number}</h3>
                    <h3 class="third"> ${email}</h3>
                    <hr/>
                </div>
                
                <div class='bio'>
                    <h1 class='bio-h1'>Objective <br/> <span class='span-bio'> ${personalBio} </span> </h1>
                    <hr/>
                </div>

                <div class='main'>
                    <div class='left'>
                        <h1>Education <br/> <span class='span-left'> ${education} ${year} </span></h1>
                        <h2 class='main-h2'>${certificate}</h2>
                    </div>
                    <div class='right'>
                        <h1>Experience <br/> <span class='span-right'> ${experience} ${experienceYear} </span></h1>
                        <h2 class='main-h2'>${roles}</h2>
                    </div>
                </div>
                
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
            generatePdf
        }}>
            {children}
        </PracticeContext.Provider>
    )
}

export {PracticeContext, PracticeProvider}