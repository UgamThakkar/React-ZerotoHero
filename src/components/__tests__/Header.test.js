import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


it("Should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});
    // const loginButton = screen.getByText("login");

    expect(loginButton).toBeInTheDocument();
});


it("Should load header component with Cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const CartItems = screen.getByText("Cart - 0 items");
    
    //writing a regex to match the text Cart on the header component is also another way
    const CartItems = screen.getByText(/Cart/);

    expect(CartItems).toBeInTheDocument();
});


it("Should Change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});
    // const loginButton = screen.getByText("login");

    //if we want to simulate any action in the code then we use fireEvent and then there are multiple functions associated with it for example click
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
});
