import { Children, createContext, useContext, useEffect, useState } from "react";
import { login as loginAPI} from "../api/api";
import { register as registerAPI} from "../api/api";
import { updateUser as updateUserAPI} from "../api/api";
import { getUserById } from "../api/api";

const userContexts = createContext()

export const useUser =  () =>{
    const context = useContext(userContexts)
    if (!context)
        throw new Error("useUser must be in use")
    return context
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error, setError] = useState("")
    const [successfully, setSuccessfully] = useState("")

    useEffect(()=>{
        const bootstrap = async () => {
            let parsed = null
            try {
                const saved = localStorage.getItem("user")
                if (!saved) {
                    setUser(null)
                    return
                }
                parsed = JSON.parse(saved)
                if (!parsed?.id) {
                    // Only clear storage if structure is invalid
                    localStorage.removeItem("user")
                    setUser(null)
                    return
                }
                // Fetch full user (including role_id) from backend
                const result = await getUserById(parsed.id)
                if (result.success && result.data) {
                    setUser(result.data)
                } else {
                    // Do NOT clear storage on transient/server errors
                    // Fallback to minimal stored user to keep basic nav
                    setUser(parsed)
                }
            } catch (e) {
                // Do NOT clear storage on errors; keep minimal user
                if (parsed) {
                    setUser(parsed)
                } else {
                    setUser(null)
                }
            } finally {
                setLoading(false)
            }
        }
        bootstrap()
    },[])

    const login = async (userData) =>{
        try {
            setLoading(true)
            setError("")
            const result = await loginAPI(userData)
            
            // Check if login was successful
            if (result.success && result.data) {
                // Set full user in memory (contains role_id)
                setUser(result.data)
                // Store only id/email in localStorage (no role_id)
                const persistedUser = {
                    id: result.data.id,
                    email: result.data.email || userData.email
                }
                localStorage.setItem("user", JSON.stringify(persistedUser))
                return result.data
            } else {
                throw new Error(result.error || "Login failed")
            }
        }
        catch (error){
            setError(error.message || "Error Login")
            throw error
        }
        finally{
            setLoading(false)
        }
    }

    const register = async (userData) => {
        try{
            setLoading(true)
            setError("")
            const result = await registerAPI(userData)

            // Check if registration was successful
            if (result.success && result.data) {
                const userToSave = {
                    id: result.data.id,
                    email: result.data.email || userData.email,
                    role_id: result.data.role_id
                }
                setUser(userToSave)
                localStorage.setItem("user", JSON.stringify(userToSave))
                return result.data
            } else {
                throw new Error(result.error || "Registration failed")
            }
        }
        catch(error){
            setError(error.message || "Registration failed")
            throw error
        }
        finally{
            setLoading(false)
        }
    }

    const UpdateUser = async(userData) =>{
        try{
            setLoading(true)
            setError("")
            const result = await updateUserAPI(userData)
            if(result.success && result.data){
                setSuccessfully("update user complete")
            }
            else{
                setError("failed to update user")
            }
        }
        catch(error){
            setError(error.message || "update user failed")
            throw error
        }
        finally{
            setLoading(false)
        }
    }

    const logout = () =>{
        setUser(null)
        setError("")
        localStorage.removeItem("user")
    }

    const cleanError = ()=>{
        setError("")
    }

    const clearSuccessfully = () =>{
        setSuccessfully("")
    }
    
    const values = {
        user,
        loading,
        error, 
        successfully,
        login,
        register,
        UpdateUser,
        logout,
        cleanError,
        clearSuccessfully
    }

    return (
        <userContexts.Provider value={values}>
            {children}
        </userContexts.Provider>
    )
}

export default userContexts