import React from 'react';

const ErrorPage = () => {
    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <>
            <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 mt-24">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="text-8xl md:text-9xl font-bold text-red-500 mb-4">
                            404
                        </h1>

                        {/* Error Message */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Page Not Found
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Oops! The page you're looking for doesn't exist. It might have been moved,
                            deleted, or you entered the wrong URL.
                        </p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <button
                            onClick={handleGoHome}
                            className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ErrorPage;