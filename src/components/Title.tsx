'use client';

import React, { useEffect, useState } from 'react';

type TitleProps = {
  apiRouteName: string;
};

const Title: React.FC<TitleProps> = ({ apiRouteName }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const callingBackendExample = async (apiRouteName: string) => {
      const response = await fetch(`/api/${apiRouteName}`);
      const jsonData = await response.json();
      setMessage(jsonData.message);
    };

    callingBackendExample(apiRouteName);

    return;
  }, [apiRouteName]);

  return (
    <div>
      <div>{message}</div>
    </div>
  );
};

export default Title;
