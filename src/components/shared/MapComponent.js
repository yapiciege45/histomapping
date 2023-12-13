"use client"
import { IconMaximize, IconX } from '@tabler/icons-react'
import { Map, Marker, Overlay } from 'pigeon-maps'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export const MapComponent = ({ blogs, height = '100vh' }) => {

  const [selectedBlog, setSelectedBlog] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [lang, setLang] = useState('en')
  const [search, setSearch] = useState('')
  const [searchedBlogs, setSearchedBlogs] = useState(blogs)

  function searchBlog(search) {
    let findedBlogs = blogs.filter(x => {
      let sums = ''

      sums += x.title + ' ' + x.title_en + ' ' + x.description + ' ' + x.description_en

      x.article.sections.forEach(element => {
        sums += element.title

        element.paragraphs.forEach(paragraph => {
          sums += paragraph
        })
      });

      x.article_en.sections.forEach(element => {
        sums += element.title

        element.paragraphs.forEach(paragraph => {
          sums += paragraph
        })
      });

      sums = sums.toLocaleLowerCase('tr-TR')

      search = search.toLocaleLowerCase('tr-TR')


      return sums.includes(search)

    })

    console.log(findedBlogs)

    if(findedBlogs[0] === undefined) {
      findedBlogs = []
    }

    setSearchedBlogs(findedBlogs)
  }

  useEffect(() => {
    console.log('a')
    searchBlog(search)
  }, [search])
  

  function changeSelectedBlogById(id) {
    const findedBlog = blogs.find(x => x.id == id)

    setSelectedBlog(findedBlog)
  }

  return (
    <div style={{height, width: '100%', position: 'relative'}}>
      <Map defaultCenter={[39.925018, 32.836956]} defaultZoom={5}>
        {
          searchedBlogs.map(x => {
            
            if(x) {
              return (
                <Marker 
                  width={50}
                  anchor={[x.location.lat, x.location.long]}
                  onClick={() => changeSelectedBlogById(x.id)} 
                />
              )
            }
            
        })
        }  
      </Map>
      {
        selectedBlog && (
          <div className={`${expanded ? 'w-full h-full top-0 overflow-y-scroll' : 'w-3/4 lg:w-1/4 rounded-xl top-1/2 left-1/2'}  bg-black/80 absolute p-5 flex flex-col items-center z-10`} style={{transform: `${expanded ? '' : 'translate(-50%,-50%)'}`}}>
            <div className='w-full flex justify-between items-center'>
              <div className='flex justify-around items-center border w-24 h-8 border-white'>
                <p className={`${lang == 'en' ? 'text-white' : ' text-red-500'} font-bold cursor-pointer`} onClick={() => setLang('en')}>EN</p>
                <p className={`${lang == 'tr' ? 'text-white' : ' text-red-500'} font-bold cursor-pointer`} onClick={() => setLang('tr')}>TR</p>
              </div>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <IconMaximize color='white' size={24} className='mr-3 cursor-pointer' onClick={() => setExpanded(prevState => !prevState)} />
                  <IconX color='white' size={24} onClick={() => {
                    setSelectedBlog(null)
                    setExpanded(false)
                  }} className='cursor-pointer' />
                </div>
              </div>
            </div>
            {
              expanded ? (
                <>
                  <div className='hidden md:flex justify-around items-start h-full w-full mt-5'>
                    <div className='w-full md:w-[30%] justify-between flex-wrap hidden md:flex'>
                      {
                        selectedBlog.images.map(x => (
                          <img src={x} className='w-[30%] mt-3' />
                        ))
                      }
                    </div>
                    <div className='w-full md:w-[65%] flex justify-start'>
                      {
                        lang == 'tr' ? (
                          <div className='flex flex-col'>
                            {
                              selectedBlog.article.sections.map(x => (
                                <div className='flex flex-col mt-10'>
                                  <p className='text-xl font-bold text-white'>{x.title}</p>
                                  {
                                    x.paragraphs.map(y => (
                                      <p className='mt-3 text-white'>{y}</p>
                                    ))
                                  }
                                </div>
                              ))
                            }
                          </div>
                        ) : (
                          <div className='flex flex-col'>
                            {
                              selectedBlog.article_en.sections.map(x => (
                                <div className='flex flex-col mt-10'>
                                  <p className='text-xl font-bold text-white'>{x.title}</p>
                                  {
                                    x.paragraphs.map(y => (
                                      <p className='mt-3 text-white'>{y}</p>
                                    ))
                                  }
                                </div>
                              ))
                            }
                          </div>
                        )
                      }
                    </div>
                  </div>
                  <div className='flex md:hidden flex-col h-full w-full mt-5'>
                    <div className='w-full justify-between flex-wrap flex md:hidden'>
                      {
                        selectedBlog.images.map(x => (
                          <img src={x} className='w-[30%] mt-3' />
                        ))
                      }
                    </div>
                    <div className='w-full flex justify-start'>
                      {
                        lang == 'tr' ? (
                          <div className='flex flex-col'>
                            {
                              selectedBlog.article.sections.map(x => (
                                <div className='flex flex-col mt-10'>
                                  <p className='text-xl font-bold text-white'>{x.title}</p>
                                  {
                                    x.paragraphs.map(y => (
                                      <p className='mt-3 text-white'>{y}</p>
                                    ))
                                  }
                                </div>
                              ))
                            }
                          </div>
                        ) : (
                          <div className='flex flex-col'>
                            {
                              selectedBlog.article_en.sections.map(x => (
                                <div className='flex flex-col mt-10'>
                                  <p className='text-xl font-bold text-white'>{x.title}</p>
                                  {
                                    x.paragraphs.map(y => (
                                      <p className='mt-3 text-white'>{y}</p>
                                    ))
                                  }
                                </div>
                              ))
                            }
                          </div>
                        )
                      }
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {
                    lang == 'tr' ? (
                      <>
                        <img src={selectedBlog.logo} className='w-full mt-3' alt={selectedBlog.title} />
                        <p className='mt-3 text-white font-bold text-center'>{selectedBlog.title}</p>
                        <p className='mt-1 text-white text-center'>{selectedBlog.description}</p>
                      </>
                    ) : (
                      <>
                        <img src={selectedBlog.logo} className='w-full mt-3' alt={selectedBlog.title_en} />
                        <p className='mt-3 text-white font-bold text-center'>{selectedBlog.title_en}</p>
                        <p className='mt-1 text-white text-center'>{selectedBlog.description_en}</p>
                      </>
                    )
                  }
                </>
              )
            }
            
          </div>
        )
      }
      <div className="flex justify-center items-center absolute top-0 left-0 w-full h-24 p-5">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="w-11/12 md:w-3/4 h-full px-8 rounded-full border border-black drop-shadow-2xl focus-within:outline-none" />
      </div>
    </div>
      
  )
}
