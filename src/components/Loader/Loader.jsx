import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#BE9750"
      ariaLabel="watch-loading"
      wrapperStyle={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
