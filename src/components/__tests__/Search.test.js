import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../Body"
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "./mocks/searchFnMock.json"

// global.fetch = jest.fn(() => {
//     //because fetch returns a promise and that promise inturn returns json which inturn returns another promise
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(MOCK_DATA);
//         }
//     })
// });


//because our Fetch api call is in a different custom hook we have to mock the behaviour of that function instead of global mock function.
jest.mock("../../utils/useListRestaurants", () => {
    return jest.fn(() => MOCK_DATA); // Return your mock data directly
});

// Mock the online status hook too
jest.mock("../../utils/useOnlineStatus", () => {
    return jest.fn(() => true); // Always return online
});

it("Should Search Restaurant List for Burger and expect 4 as a result", async () => {
    //this render function renders the component in a browser like thing which is called Jsdom, so this jsdom doesnt have the functionality of fetch() given by our browers so
    //we need to fake/mock our fetch functionality and pass it to this body component.
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );
    

    // await waitFor(()=>{
    //     expect(screen.getByRole("button", {"name":"Search"})).toBeInTheDocument();
    // }, {timeout:3000});

    const searchBtn = screen.getByRole("button", {name : "Search"}, {timeout: 3000});
    
    //to mock typing into the search bar we get the input box by passing a data-testid as a property to the input box and accessing it here by getByTestId 
    const searchInput = screen.getByTestId("searchInput");

    console.log("searchInput", searchInput);
    //now to mimic typing in the input box we will use fireEvent and then for "Onchange" we will do "Change" then we pass whatever we want to change so here we will pass
    //searchInput as we want our searchinput to be changed and type something there. Now to type in the input box we pass the target and then value to the target.
    fireEvent.change(searchInput, {target : { value: "burger"}});

    fireEvent.click(searchBtn);

    //screen should load 4 cards and each restaurantcard is just a div
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(4);
});


it("Should return 1 Restaurant when Top Rate Restaurant button is clicked", async () => {
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );
    

    const topRatedRestaurants = screen.getByRole("button", {name : "Top Rated Restaurants"}, {timeout: 3000});
    
    fireEvent.click(topRatedRestaurants);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(1);
});