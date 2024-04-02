import { MainScreen } from '../pages/main-screen';

type AppScreenProps = {
  offerCount: number;
}

export function App({offerCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offerCount={offerCount} />
  );
}
