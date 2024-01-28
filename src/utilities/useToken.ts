import { useState } from "react";

interface UserToken {
    userToken: string;
}

export const useToken = () => {
    const getToken = (): string | undefined => {
        const tokenString = localStorage.getItem('token');

        const userToken: UserToken | null = tokenString === 'undefined' ? null: JSON.parse(tokenString);
        return userToken?.userToken;
    };

    const [token, setToken] = useState<string | undefined>(() => getToken());

    const saveToken = (userToken: UserToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.userToken);
    };

    return {
        setToken: saveToken,
        token,
    };
};