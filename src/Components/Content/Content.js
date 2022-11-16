import React, { useEffect, useState } from 'react'
import {TbCircleDot} from 'react-icons/tb'
import axios from 'axios'
import {GoComment} from 'react-icons/go'
import moment from 'moment'
import InfiniteScroll from 'react-infinite-scroll-component'
import {VscTriangleDown} from 'react-icons/vsc'
import './Content.css'

export default function Content() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const headerItems = ['Author', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort']

    const fetchData = async (page) => {
        setPage(page)
        try {
        const response = await axios
            .get(`https://api.github.com/repos/facebook/react/issues?page=${page}`, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
           if(response.status === 200) {
            setData(prevState => ([...prevState, ...response.data]))
           }
        } catch (err) {
            console.log(err);
        }          
    }

    useEffect(() => {
        fetchData(1)
    }, [])

    const colorArr = ['0366d6', '9149d1', 'b60205']

    const fetchMoreData = () => {
         fetchData(parseInt(page) + 1)
      }

  return (
    <div className='container'>
        <div className='py-5'>
            <div className='content-container rounded'>
                <div className='content-container-head p-3'>
                    <div className='d-flex align-items-center'><TbCircleDot fontSize={20} className='me-2'/>
                    <span style={{fontSize: '14px'}}><b>625 Open</b></span>
                    </div>
                    <div>
                        <ul className='d-none d-lg-flex m-0'>
                            {headerItems.map((item) => {
                                return <li className='d-flex align-items-center mx-2' style={{fontSize: '14px'}}>{item} <VscTriangleDown fontSize={14} className='ms-1'/></li>
                            })}
                        </ul>
                    </div>
                    </div>

                       {data.length > 0 && <InfiniteScroll
                            dataLength={data.length}
                            next={fetchMoreData}
                            hasMore={true}
                            endMessage={
                              <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                              </p>
                            }
                            // scrollableTarget="scrollable"
                          >
                              {data.map((row, index) =>{
                    return <div key={index} className='row p-3 d-flex align-items-center justify-content-between border-top m-0'>
                        <div className='col-12 col-lg-9 d-flex p-0'>
                        <TbCircleDot fontSize={20} color={'#3fb950'} className='me-2'/>
                        <div>
                            <div>
                        <h6 className='d-inline'>{row.title}</h6>
                        {row.labels.map((status) => {
                            return <span className={`labels-container rounded-pill mx-1 ${colorArr.includes(status.color) ? 'text-white' : ''}`} style={{backgroundColor: `#${status.color}`}}>{status.name}</span>
                        })}
                        </div>
                        <span className='row-id'>#{row.number} opened {moment(row.created_at).fromNow()} by {row.user.login}</span>
                        </div>
                        </div >
                        <div className='col-6 col-lg-2 text-end'><img src={row.user.avatar_url} height={30} className='rounded-circle' alt='' /></div>
                        <div className='col-6 col-lg-1 text-end'>{row.comments ? <div className='comments-count'><GoComment fontSize={18} className='me-2'/>{row.comments}</div> : ''}</div>
                    </div>
                } )}
                </InfiniteScroll>}
            </div>
        </div>
        <hr></hr>
    </div>
  )
}
