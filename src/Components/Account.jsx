import {UserCircleIcon} from '@heroicons/react/solid'


function Account() {
  return (
    <div className='absolute top-0 left-0 p-2 z-10'>
     <div className='flex justify-center items-center bg-gray-50 shadow-md rounded h-10 w-10'> <UserCircleIcon className=" h-7 w-7 text-gray-600 z-30 hover:text-gray-900 hover:scale-110"/></div>
    </div>
  )
}

export default Account
