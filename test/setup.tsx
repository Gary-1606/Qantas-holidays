import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";

/**
 *
 * Convenience function recommended by the library to provide user events along with render return
 *
 * https://testing-library.com/docs/user-event/intro
 *
 * @returns
 */
function setup(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...render(jsx),
  };
}

export default setup;
