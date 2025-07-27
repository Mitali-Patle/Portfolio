import {
  BiHome,
  BiBriefcase,
  BiCode,
  BiMailSend,
  BiRightArrowAlt,
} from "react-icons/bi";

const navItems = [
  { id: "home", label: "Home", icon: <BiHome /> },
  { id: "education", label: "Education", icon: <BiBriefcase /> },
  { id: "projects", label: "Projects", icon: <BiCode /> },
  { id: "contact", label: "Contact", icon: <BiMailSend /> },
];

const HeaderLeft = () => {
  return (
    <div className="hidden md:block w-1/4 h-screen sticky top-0">
      {/* Sidebar with gradient background */}
      <div className="h-full flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-950 to-gray-900 text-white p-6 shadow-2xl">
        <ul className="flex flex-col gap-10 w-full max-w-xs">
          {navItems.map(({ id, label, icon }) => (
            <li
              key={id}
              className="group flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-x-2"
            >
              <div className="text-2xl group-hover:text-yellow-400 transition duration-300">
                {icon}
              </div>
              <a
                href={`#${id}`}
                className="text-xl capitalize font-semibold group-hover:text-yellow-400 transition duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-gradient-to-r from-blue-900 to-teal-700 p-4 text-white md:hidden shadow-md">
        {navItems.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex flex-col items-center text-xs"
          >
            <div className="text-xl">{icon}</div>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderLeft;
