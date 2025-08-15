import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import AboutUs from './components/AboutUs'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

//creating routing configuration
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />
    },
    {
        path:"/about",
        element: <AboutUs />,
    },
    {
        path:"/contact",
        element: <Contact />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//we provide the routing configuration to the ROuterProvider component from react router dom which will start using the routing configuration on the page for us.
root.render(<RouterProvider router={appRouter} />); 