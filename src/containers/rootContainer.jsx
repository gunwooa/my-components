import React, { useEffect, useState, useCallback } from 'react';
import HomePage from '../pages/homePage';

const RootContainer = () => {
  useEffect(() => {}, []);

  const childProps = {};

  return (
    <>
      <HomePage {...childProps}></HomePage>
    </>
  );
};

export default RootContainer;
