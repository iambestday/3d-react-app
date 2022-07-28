import {CubeIcon,AdjustmentsIcon,CameraIcon,ShoppingCartIcon,TrashIcon,MoonIcon,ChatIcon,CalculatorIcon
} from '@heroicons/react/solid'

function Aside() {
  return (
    <div className="absolute top-1/4 left-0 bg-gray-50 shadow-md  z-10 ml-2 rounded h-auto w-auto">
  <div className='group flex flex-row justify-center items-center border-b border-gray-400	 h-10 w-10'> <CubeIcon className="h-7 w-7 text-gray-600 z-30"/>
  <div className="invisible group-hover:visible block absolute bg-gray-800 h-10 w-20 top-0 left-full"></div>
  
  </div>
  <div className='flex justify-center items-center border-b border-gray-400	 h-10 w-10'> <CalculatorIcon className="h-7 w-7 text-gray-600 z-30"/></div>



  <div className='flex justify-center items-center border-b border-gray-400	 h-10 w-10'> <ChatIcon className="h-7 w-7 text-gray-600 z-30"/></div>
  <div className='flex justify-center items-center border-b border-gray-400	 h-10 w-10'> <MoonIcon className="h-7 w-7 text-gray-600 z-30"/></div>
  <div className='flex justify-center items-center border-b border-gray-400	 h-10 w-10'> <TrashIcon className="h-7 w-7 text-gray-600 z-30"/></div>
  <div className='flex justify-center items-center border-b border-gray-400	 h-10 w-10'> <ShoppingCartIcon className="h-7 w-7 text-gray-600 z-30"/></div>
  <div className='flex justify-center items-center border-b border-gray-400	 h-10 w-10'> <CameraIcon className="h-7 w-7 text-gray-600 z-30"/></div>
  <div className='flex justify-center items-center border-b border-gray-400	 h-10 w-10'> <AdjustmentsIcon className="h-7 w-7 text-gray-600 z-30"/></div>

    </div>
  );
}

export default Aside;
