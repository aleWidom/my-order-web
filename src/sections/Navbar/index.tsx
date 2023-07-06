"use client"
import { usePathname } from 'next/navigation'
import { Requireds } from '@/components/atoms';
import { NavbarView } from './NavbarView';

export const Navbar = () => {

	const pathname  = usePathname()

	return (
		<NavbarView>
		  {pathname === '/' && <Requireds />} 
		</NavbarView>
	)
	
};