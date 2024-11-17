import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { id, treatment, image, description, cost } = service;
    return (
        <div className="card bg-base-100 border p-2 rounded-lg">
            <figure>
                <img className="w-full h-[200px] object-cover"
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary text-white">${cost}</div>
                </h2>
                <p title={description}>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-start">
                    <NavLink to={`/details/${id}`}>
                        <button className=" badge badge-outline bg-primary text-white font-bold p-4">Checkout More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;