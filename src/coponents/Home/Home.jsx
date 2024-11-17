import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    const services = useLoaderData();
    const {servicesData, feedBackData} = services;
    /* const [serviceData, setServiceData] = useState(services.slice(0,4))
    const handleallShow = (show)=> {
        if(show==='show-more'){
            setServiceData(services);
        }
    } */
    return (
        <div >
            <Banner></Banner>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden'>
                {
                    servicesData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <NavLink to="/allTreatments" className='btn badge-outline bg-primary text-white my-6'>Show More</NavLink>
            {/* <NavLink onClick={()=> handleallShow('show-more')} className='btn badge-outline bg-primary text-white my-6'>Show More</NavLink> */}

            <FeedBack feedBackData={feedBackData}></FeedBack>

        </div>
    );
};

export default Home;
