import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/menuList.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load RestrauntMenu component and update cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("New Launches (2)");
  fireEvent.click(accordionHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(2);
  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButtons[0]);
  const cartText = screen.getByText("🛒 Cart (1 items)");
  expect(cartText).toBeInTheDocument();
  fireEvent.click(addButtons[1]);
  expect(screen.getByText("🛒 Cart (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(4)
});
