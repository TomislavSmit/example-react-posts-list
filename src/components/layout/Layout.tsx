import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface LayoutProps {
    children: ReactNode
    helloFrom: string
}

const Layout = ({ children, helloFrom }: LayoutProps) => {
    console.log(helloFrom, ' Layout')

    return (
        <div className='min-h-screen max-w-screen-md mx-12'>
            <nav className='m-auto flex flex-wrap items-center mx-auto p-4'>
                <NavLink to='/' className='mr-2'>
                    Home page
                </NavLink>
                <NavLink to='/posts' className='mx-2'>
                    Posts page
                </NavLink>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout
