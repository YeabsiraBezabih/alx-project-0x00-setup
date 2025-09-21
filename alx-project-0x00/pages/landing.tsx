import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <Button title="Small Rounded" styles="px-2 py-1 text-sm rounded-sm" onClick={() => alert('Small Rounded Button Clicked')} />
      <Button title="Medium Rounded" styles="px-3 py-1.5 text-base rounded-md" onClick={() => alert('Medium Rounded Button Clicked')} />
      <Button title="Large Rounded" styles="px-4 py-2 text-lg rounded-full" onClick={() => alert('Large Rounded Button Clicked')} />
      <Button title="Medium Rounded LG" styles="px-3 py-1.5 text-base rounded-lg" onClick={() => alert('Medium Rounded LG Button Clicked')} />
      <Button title="Large Rounded Full" styles="px-4 py-2 text-lg rounded-full" onClick={() => alert('Large Rounded Full Button Clicked')} />

     </div>
  )
}
export default Landing;