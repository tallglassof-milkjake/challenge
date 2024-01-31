// import  PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import Heading from '../components/Heading';
import TextContent from '../components/TextContent';
import Button from '../components/Button';
import Input from '../components/Input';

import ArrowLeft from '../assets/svg/arrow-left.svg';
import UserIcon from '../assets/svg/user.svg';
import KeyIcon from '../assets/svg/key.svg';
import AppleIcon from '../assets/svg/apple-icon.svg';
import GoogleIcon from '../assets/svg/google-icon.svg';

interface Props {
    setToken(tokenString: object): any;
}

const loginUser = async (credentials: object) => {
    try {
        if (credentials) {
            return { 'userToken': 'test123' };
        }
        // const data = await fetch('http://localhost:8080/token', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(credentials),
        // });
        // return await data.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

const LoginView = ({ setToken }: Props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const token = await loginUser({
            userName,
            password,
        });

        if (token) {
            setToken(token);
            navigate('/');
        }
    }

    const handleUserNameChange = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        let userName: string = target.value.toString();
        setUserName(userName);
    }

    const handlePasswordChange = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        let password: string = target.value;
        setPassword(password);
    }    

    const handleNavigateBack = () => {
        navigate('/landing');
    }

    return (
        <div className="page-wrapper">
            <div>
                <Button onClick={handleNavigateBack}>
                    <img src={ArrowLeft} alt="Arrow Back" />
                </Button>
            </div>

            <div className="flex flex-col gap-[8px] mt-[34px]">
                <Heading text="Welcome Back" headingSize='heading-3' classOverrides="!text-left" />
                <TextContent>
                    <p className="text-content !text-left">
                        Log in to your Piacoo account to explore your dream place to live across the whole world!
                    </p>
                </TextContent>
            </div>

            <div className="pt-[40px]">
                <form className="login-form flex flex-col gap-[18px]" onSubmit={handleSubmit}>
                    <label className="login-label">
                        <p>Username</p>
                        <Input imageSrc={UserIcon} altText="User Icon" inputType="text" onChange={handleUserNameChange} />
                    </label>
                    <label className="login-label relative">
                        <p>Password</p>
                        <Input imageSrc={KeyIcon} altText='Key Icon' inputType='password' onChange={handlePasswordChange} />
                    </label>
                    <div className="pt-[10px] flex flex-col gap-[12px]">
                        <Button type="primary">
                            Log in
                        </Button>

                        <div>
                            <p className="sm-clickable-link">
                                Forgot password?
                            </p>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <div className="w-full relative my-[42px]">
                    <p className="bg-[#F3F0FF] w-fit py-[4px] px-[14px] rounded-full mx-auto relative z-10">
                        OR
                    </p>
                    <div className="w-full h-[1px] bg-[#EBE8F6] absolute top-1/2 -translate-y-1/2 z-0" />
                </div>
                <div className="flex flex-col gap-[12px]">
                    <Button type="apple">
                        <span className="absolute left-[16px] top-1/2 -translate-y-1/2">
                            <img src={AppleIcon} alt="Apple Icon" />    
                        </span>
                        Sign in with Apple
                    </Button>
                    <Button type="google">
                        <span className="absolute left-[16px] top-1/2 -translate-y-1/2">
                            <img src={GoogleIcon} alt="Apple Icon" />    
                        </span>
                        Sign in with Google
                    </Button>
                </div>
            </div>
        </div>
    )
}

// LoginView.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

export default LoginView