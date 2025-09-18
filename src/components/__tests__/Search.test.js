import { render, screen } from "@testing-library/react"
import Body from "../Body"
import '@testing-library/jest-dom';


global.fetch = jest.fn(()=>{
    //because fetch returns a promise and that promise inturn returns json which inturn returns another promise
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(data);
        }
    })
});


it("Should Render body component with Search button/functionality", ()=>{
    //this render function renders the component in a browser like thing which is called Jsdom, so this jsdom doesnt have the functionality of fetch() given by our browers so
    //we need to fake/mock our fetch functionality and pass it to this body component.
    render(<Body />)
})