import { css } from '@emotion/react';
import { SyncLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  return (
    <div className="spinner">
      <SyncLoader css={override} color={"#36D7B7"} size={10} />
    </div>
  );
};

export default Spinner;
