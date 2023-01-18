import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <button onClick={logGoogleUser}>SIGN IN</button>
        </div>
    );
};

export default SignIn;
