import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';

// import { useGoogleOneTapLogin } from '@react-oauth/google';

interface IGoogleLoginInfo {
    credential?: string
}

export const GoogleLoginn = () => {
    const dispatch = useDispatch();
    const handleSuccess = (credentialResponse: IGoogleLoginInfo) => {
        const  tokenId = credentialResponse?.credential;
        console.log(tokenId);  

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