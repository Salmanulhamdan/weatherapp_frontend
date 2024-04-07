import React from 'react';

function WeatherApp() {
    return (
        <div>
        <section className="bg-blue-500 text-white">
            <div className="container mx-auto py-4">
                <h1 className="text-4xl font-bold">
                    What's the weather like?
                </h1>
            </div>
        </section>
        <section className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <form className="w-full max-w-sm">
                        <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="City Name" />
                            <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                Add City
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full max-w-sm">
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="flex items-center">
                                <img className="h-12 w-12 mr-4" src="http://openweathermap.org/img/w/10d.png" alt="Weather Icon" />
                                <div>
                                    <p className="text-lg font-bold">Las Vegas</p>
                                    <p className="text-sm">29° F</p>
                                    <p className="text-sm">thunderstorm with heavy rain</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="py-4 text-center">
            © 2024 Weather App
        </footer>
    </div>
);
}
       

export default WeatherApp;
