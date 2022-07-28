import { MinusSmIcon,PlusIcon,XCircleIcon} from '@heroicons/react/solid'

function Footer() {
  return (
    <div className='absolute bottom-0 left-0 flex flex-col ml-2 mb-3 z-10'>
        <div className='flex justify-center items-center bg-gray-50 shadow-md rounded h-10 w-10 mb-2 '> <XCircleIcon className="h-7 w-7 text-gray-600 z-30"/></div>
      <div className='flex justify-center items-center bg-gray-50 shadow-md rounded h-10 w-10 mb-2'> <PlusIcon className="h-7 w-7 text-gray-600 z-30"/></div>
      <div className='flex justify-center items-center bg-gray-50 shadow-md rounded h-10 w-10'> <MinusSmIcon className="h-7 w-7 text-gray-600 z-30"/></div>

    </div>  )
}

export default Footer