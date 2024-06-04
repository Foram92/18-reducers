import className from "classnames";

function Button ({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
 }) {
    const classes = className(rest.className, 'flex items-center px-4 py-1.5 border', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-600 bg-gray-500 text-white': secondary,
        'border-green-600 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-600 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-600': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-900': outline && warning,
        'text-red-500': outline && danger,
    });

    return (
        <div>
            <button {...rest} className={classes}>
                { children }
            </button>
        </div>
    )
}

Button.propTypes = {
    checkValidation: ({ primary, secondary, success, warning, danger }) => {

    const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);

        if ( count > 1 ) {
            return new Error ("only one prop can be true!");
        }
    },
};

export default Button;