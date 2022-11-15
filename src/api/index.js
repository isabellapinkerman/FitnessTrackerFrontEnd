const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api"

export async function register(username, password){
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    };
    const response = await fetch(`${BASE_URL}/users/register`, options)
    const result = await response.json();
    return result;
}
//^^^^not checked

export async function login(username, password){
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    };
    const response = await fetch(`${BASE_URL}/users/login`, options)
    const result = await response.json();
    return result
}
//^^^^ not checked

export async function getUserData(token){
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };
    const response = await fetch(`${BASE_URL}/users/me`, options)
    const result = await response.json();
    return result
}
//^^^ not checked

export async function getPublicUserRoutines(username, token){
    const options = {
        headers: { //does token need to be passed in?
            'Content-Type': 'application/json',
        }
    };
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, options)
    const result = await response.json()
    return result
}
//^^^ not checked

export async function getAllActivities(){
    const options = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(`${BASE_URL}/activities`, options)
    const result = await response.json();
    return result
}
//^^^ not checked

export async function createActivity(token, name, description){
    const options = {
        method: 'POST',
        //headers: {
        //  'Content-Type': 'application/json',
        //  'Authorization': `Bearer ${token}`
       // }
        body: JSON.stringify({
            name: name,
            description: description,
        })
    } //would we add 'Authorization' header
    const response = await fetch(`${BASE_URL}/activities`, options)
    const result = await response.json()
    return result
}
//^^^ not checked

export async function updateActivity(id, name, description){
   const options = {
     method: 'POST',
     body: JSON.stringify({
        name: name,
        description: description,
     }),
   }
    const response = await fetch(`${BASE_URL}/activities/${id}`, options)
    //temperate literal for id. check to see if this is correct
    const result = await response.json()
    return result
}