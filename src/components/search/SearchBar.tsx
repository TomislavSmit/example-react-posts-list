import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

interface SearchBarProps {
    onSubmit: (term: string) => void
    helloFrom: string
}

function SearchBar({ onSubmit, helloFrom }: SearchBarProps) {
    const [term, setTerm] = useState<string>('')
    const [submittedTerm, setSubmittedTerm] = useState('')

    console.log(helloFrom, ' SearchBar')

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        setSubmittedTerm(term)
        onSubmit(term)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='p-6 bg-white border flex justify-between border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full'>
                <Input
                    name='term'
                    placeholder='Search...'
                    onChange={handleChange}
                    addedClasses='w-10/12 mr-4'
                    helloFrom={helloFrom}
                />
                <Button
                    type='submit'
                    onClick={handleSubmit}
                    addedClasses='w-3/12'
                    helloFrom={helloFrom}
                >
                    Search
                </Button>
            </div>

            {submittedTerm.length ? (
                <p className='m-6'>
                    Showing resuls for: <strong>{submittedTerm}</strong>
                </p>
            ) : null}
        </form>
    )
}

export default SearchBar
