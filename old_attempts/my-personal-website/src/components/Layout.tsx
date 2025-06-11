import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps { children: ReactNode; }

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-text-primary">
            <Navbar />
            <motion.main
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="flex-grow w-full max-w-4xl px-4 mx-auto"
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;