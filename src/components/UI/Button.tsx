import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface inputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    onClick: (e: React.SyntheticEvent) => void
    type?: 'button' | 'submit' | 'reset' | undefined
    addedClasses?: string
    helloFrom: string
}

function Button({
    children,
    onClick,
    type = 'button',
    addedClasses,
    helloFrom,
    ...rest
}: inputProps) {
    console.log(helloFrom, ' Button')

    const classes =
        'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'

    return (
        <button
            type={type}
            className={classNames(classes, addedClasses)}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
