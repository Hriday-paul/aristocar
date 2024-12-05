import { signIn } from "next-auth/react";

type userLogin = {
    emailPhone: string,
    password: string
}

const LoginAction = async (formdata: userLogin) => {

    const res = await signIn("credentials", { emailPhone: formdata.emailPhone, password: formdata.password, redirect: false });
    return res;
};

export default LoginAction;