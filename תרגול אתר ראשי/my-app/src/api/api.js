const API_URL = "http://localhost:5000";

export const login = async(userData) => {
    try{
        const response = await fetch(`${API_URL}/api/users/login`,{
            method: "POST",
            headers:{
                "Content-Type":  "application/json",
            },
            body: JSON.stringify(userData)
        })
        if (!response.ok){
            const errorData = await response.json()
            throw new Error(errorData.error || "Login fail")
        }
        return await response.json()
    }   
    catch (error){
            console.error("Login error", error);
            throw error;
        }
    }

export const register = async (userData) =>{
    try{
    const response = await fetch(`${API_URL}/api/users`,{
      method :"POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body: JSON.stringify(userData)
    })
    if(!response.ok){
        const errorData = await response.json()
        throw new Error (errorData.error || "register fail")
    }
    return await response.json()
    }catch(error){
        throw new Error ("faild to register", error)
    }
}

export const getUserById = async (userId) => {
    try{
        const response = await fetch(`${API_URL}/api/users/${userId}`,{
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(!response.ok){
            const err = await response.json().catch(() => ({}));
            throw new Error(err.error || "Failed to fetch user");
        }
        return await response.json();
    } catch (error){
        console.error("getUserById error", error);
        throw error;
    }
}

export const updateUser = async (userData) => {
    try{
        const payload = {};
        if (userData.username) payload.username = userData.username;
        if (userData.email) payload.email = userData.email;
        if (userData.password) payload.password = userData.password;
    
        const response = await fetch (`${API_URL}/api/users/update/${userData.user_id}`,{
            method: "PUT",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.error || "failed to update")}

        return await response.json()

  } catch (error) {
    console.error("Update error", error);
    throw error;
  }
}