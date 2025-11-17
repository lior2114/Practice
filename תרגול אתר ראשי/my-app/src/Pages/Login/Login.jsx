import { useState, useEffect } from "react"
import { useUser } from "../../Contexts/userContext"
import { Link, useNavigate } from 'react-router-dom';
import styles from "./login.module.css"

export function Login(){

    const {login, error, cleanError} = useUser()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })    
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        cleanError()
    }, [])

    const handlelogin = async(e) =>{
        e.preventDefault()
        cleanError()
        try{
            await login(formData)
            navigate("/")
        }
        catch(error){
            // Error is handled by the context
        }
    }
    

    return(
        <>
         <form onSubmit={handlelogin} autoComplete="off" className={styles.loginForm}>
         <h1 className={styles.loginHeader}>Login</h1>
            <label className={styles.headmail}>Email:
            <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="new-email"
            />
            </label>
            <label className={styles.headPassword}>Password:
            <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
            />
            </label>
            {error && <p className={styles.err}>{error}</p>}
            <button type="submit" className={styles.btnLogin}>Login</button>

            <div className={styles.registerText}>No user yet?
            please register 
            </div>
            <button type="button" className = {styles.btnRegister} onClick={()=>navigate("/Register")}>Register</button>
        </form>
        </>
    )
}