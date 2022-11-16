import React from 'react'
import {FaRegBookmark, FaRegStar} from 'react-icons/fa'
import {BsGraphUp} from 'react-icons/bs'
import {IoMdNotifications, IoIosGitNetwork, IoIosCode} from 'react-icons/io'
import {IoPlayCircleOutline,IoBookOutline} from 'react-icons/io5'
import {TbCircleDot, TbGitBranch} from 'react-icons/tb'
import {HiOutlineChartBarSquare, HiOutlineShieldExclamation} from 'react-icons/hi2'
import './Header.css'

export default function Header() {

  const headerContent = [{
    id: 1,
    icon: IoIosCode,
    title: 'Code',
    size:22
  },
  {
    id: 2,
    icon: TbCircleDot,
    title: 'Issues',
    size:20,
    count: 625
  },{
    id: 3,
    icon: TbGitBranch,
    title: 'Pull requests',
    size:20,
    count: 208
  }
,{
  id: 4,
  icon: IoPlayCircleOutline,
  title: 'Actions',
  size:20,
},{
  id: 5,
  icon: HiOutlineChartBarSquare,
  title: 'Projects',
  size:20,
},{
  id: 6,
  icon: IoBookOutline,
  title: 'Wiki',
  size:20,
},{
  id: 7,
  icon: HiOutlineShieldExclamation,
  title: 'Security',
  size:20
},{
  id: 8,
  icon: BsGraphUp,
  title: 'Insights',
  size:17
}
]

  return (
    <React.Fragment>
      <div className='top-header-container'>
        <div className='d-flex align-items-center justify-content-between p-4 '>
          <div className='d-flex align-items-center'>
            <FaRegBookmark />
          <span className='top-header-text'>facebook</span>/<span className='top-header-text'><b> react</b></span>
          <span className='public-text rounded-pill mx-2'>Public</span>
          </div>
          <div className='d-none d-lg-flex align-items-center top-header-right-items'>
            <div className='top-header-box rounded'><span className='top-header-box-inner'><IoMdNotifications className='me-1'/> Notifications</span></div>
            <div className='top-header-box rounded'><span className='d-flex align-items-center top-header-box-inner'><FaRegStar className='me-1'/>Star</span><span className='bg-white top-header-box-inner rounded-end border-start'>175k</span></div>
            <div className='top-header-box rounded'><span className='d-flex align-items-center top-header-box-inner'><IoIosGitNetwork className='me-1'/>Fork</span><span className='bg-white top-header-box-inner rounded-end border-start'>35.5k</span></div>
          </div>
        </div>
        <div className='px-4'>
          <div className='d-inline d-lg-flex align-items-center flex-wrap'>
          {headerContent.map((content) => {
            return <div key={content.id} className='d-inline-block d-lg-flex align-items-center p-3'><content.icon fontSize={content.size} className='me-1'/> {content.title} {content.count && <span className='count-span rounded-pill mx-2'>{content.count}</span> }</div>
          })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
