import Button from './Button';
import swizzLogo from '../../assets/images/swizzaround-logo.png';
import { FiMenu } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useScreenSize } from '../../context/ScreenSizeContext';

function Header() {
  const [isMenuShowing, setMenuShowing] = useState(false);
  const { screenSize, setSize } = useScreenSize();

  useEffect(() => {
    const handleBreakpoint = () => {
      const breakpoint = window.innerWidth;
      setSize(breakpoint);
    };

    window.addEventListener('resize', handleBreakpoint);
    handleBreakpoint();

    return () => window.removeEventListener('resize', handleBreakpoint);
  }, [setSize]);

  return (
    <div className="header flex flex-col p-2 lg:flex-row lg:items-center lg:justify-around">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={swizzLogo} className="w-10" alt="SwizzAround Logo" />
          <p className="font-semibold text-sm">SwizzAround</p>
        </div>
        <FiMenu
          size={30}
          className={`${screenSize >= 1024 ? 'hidden' : 'block'} my-4 self-end`}
          onClick={() => setMenuShowing(!isMenuShowing)}
        />
      </div>

      <div className={` ${isMenuShowing == true ? 'block' : 'hidden'} lg:flex`}>
        <ul
          className={`flex flex-col gap-4 my-4 animate-fade-left lg:flex-row`}
        >
          <li className="text-xl hover:border-b-2 hover:border-b-blue-500 ease-linear duration-100">
            <a href="">Home</a>
          </li>
          <li className="text-xl hover:border-b-2 hover:border-b-blue-500 ease-linear duration-100">
            <a href="">About</a>
          </li>
          <li className="text-xl hover:border-b-2 hover:border-b-blue-500 ease-linear duration-100">
            <a href="">Destinations</a>
          </li>
          <li className="text-xl hover:border-b-2 hover:border-b-blue-500 ease-linear duration-100">
            <a href="">Tours</a>
          </li>
          <li className="text-xl hover:border-b-2 hover:border-b-blue-500 ease-linear duration-100">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
