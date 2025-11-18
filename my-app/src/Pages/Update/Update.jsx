import { useState } from "react"
import { useUser } from "../../Contexts/userContext"
import styles from "./Update.module.css"
export function Update(){

    const {UpdateUser, successfully,error, cleanError, clearSuccessfully} = useUser()
    const [form, setForm] = useState({
        user_id: "",
        username: "",
        email: "",
        password: ""
    })


    const handlechange = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
            
    })
    }

    const handleForm = async(e) =>{
        e.preventDefault()
        cleanError()
        clearSuccessfully()
        try{
            await UpdateUser(form)
        }
        catch (err){

        }
    }


    return(
        <form className={styles.headForm} onSubmit={handleForm} autoComplete="off">

        <label className={styles.uder_idText}>user_id:
            <input type="text" 
            placeholder="user_id"
            name="user_id"
            value={form.user_id}
            onChange={handlechange}
            />
        </label>

        <label className={styles.uder_idText}>username:
            <input type="text"
            placeholder="username"
            name="username"
            value={form.username}
            autoComplete="new-username"
            onChange={handlechange}
            />
        </label >

        <label className={styles.uder_idText}>email:
            <input type="email"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handlechange}
            autoComplete="new-email"
            />
        </label>

        <label className={styles.uder_idText}>password:
            <input type="password"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handlechange}
            autoComplete="new-password"
            />
        </label>

            <button className={styles.btnSubmitUpdate} type="submit">click to update user</button>

            {error && <div className={styles.errMessage}>{error}</div>}
            {successfully && <div className={styles.successMessage}>{successfully}</div>}
        </form>

    )
}