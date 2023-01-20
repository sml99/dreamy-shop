import SingInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpFrom from '../../components/sign-up-form/sign-up-form.component';
import './authentication.styles.scss';
const Authentication = () => {
    return (
        <div className="authentication-container">
            <SingInForm />
            <SignUpFrom />
        </div>
    );
};

export default Authentication;
