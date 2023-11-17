"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

export default async function Index() {

  const router = useRouter();

  React.useEffect(() => {
    // Redirect to the /home route
    router.push('/home');
  }, []);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  
  return <div>Redirecting...</div>;
  
}
