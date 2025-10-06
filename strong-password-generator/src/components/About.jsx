import "./About.css";

function About() {
    return (
        <section className="flex flex-col items-center w-[80vw] md:w-max bg-[#fff1e6] dark:bg-[#0a1338] my-8 py-12 px-10 lg:px-20 rounded-lg drop-shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold flex flex-wrap text-center">What makes a password strong?</h1>

            <div className="flex  flex-col lg:flex-row mt-12 gap-6 lg:gap-8">
                <div className="max-w-64 xl:max-w-72 bg-[#fff] hover:bg-[#1848a1] hover:text-[#fff] dark:bg-gray-800 dark:hover:bg-[#1848a1] px-6 lg:px-8 py-4 flex items-center justify-center flex-col gap-2 md:gap-4 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out">
                    <i class="fa-solid fa-key text-3xl lg:text-4xl"></i>
                    <h1 className="text-lg lg:text-xl font-bold">Long</h1>
                    <p className="text-sm lg:text-base text-center">While length is crucial, combining it with complexity (uppercase and lowercase, numbers, and symbols) further strengthens your password.</p>
                </div>

                <div className="max-w-64 xl:max-w-72 bg-[#fff] hover:bg-[#1848a1] hover:text-[#fff] dark:bg-gray-800 dark:hover:bg-[#1848a1] px-6 lg:px-8 py-4 flex items-center justify-center flex-col gap-2 md:gap-4 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out">
                    <i class="fa-solid fa-lock text-3xl lg:text-4xl"></i>
                    <h1 className="text-lg lg:text-xl font-bold">Complex</h1>
                    <p className="text-sm lg:text-base text-center">Mixing characters makes patterns unpredictable, They add layers of difficulty, protecting your accounts.</p>
                </div>

                <div className="max-w-64 xl:max-w-72 bg-[#fff] hover:bg-[#1848a1] hover:text-[#fff] dark:bg-gray-800 dark:hover:bg-[#1848a1] px-6 lg:px-8 py-4 flex items-center justify-center flex-col gap-2 md:gap-4 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out">
                    <i class="fa-solid fa-shield-halved text-3xl lg:text-4xl"></i>
                    <h1 className="text-lg lg:text-xl font-bold">Unique</h1>
                    <p className="text-sm lg:text-base text-center">A strong password should be unique to each account to reduce vulnerability in the event of a hack.</p>
                </div>
            </div>
        </section>
    );
}

export default About;