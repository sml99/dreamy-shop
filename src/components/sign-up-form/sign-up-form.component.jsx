import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = { displayName: '', email: '', password: '', confirmPassword: '' };

const SignUpFrom = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formFields);
        if (password === confirmPassword) {
            createAuthUserWithEmailAndPassword({ displayName, email, password });
        }
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />
                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />
                <label>Confirm password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignUpFrom;
