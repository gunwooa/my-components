import React from 'react';
import styled, { css } from 'styled-components';
import ReactLoading from 'react-loading';
// import { darken, lighten } from 'polished';

const Component = styled.div`
  ${({ theme: { colors, fontSize, screenSize }, isLoading }) => {
    return css`
      display: ${isLoading ? `flex` : `none`};
      justify-content: center;
      align-items: center;
      position: sticky;
      top: 0;
      left: 0;
      height: 100%;
      background-color: rgba(153, 153, 153, 0.2);
    `;
  }}
`;

const Loading = ({ isLoading }) => {
  // useEffect(() => {
  //   // console.log(isLoading);
  // }, [isLoading]);

  return (
    <Component isLoading={isLoading}>
      <ReactLoading
        type="spin"
        color="rgb(153, 153, 153)"
        width={50}
        height={50}
      />
    </Component>
  );
};

Loading.defaultProps = {
  isLoading: false,
};

export default Loading;
