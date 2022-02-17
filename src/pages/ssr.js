import * as React from 'react';
import { Suspense, lazy } from 'react';

const Comments = lazy(() => import('../components/Comments' /* webpackPrefetch: true */));

const SSRPage = ({ serverData }) => (
  <main>
    <h1>SSR Page with Dogs</h1>
    <img alt="Happy dog" src={serverData.message} />
    <Suspense fallback={<div>Loading...</div>}>
      <Comments />
    </Suspense>
  </main>
);

export default SSRPage;

export async function getServerData() {
   try {
     const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
     if (!res.ok) {
       throw new Error(`Response failed`);
     }
     return {
       props: await res.json(),
     };
   } catch (error) {
     return {
       status: 500,
       headers: {},
       props: {},
     };
   }
}
