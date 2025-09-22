import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom';
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "./mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"

jest.mock("../../utils/useRestaurantMenu", () => {
    return jest.fn(() => MOCK_DATA);
});


it("Should Load Restaurant Menu Component", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    );
    const accordionHeader = screen.getByText("Recommended(19)");
    fireEvent.click(accordionHeader);

    const items = screen.getAllByTestId("foodItems");
    expect(items.length).toBe(19);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);
    expect(screen.getByText('Cart - 1 items')).toBeInTheDocument();
});


it("Should Clear Cart on clicking Clear Cart Button", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    );
    
    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
    const items = screen.getAllByTestId("foodItems");
    expect(items.length).toBe(0);
    expect(screen.getByText("Please Add Items to cart")).toBeInTheDocument();
});