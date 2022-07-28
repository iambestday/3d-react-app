import logo from '../Asset/cube.svg'

function Logo() {
  return (
    <div className="absolute top-0 right-0 transition duration-300 ease-in-out  hover:rotate-180 h-10 w-10 z-20 m-2">
      <img src={logo} alt="" />
      </div>
  )
}

export default Logo