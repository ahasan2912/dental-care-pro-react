import { createBrowserRouter } from "react-router-dom";
import MianLayout from "../coponents/MainLayout/MianLayout";
import Home from "../coponents/Home/Home";
import AllTreatments from "../coponents/AllTreatments/AllTreatments";
import MyAppoinments from "../coponents/MyAppoinments/MyAppoinments";
import Profile from "../coponents/Profile/Profile";
import Details from "../coponents/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MianLayout></MianLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async()=> {
                    const servicesRes = await fetch("/service.json");
                    const servicesData = await servicesRes.json();

                    const feedBackRes = await fetch("/happyclients.json");
                    const feedBackData = await feedBackRes.json();

                   return {servicesData, feedBackData};
                }
            },
            {
                path: "/allTreatments",
                element: <AllTreatments></AllTreatments>,
                loader: ()=> fetch('/service.json')
            },
            {
                path: "/myAppoinments",
                element: <MyAppoinments></MyAppoinments>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: async({params})=>{
                    const res = await fetch("/service.json")
                    const data = await res.json();
                    const singleData = data.find(d=>d.id === parseInt(params.id));
                    return singleData
                }
            }
        ]
    }
], {
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
    }
})

export default router;