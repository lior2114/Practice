import { useState } from "react"
import { useUser } from "../../Contexts/userContext"

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
        <form onSubmit={handleForm}>
            <input type="text" 
            placeholder="user_id"
            name="user_id"
            value={form.user_id}
            onChange={handlechange}
            />


            <input type="text"
            placeholder="username"
            name="username"
            value={form.username}
            onChange={handlechange}
            />

            <input type="email"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handlechange}
            />

            <input type="password"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handlechange}
            />

            <button type="submit">click to update user</button>

            {error && <div className="error">{error}</div>}
            {successfully && <div className="success">{successfully}</div>}
        </form>

    )
}