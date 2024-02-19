import React from 'react'
import classNames from 'classnames'

interface inputProps {
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: string
    addedClasses?: string
    helloFrom: string
}

function Input({
    name,
    onChange,
    placeholder = '',
    type = 'text',
    addedClasses,
    helloFrom,
    ...rest
}: inputProps) {
    console.log(helloFrom, ' Input')

    const classes =
        'bg-gray-50 border inline-block w-10/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

    return (
        <input
            name={name}
            type={type}
            className={classNames(classes, addedClasses)}
            placeholder={placeholder}
            required
            onChange={onChange}
            {...rest}
        />
    )
}

export default Input
