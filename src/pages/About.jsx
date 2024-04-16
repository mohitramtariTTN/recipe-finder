import React from 'react';

const About = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto py-8 px-4">
            <div className="container mx-auto py-8 px-4 mt-16"> {/* Add padding-top to create space */}
                    <h1 className="text-4xl font-bold mb-4">About Our Recipe Finder App</h1>
                    <p className="text-lg mb-6">
                        Welcome to our Recipe Finder App! We're excited to help you discover delicious recipes from around the world.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Features</h2>
                    <ul className="list-disc ml-8">
                        <li>Explore thousands of recipes from various cuisines.</li>
                        <li>Personalize your experience with customized recommendations.</li>
                        <li>Save your favorite recipes and access them anytime, anywhere.</li>
                        <li>Create shopping lists for easy grocery shopping.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
                    <p className="text-lg mb-6">
                        At our Recipe Finder App, our mission is to inspire and empower people to cook delicious meals at home by providing easy access to a wide range of recipes.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                    <p className="text-lg mb-6">
                        Have questions or feedback? We'd love to hear from you! Contact our support team at <a href="mailto:support@example.com" className="underline">support@example.com</a>.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4">Legal Information</h2>
                    <ul className="list-disc ml-8">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
