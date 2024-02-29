import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;

interface Iuser {
    name?: string,
    email?: string,

}
export const AuthTest = () => {
    const [user, setUser ] = useState <Iuser>();
   const getData = async () => {
        const { data } = await axios.get("http://localhost:4001/api/test",{
            withCredentials:true
        })
        setUser(data.user)
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <>
            {user ? <h1> {user.name} </h1> : <h1>
                <Link to={'/'}>
                    login
                </Link>
            </h1> }
        </>
    )
}