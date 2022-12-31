import { ErrorMsg } from './Error.styled';

export const Error = ({ textError }) => {
  return (
    <ErrorMsg>
      Oops! Something's wrong:
      <br />❌ {textError}
      <br />
      Please, refresh this page or try again later
    </ErrorMsg>
  );
};
