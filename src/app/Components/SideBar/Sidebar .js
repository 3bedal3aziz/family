// Sidebar.js

import React, { useState } from 'react';
import Link from 'next/link';
import { FaApple, FaHome, FaUsers, FaComment, FaQuestion, FaCog, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { MdFamilyRestroom } from "react-icons/md";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FcGallery } from "react-icons/fc";
import { BsCalendar2EventFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { GiFamilyTree } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";

import { useAppContext } from '../../context/AppContext';
import Image from 'next/image';
import logo from '../../../../public/assets/logo.png';
import sidestyle from '../SideBar/SideBar.css'
const Sidebar = () => {
  const { sidebarOpen } = useAppContext();
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className={`navigation ${sidebarOpen ? 'active' : ''}`}>
      <ul>
        <li className={ activeLink === 0 ? 'hovered' : '' } onClick={() => handleLinkClick(0)} >
          <Link href="#">
           
          
            
            <Image src={logo} width={`150px`} height={`150px`} alt="logo" priority  />
          </Link>
        </li>

        <li className={activeLink === 1 ? 'hovered' : ''} onClick={() => handleLinkClick(1)}>
          <Link href="/dashboard/">
            <span className="icon">
              <FaHome />
            </span>
            <span className="title">لوحة التحكم</span>
          </Link>
        </li>

      

        {/* Nested Links */}
        <li className={activeLink === 2 ? 'hovered dropdown' : 'dropdown'} onClick={() => handleLinkClick(2)}>
          <Link href="#">
            <span className="icon">
            <MdFamilyRestroom />

            </span>
            <span className="title">عن العائلة</span>
            <span className="arrow">&#9666;</span>
          </Link>
          <ul className="submenu">
            <li>
              <Link href="/dashboard/aboutfamily">
                <span className="icon">
                  <FaUsers />
                </span>
                <span className="title">معلومات العائلة</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/aboutfamily">
                <span className="icon">
                  <FaUsers />
                </span>
                <span className="title">تاريخ العائلة</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/aboutfamily">
                <span className="icon">
                  <FaUsers />
                </span>
                <span className="title">كبار شخصيات العائلة</span>
              </Link>
            </li>
          </ul>
        </li>
        

        <li className={activeLink === 3 ? 'hovered' : ''} onClick={() => handleLinkClick(3)}>
        <Link href="/dashboard/aboutfamily">
          <span className="icon">
            <FaUsers />
          </span>
          <span className="title">المستخدمين</span>
        </Link>
      </li>



      <li className={activeLink === 4 ? 'hovered' : ''} onClick={() => handleLinkClick(4)}>
      <Link href="/dashboard/aboutfamily">
        <span className="icon">
        <BsFillCameraReelsFill />
        </span>
        <span className="title">الحالات</span>
      </Link>
    </li>


    <li className={activeLink === 5 ? 'hovered' : ''} onClick={() => handleLinkClick(5)}>
    <Link href="/dashboard/aboutfamily">
      <span className="icon">
      <FcGallery />

      </span>
      <span className="title">المعرض</span>
    </Link>
  </li>


  <li className={activeLink === 6 ? 'hovered' : ''} onClick={() => handleLinkClick(6)}>
  <Link href="/dashboard/aboutfamily">
    <span className="icon">
    <BsCalendar2EventFill />


    </span>
    <span className="title">الاحداث</span>
  </Link>
</li>


{/* الدعم المالي والاشتراكات */}

<li className={activeLink === 7 ? 'hovered dropdown' : 'dropdown'} onClick={() => handleLinkClick(7)}>
<Link href="#">
  <span className="icon">
  <GiTakeMyMoney />

  </span>
  <span className="title">الدعم المالي والاشتراكات</span>
  <span className="arrow">&#9666;</span>
</Link>
<ul className="submenu">
  <li>
    <Link href="/dashboard/aboutfamily">
      <span className="icon">
        <FaUsers />
      </span>
      <span className="title"> الاشتراكات</span>
    </Link>
  </li>
  <li>
    <Link href="/dashboard/aboutfamily">
      <span className="icon">
        <FaUsers />
      </span>
      <span className="title"> الصناديق</span>
    </Link>
  </li>
  <li>
    <Link href="/dashboard/aboutfamily">
      <span className="icon">
        <FaUsers />
      </span>
      <span className="title">  المعلومات البنكية للمستخدمين</span>
    </Link>
  </li>
</ul>
</li>



<li className={activeLink === 8 ? 'hovered' : ''} onClick={() => handleLinkClick(8)}>
<Link href="/dashboard/aboutfamily">
  <span className="icon">
  <MdOutlineBusinessCenter />


  </span>
  <span className="title">الوظائف</span>
</Link>
</li>



<li className={activeLink === 9 ? 'hovered' : ''} onClick={() => handleLinkClick(9)}>
<Link href="/dashboard/aboutfamily">
  <span className="icon">
  <GiShop />


  </span>
  <span className="title">السوق</span>
</Link>
</li>



<li className={activeLink === 10 ? 'hovered' : ''} onClick={() => handleLinkClick(10)}>
<Link href="/dashboard/aboutfamily">
  <span className="icon">
  <GiFamilyTree />


  </span>
  <span className="title">شجرة العائلة</span>
</Link>
</li>



<li className={activeLink === 11 ? 'hovered' : ''} onClick={() => handleLinkClick(11)}>
<Link href="/dashboard/aboutfamily">
  <span className="icon">
  <FcStatistics />


  </span>
  <span className="title"> احصائيات</span>
</Link>
</li>


        {/* Add other list items similarly */}
      </ul>
    </div>
  );
};

export default Sidebar;
