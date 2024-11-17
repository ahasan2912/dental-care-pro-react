import banner from '../../assets/dentist-doctor.avif'
const Banner = () => {
    return (
        <div className="hero bg-base-200 my-16 rounded-lg">
            <div className="hero-content items-start flex-col lg:flex-row-reverse p-10">
                <img
                    src={banner}
                    className=" sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Teeth Wizard Dentist</h1>
                    <p className="py-6">
                    A dentist is a healthcare professional specializing in the diagnosis, prevention, and treatment of oral health issues, including teeth, gums, and mouth. They provide services like fillings, extractions, cleanings, and cosmetic procedures to maintain and enhance dental health.
                    </p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;