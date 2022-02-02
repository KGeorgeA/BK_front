import React from 'react';
import api from '../../api/axios';

function PrivateTest() {
  const f = async () => {
    await api.get('/api/private')
  }
  f();
  return <div></div>;
}

export default PrivateTest;
