import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto py-8 px-4">
                <div className="container mx-auto py-8 px-4 mt-16"> {/* Add padding-top to create space */}
                    <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>

                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
                    <p className="text-lg mb-6">
                        These terms and conditions outline the rules and regulations for the use of our Recipe Finder App.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Interpretation and Definitions</h2>
                    <p className="text-lg mb-6">
                        The following terminology applies to these Terms and Conditions:
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property Rights</h2>
                    <p className="text-lg mb-6">
                        Other sections of terms and conditions...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;