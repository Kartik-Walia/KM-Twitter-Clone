import {BsBellFill, BsHouseFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import {BiLogOut} from 'react-icons/bi';
import { signOut } from 'next-auth/react';

import useCurrentUser from '@/hooks/useCurrentUser';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser
        }
    ];
    return(
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo/>
                    {items.map((item) => (
                        <SidebarItem key={item.href} href={item.href} label={item.label} icon={item.icon} />
                    ))}

                    {/* Logout logo would be visible only when we would've the current user */}
                    {currentUser && (
                        <SidebarItem onClick={() => signOut()} icon={BiLogOut} label='Logout'/>   // Arrow function which returns the signOut 
                    )}
                    <SidebarTweetButton/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;