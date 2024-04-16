import SummaryForm from "../SummaryForm";
import { render, screen, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("checkbox is unckhecked by default", () => {
  const { container } = render(<SummaryForm />);
  logRoles(container);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("checking checkbox enables button", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });
  expect(button).toBeDisabled();
  await user.click(checkbox);
  expect(button).toBeEnabled();
  await user.click(checkbox);
  expect(button).toBeDisabled();
});

test("Popover shows correctly", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const nullPopOver = screen.queryByRole("tooltip", {
    name: /no ice cream will be actually delivered/i,
  });
  expect(nullPopOver).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popOver = screen.getByRole("tooltip", {
    name: /no ice cream will be actually delivered/i,
  });

  //   const popover = screen.getByText(/no ice cream will be actually delivered/i);
  expect(popOver).toBeInTheDocument();

  await user.unhover(termsAndConditions);
  const disPopOver = screen.queryByRole("tooltip", {
    name: /no ice cream will be actually delivered/i,
  });
  expect(disPopOver).not.toBeInTheDocument();
});
