import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import AboutUs from './components/AboutUs'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
};

const Grocery = lazy(() => import("./components/Grocery"));

//creating routing configuration
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>)
            }

        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

//we provide the routing configuration to the ROuterProvider component from react router dom which will start using the routing configuration on the page for us.
root.render(<RouterProvider router={appRouter} />); 