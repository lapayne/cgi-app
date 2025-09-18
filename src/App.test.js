import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

/**

    @file This file contains smoke and integration tests for the App component.

    It uses the React Testing Library to simulate user interactions and

    assert on the rendered output.
    */

describe("App Component Tests", () => {
  /**

    Smoke Test

    A smoke test is a basic sanity check to ensure the application renders

    without crashing. It's a quick way to confirm that the most critical

    functionality is working.
    */
  test("renders without crashing", () => {
    // Renders the App component to a virtual DOM environment.
    render(<App />);
    // Asserts that the "React App with Tests" heading is present in the document.
    expect(screen.getByText(/React App with Tests/i)).toBeInTheDocument();
  });

  /**

    Integration Test

    An integration test verifies that different parts of the application

    work together correctly. Here, we test the interaction between the button

    and the counter display.
    */
  test("increments the count when the button is clicked", () => {
    // Renders the App component.
    render(<App />);

    // Finds the button by its test ID.
    const incrementButton = screen.getByTestId("increment-button");
    // Finds the display for the count by its test ID.
    const countDisplay = screen.getByTestId("count-display");

    // Initial state assertion: The count should start at 0.
    expect(countDisplay).toHaveTextContent("0");

    // Simulate a click on the increment button.
    fireEvent.click(incrementButton);

    // Assertion after interaction: The count should now be 1.
    expect(countDisplay).toHaveTextContent("1");

    // Simulate another click.
    fireEvent.click(incrementButton);

    // Final assertion: The count should now be 2.
    expect(countDisplay).toHaveTextContent("2");
  });
});
