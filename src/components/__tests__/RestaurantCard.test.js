import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "./mocks/resCardMock.json"
import '@testing-library/jest-dom';

it("Should Render restaurant Card component with the props", ()=>{
    render(<RestaurantCard resdata={MOCK_DATA}/>)


    const restaurantName = screen.getByText("Pizza Hut");

    expect(restaurantName).toBeInTheDocument();

})