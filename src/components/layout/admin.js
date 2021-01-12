import React from 'react';
import {FaCog} from 'react-icons/fa';
import DropDownBtn from '../share/DropDownBtn';

export default function Layout(props) {
  const userActions = [
    {
      name: 'Settings',
      handler: '/settings'
    }
  ]

  return (
    <div>
      <header className="bg-blue-200 p-4 flex flex-row-reverse">
        <div>
          <DropDownBtn
            target={<FaCog className="cursor-pointer text-gray-600"/>}
            actions={userActions}
          />
          <DropDownBtn
            target={"Amazing"}
            actions={userActions}
          />
        </div>
      </header>

      <main>
        {props.children}
      </main>
    </div>
  )
}