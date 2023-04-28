import React from 'react'
import Image from 'next/image'
import { SearchIcon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '@/slices/basketSlice'

const Header = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const items=useSelector(selectItems)
  return (
    <header>
        <div className='flex bg-blue-400 p-2 flex-grow sm:flex-grow-0 py-2'>
            <div className='m-2 flex item-center flex-grow sm:flex-grow-0'>
                <Image
                onClick={()=>router.push('/')}
                src='https://purepng.com/public/uploads/large/purepng.com-pizzafood-pizza-941524644327twewe.png'
                width={60}
                height={20}
                alt='imagge'
                style={{objectFit:"cover"}}
                className='cursor-pointer'
                />
            </div>
            <div className='hidden sm:flex flex-grow h-fit items-center bg-blue-800 rounded-md hover:bg-yellow-600'>
                <input type='text' className='p-2 m-0 w-6 rounded-md flex-grow flex-shrink cursor-pointer '/>
                <SearchIcon className='h-10 p-2' />
            </div>
            <div className='text-white flex items-center text-xs space-x-6 mx-6'>
              <div className='link'>
                <p onClick={session?signOut:signIn}className='font-extrabold md:text-xs'>
                  {session?`Sign Out`: `Sign In`}
                </p>
                {session?`Hello, ${session.user.name}`: `Account`}
                <p></p>
              </div>
              <div className='link'>
              <p>Returns</p>
                <p className='font-extrabold md:text-xs'>Orders</p>
              </div>
              </div>
        </div>
    
    </header>
  )
}

export default Header