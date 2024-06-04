import classNames from "classnames";

function Panel ({ children, className, ...rest}) {
    const finalClassNames = classNames(
    //here className is that extra styles which apply in div otherthan here defined
        'border rounded p-3 shadow bg-white w-full', className
    );

    //...rest: all the props which are passing to attached div, like onClick
    //className is passing common styling to avoid mess 
    //{children} is what's inside div, we take it as children
    return <div {...rest} className={finalClassNames}>{children}</div>;
}

export default Panel;