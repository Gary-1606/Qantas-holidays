// These are imported in every test
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// polyfill TextEncoder & TextDecoder for jest environment
if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
  global.TextEncoder = TextEncoder;
  // @ts-ignore polyfill TextDecoder for jest environment
  global.TextDecoder = TextDecoder;
}

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
