import { useState } from 'react';
import {
    createUserDocumentFromAuth,
    signInUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sing-in-form.styles.scss';

const SingInForm = () => {
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInUserWithEmailAndPassword(formFields);
            console.log(response);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong password!');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    alert('Error: ' + error.code);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const defaultFormFields = { email: '', password: '' };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button buttonType="regular" type="submit">
                        Sign in
                    </Button>

                    <Button type="button" onClick={signInWithGoogle} buttonType="google">
                        Google Sign in
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SingInForm;
