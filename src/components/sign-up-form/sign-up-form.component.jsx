import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';

const defaultFormFields = { displayName: '', email: '', password: '', confirmPassword: '' };

const SignUpFrom = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);
    const resetFormField = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword({ email, password });
            createUserDocumentFromAuth(user, { displayName });
            resetFormField();
            setCurrentUser(user);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') alert('Email already in use!');
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <FormInput
                    label="Confirm password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button buttonType="regular" type="submit">
                    Sign up
                </Button>
            </form>
        </div>
    );
};

export default SignUpFrom;
