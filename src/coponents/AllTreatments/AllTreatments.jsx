import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatments = () => {
    const services = useLoaderData();
    return (
        <div className="mt-10">
            <div className='grid grid-cols-4 gap-6'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllTreatments;