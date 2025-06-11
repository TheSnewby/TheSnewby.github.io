import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { ReactNode } from 'react';

interface NavLinkProps { href: string; children: ReactNode; }

const NavLink = ({ href, children }: NavLinkProps) => (
    // Add legacyBehavior prop here
    <Link href={href} legacyBehavior>
        <a className="px-4 py-2 rounded-md text-text-secondary hover:text-text-accent hover:bg-primary-focus transition-all duration-200">
            {children}
        </a>
    </Link>
);

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full max-w-4xl p-4 mx-auto">
            <div className="flex items-center space-x-2 md:space-x-4">
                <NavLink href="/">About</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/resume">Resume</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </div>
            <ThemeSwitcher />
        </nav>
    );
};

export default Navbar;