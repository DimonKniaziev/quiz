import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
    return(
        <header className="bg-blue-600 p-4 shadow-md">
            <nav className="container flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-white text-2xl font-bold">Quizes</h1>
                </Link>
                <div className="flex space-x-4 justify-around w-full">
                    <Link href="/add-quiz">
                        <span className="text-white hover:text-gray-200">Add Quiz</span>
                    </Link>
                    <Link href="/delete-quiz">
                        <span className="text-white hover:text-gray-200">Delete Quiz</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;