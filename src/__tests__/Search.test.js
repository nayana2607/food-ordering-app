import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import SWIGGY_DATA from "../mocks/swiggydata.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(SWIGGY_DATA);
    },
  });
});
it("should show up the searched items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  let resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Burger" } });
  fireEvent.click(searchBtn);
  resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(2);
});

it("should list top rated restaurant on click of top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  let resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(20);
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restro",
  });
  fireEvent.click(topRatedButton);
  resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(3);
});

it("should show list of veg restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  let resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(20);
  const topRatedButton = screen.getByRole("button", {
    name: "Veg only",
  });
  fireEvent.click(topRatedButton);
  resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(11);
});
