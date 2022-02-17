import * as React from 'react';
import { fetchProfileData } from '../fakeApi';

export default function Comments() {
  const resource = fetchProfileData();
  const user = resource.user.read();

  return <div>Comments {user.name}</div>;
}
