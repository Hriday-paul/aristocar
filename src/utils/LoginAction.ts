import { auth } from "@/app/firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const GoogleLogin = async (): Promise<{ displayName: string | null, email: string | null, photoURL: string | null }> => {
    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL } = res.user
    return { displayName, email, photoURL }
};
