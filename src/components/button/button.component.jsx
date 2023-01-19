import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    regular: '',
};

const Button = ({ children, buttonType = 'regular', ...otherPorps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherPorps}>
            {children}
        </button>
    );
};

export default Button;
