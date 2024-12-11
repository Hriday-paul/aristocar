import Link from 'next/link';
import React from 'react';
const Notfound = () => {
    return (
        <section className="flex items-center min-h-screen p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-satoshi font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                    <p className="mt-4 mb-8 font-satoshi text-primary">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link href="/" className="px-8 py-3 font-poppins font-semibold rounded bg-primary hover:bg-opacity-85 duration-200 text-secondary">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};
export default Notfound;