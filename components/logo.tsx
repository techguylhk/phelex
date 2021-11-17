import type { NextPage } from 'next';
const Logo: NextPage = () => {
  return (
    <div className='flex items-center justify-center bg-white rounded-full shadow-md h-14 w-14 p-3'>
      <div className='grid grid-cols-4 grid-rows-4 gap-0.5 w-full h-full'>
        <div className='col-start-2 rounded-full bg-blue-400 rounded-br-none'></div>
        <div className='col-start-1 row-start-2 col-span-2 rounded-full bg-blue-400'></div>

        <div className='col-start-3 row-span-2 rounded-full bg-green-400'></div>
        <div className='col-start-4 row-start-2 rounded-full bg-green-400 rounded-bl-none'></div>

        <div className='col-start-1 row-start-3 rounded-full bg-red-600 rounded-tr-none'></div>
        <div className='row-span-2 rounded-full bg-red-600'></div>

        <div className='col-span-2 rounded-full bg-yellow-500'></div>
        <div className='col-start-3 rounded-full bg-yellow-500 rounded-tl-none'></div>
      </div>
    </div>
  );
};
export default Logo;
