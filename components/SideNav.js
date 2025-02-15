'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { Home, Folder, ClipboardList, BarChart, User, LogOut, Settings, Calendar, MonitorCog } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import placeholderAvatar from '../public/placeholder-avatar.png';
import nextlogo from '../public/next_noetics.png';
import logomin from '../public/next_noetics_ico.png';

const navItems = [
  { name: 'Overview', href: '/', icon: Home },
  { name: 'File Uploads', href: '/', icon: Folder },
  { name: 'Tasks', href: '/', icon: ClipboardList },
  { name: 'CMS', href: '/', icon: MonitorCog },
  { name: 'Calendar', href: '/', icon: Calendar },
  { name: 'Analytics', href: '/', icon: BarChart },
  { name: 'Profile', href: '/', icon: User },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentPath = usePathname();
  const profile = { name: 'John Doe', profile_image: placeholderAvatar };

  useEffect(() => {
    if (currentPath === '/') {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [currentPath]);

  useEffect(() => {
    setLoading(isPending);
  }, [isPending]);

  const handleLogout = async () => {
    // Simulate logout
    startTransition(() => {
      router.push('/login');
    });
  };

  return (
    <aside className={`bg-gray-900 dark:bg-gray-900 pb-28 text-white transition-all duration-300 ${isCollapsed ? 'w-14' : 'w-44'} overflow-hidden relative`}>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-700 animate-pulse"></div>
      )}
      <div className={`flex items-center ${isCollapsed ? 'justify-center pt-2 pb-4' : 'justify-start  py-4 pr-4'} gap-1 w-full pl-1`}>
        <Image
          src={isCollapsed ? logomin : nextlogo}
          alt="Noetics.io Logo"
          width={isCollapsed ? 40 : 140} // Adjust the width as needed
          height={isCollapsed ? 40 : 100} // Adjust the height as needed
          className="rounded-full "
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className={`text-xl font-bold transition-all duration-300 ${isCollapsed ? 'hidden' : 'block  pl-4'}`}>
          Dashboard
        </h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`text-white font-extrabold flex justify-center w-full text-3xl focus:outline-none underline`}
          style={{ zIndex: 10 }}
        >
          {isCollapsed ? '>' : '<'}
        </button>
      </div>
      <div className="flex flex-col justify-start gap-1 items-start p-4">
        <div className={` ${isCollapsed ? 'hidden' : 'flex flex-nowrap justify-center w-full gap-1'}`}>
          <p className="text-sm 2xl:text-base font-semibold">Welcome</p>
          <p className="text-sm 2xl:text-base font-bold">{profile.name}</p>
        </div>
        <span className=" inline-flex justify-center w-full items-center">
          {/* <DarkModeToggle /> */}
        </span>
      </div>
      <nav className="flex flex-col justify-between h-full pb-8  text-xs xl:text-base">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2  text-xs 2xl:text-base">
              <Link href={item.href} passHref className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start gap-2'} p-2 font-medium hover:bg-gray-700 rounded ${currentPath === item.href ? 'active' : ''}`}>
                <item.icon className="mr-2" />
                <span className={`${isCollapsed ? 'hidden' : 'block'}`}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="xl:mb-12 text-xs xl:text-base">
          <ul className={`flex flex-col gap-1 ${isCollapsed ? 'items-center' : 'items-start 2xl:ml-2'}`}>
            <li className="text-xs 2xl:text-base">
              <Link href="/dashboard/settings" passHref className={`flex items-center${isCollapsed ? 'justify-center' : 'justify-start gap-2'}  p-2 font-medium hover:bg-gray-700 rounded ${currentPath === '/dashboard/settings' ? 'active' : ''}`}>
                <Settings className="mr-2 " />
                <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Settings</span>
              </Link>
            </li>
            <li className="mb-2 text-xs 2xl:text-base">
              <button onClick={handleLogout} className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start gap-2'}  p-2 font-medium hover:bg-gray-700 rounded`}>
                <LogOut className="mr-2" />
                <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;