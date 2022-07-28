import { IdentificationIcon } from "@heroicons/react/solid";

function About() {
  return (
    <div className="absolute  bottom-0 right-0 flex flex-col items-end mr-2 mb-3 z-10">
      <div className="flex row">
        <p>Made by iambestday</p>
        <IdentificationIcon className="h-7 w-7 ml-2 text-gray-600 z-30" />
      </div>
    </div>
  );
}

export default About;
