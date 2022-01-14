import { render, screen } from "@testing-library/react";
import TestingTodoFooter from '../testingTodoFooter'

test("should render the correct amount of incomplete test", () => {
    render(<TestingTodoFooter incompleTasks={2}/>)
    const paragraphElement = screen.getByText(/tasks left/i)
    expect(paragraphElement).toBeInTheDocument()
}) 