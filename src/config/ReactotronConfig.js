import Reactotron from 'reactotron-react-js';


if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure();
  tron.connect().clear();
  // eslint-disable-next-line no-console
  // console.log() = tron.log();
}
