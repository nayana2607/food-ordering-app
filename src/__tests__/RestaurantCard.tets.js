import { render, screen } from "@testing-library/react";
import RestaurantCard, { cardwithLabel } from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMocks.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render Restro compo with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText(
    "Foodies - The Food Court ( Thali, Combo &More)"
  );

  expect(name).toBeInTheDocument();
});

it("should render Restro compo with veg label", () => {
  const RescardwithLabel = cardwithLabel(RestaurantCard);
  render(
    <BrowserRouter>
      <RescardwithLabel resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const label = screen.getByText("🟢");

  expect(label).toBeInTheDocument();
});
