import SignUpFrom from '../../components/sign-up-form/sign-up-form.component';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <button onClick={logGoogleUser}>SIGN IN USING GOOGLE</button>
            <SignUpFrom />
        </div>
    );
};

export default SignIn;
