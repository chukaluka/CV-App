import React, {useState} from "react";

const PracticeContext = React.createContext();

const PracticeProvider = ({children}) => {
    [fullName, setFullName] = useState('Okonkwo Chukwuka David');
    [slackUsername, setSlackUsername] = useState('chukaluka');
    [githubHandle, setGithubHandle] = useState('chukaluka');
    [personalBio, setPersonalBio] = useState('An avid learner willing to put in the efforts and time, to improve, grow and achieve goals and tasks. I want to shine.');
    
    return(
        <PracticeContext.Provider value={{
            fullName,
            setFullName, 
            slackUsername, 
            setSlackUsername,
            githubHandle, 
            setGithubHandle,
            personalBio, 
            setPersonalBio

        }}>
            {children}
        </PracticeContext.Provider>
    )
}

export {PracticeContext, PracticeProvider}