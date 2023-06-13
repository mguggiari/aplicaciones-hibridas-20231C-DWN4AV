import { createContext, useContext, useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'

import profileService from '../services/profile.service'
import authService from '../services/auth.service'

const SessionContext = createContext()

function useSession(){
    return useContext(SessionContext)
}

function useProfile(){
    const {profile} = useSession()
    return profile
}

function SessionProvider({children}){
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()

    const onLogout = () => {
        authService.logout()
        localStorage.removeItem('token')
        navigate('/login', {replace: true})
    }


    useEffect(() => {
        profileService.getCurrent()
        .then((profile) => {
            setProfile(profile)
        })
    }, [])



    
    return (
        <SessionContext.Provider value={{profile, onLogout}}>
            {children}
        </SessionContext.Provider>
            )
}


export {
    useSession,
    useProfile,
    SessionProvider
}