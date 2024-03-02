import { login } from '@/redux/slices/userSlice';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// import { useGoogleOneTapLogin } from '@react-oauth/google';
const  API_BASE_URL = import.meta.env.VITE_API_BASE_URL

interface IGoogleLoginInfo {
    credential?: string
}

export const GoogleLoginn = () => {
    const dispatch = useDispatch();

    const handleSuccess = async (credentialResponse: IGoogleLoginInfo) => {
        const  credential = credentialResponse?.credential;
        
        const { data } = await axios.post(`${API_BASE_URL}/api/googleLogin`,{
            credential:credential
        })

        const userData  = data.user;
        dispatch(login(userData));
    }

    return(
        <>
        <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      /> 
      <br /> </>
    )
}