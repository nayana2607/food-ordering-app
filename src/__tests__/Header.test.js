import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

it("should load header como with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("should render header compo with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("🛒 Cart (0 items)"); //regex can be passed in here
  expect(cartItems).toBeInTheDocument();
});

it("should change the lalel of login button onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button", { name: "Login" });
  // fireEvent.click(loginButton);
  // const logoutButton = screen.getByRole("button", { name: "Logout" });
  // expect(logoutButton).toBeInTheDocument();
});
