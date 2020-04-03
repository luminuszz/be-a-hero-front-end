/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Reactotron from 'reactotron-react-js';

declare global {
  interface Console {
    tron: any;
  }
}
const value = true;
// eslint-disable-next-line no-undef
if (value) {
  const tron = Reactotron
    .configure()

    .connect();

  tron.clear!();

  console.tron = tron;
}
