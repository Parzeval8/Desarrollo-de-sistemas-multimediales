import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Register () {
    const navigate = useNavigate ();
    const toastOptions = {
        position:"",
    };

    const [values, setValues] = useState ({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const Validation = () => {
        const { username, email, password, confirmPassword } = values;
        if (password !== confirmPassword ) {

        } else if (password.length < 0){

        } else if (password.length < 0){

        } else if (email == "" || "validacion email") {

        }

        return true;
    };

    return (
        <>
        <formContainer>
            
        </formContainer>
        </>
    );
}