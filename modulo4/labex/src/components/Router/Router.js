import React from "react";
import Home from '../../Pages/Home/Home'
import AdminHome from '../../Pages/Private/AdminHome/AdminHome'
import CreateTrip from '../../Pages/Private/CreateTrip/CreateTrip'
import Login from '../../Pages/Public/Login/Login'
import TripDetails from '../../Pages/Private/TripDetails/TripDetails'
import ApplicationForm from '../../Pages/Public/ApplicationForm/ApplicationForm'
import ListTrip from '../../Pages/Public/ListTrip/ListTrip'
import { BrowserRouter, Routes, Route} from "react-router-dom";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Home />} />

                    <Route path="/ListTrip" element = {<ListTrip />} /> 
                    <Route path="/ApplicationForm/:name/:id" element = {<ApplicationForm />} />
                    <Route path="/Login" element = {<Login />} />
                    <Route path="/AdiminHome" element = {<AdminHome />} />
                    <Route path="/CreateTrip" element = {<CreateTrip />} />
                    <Route path="/TripDetails/:id" element = {<TripDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router