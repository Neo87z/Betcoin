import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import TabsImage01 from '../images/tabs-image-01.jpg';
import HeroImage01 from '../images/hero-image-01.jpg';
import { Link } from 'react-router-dom';

import NewsImage01 from '../images/news-01.jpg';
import NewsImage02 from '../images/news-02.jpg';
import NewsImage03 from '../images/news-03.jpg';
import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor02 from '../images/news-author-02.jpg';
import NewsAuthor03 from '../images/news-author-03.jpg';
import Axios from "axios";
function Tabs() {
  const [BetList, setBetList] = useState([])

  const [Img56 = '', setImgData22] = useState('')
  const [Img56T2 = '', setImgData2222a] = useState('')
  const [Team1Logo = '', steLogoTeaam1] = useState('')
  const [Team2Logo = '', setTEamLogo2] = useState('')
  const [TeamScore1 = '', setTeamScore1] = useState('')
  const [TeamScore2 = '', setTeamScore2] = useState('')



  const [Img5622 = '', setImgData2222] = useState('')
  const [Img56T22 = '', setImgData2222a2] = useState('')
  const [Team1Logo2 = '', steLogoTeaam12] = useState('')
  const [Team2Logo24 = '', setTEamLogo22] = useState('')
  const [TeamScore12 = '', setTeamScore12] = useState('')
  const [TeamScore22 = '', setTeamScore22] = useState('')


  const [Img56223 = '', setImgData22223] = useState('')
  const [Img56T223 = '', setImgData2222a23] = useState('')
  const [Team1Logo23 = '', steLogoTeaam123] = useState('')
  const [Team2Logo234 = '', setTEamLogo223] = useState('')
  const [TeamScore13 = '', setTeamScore13] = useState('')
  const [TeamScore23 = '', setTeamScore23] = useState('')


  const [Img562234 = '', setImgData222234] = useState('[]')
  const [Img56T2234 = '', setImgData2222a234] = useState('[]')
  const [Team1Logo234 = '', steLogoTeaam1234] = useState('[]')
  const [Team2Logo2345 = '', setTEamLogo2234] = useState('[]')
  const [TeamScore14 = '', setTeamScore14] = useState('[]')
  const [TeamScore24 = '', setTeamScore24] = useState('[]')




  const [Img562 = '', setImgData222] = useState('[]')

  const [Img563 = '', setImgData223] = useState('[]')


  const [Img564 = '', setImgData224] = useState('[]')


  const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
  const fetchDataIntervalId = useRef();


  useEffect(() => {
    setFetchDataInterval(1000)
    Axios.get('https://asdasdasdasd2222.herokuapp.com/rooms/GetBet').then((response) => {
      setBetList(response.data)


      if (response.data[0] != undefined) {
        console.log(response.data[0].ImageURL, 'Finallll Da 1')
        setImgData22(response.data[0].Team1)
        setImgData2222a(response.data[0].Team2)
        steLogoTeaam1(response.data[0].Team1Logo)
        setTEamLogo2(response.data[0].Team2Logo)

        setTeamScore1(response.data[0].Team1Score)
        setTeamScore2(response.data[0].Team2Score)



      }
      if (response.data[1] != undefined) {

        setImgData2222(response.data[1].Team1)
        setImgData2222a2(response.data[1].Team2)
        steLogoTeaam12(response.data[1].Team1Logo)
        setTEamLogo22(response.data[1].Team2Logo)
        setTeamScore12(response.data[1].Team1Score)
        setTeamScore22(response.data[1].Team2Score)
      }
      if (response.data[2] != undefined) {

        setImgData22223(response.data[2].Team1)
        setImgData2222a23(response.data[2].Team2)
        steLogoTeaam123(response.data[2].Team1Logo)
        setTEamLogo223(response.data[2].Team2Logo)
        setTeamScore13(response.data[2].Team1Score)
        setTeamScore23(response.data[2].Team2Score)
      }
      if (response.data[3] != undefined) {

        setImgData222234(response.data[3].Team1)
        setImgData2222a234(response.data[3].Team2)
        steLogoTeaam1234(response.data[3].Team1Logo)
        setTEamLogo2234(response.data[3].Team2Logo)
        setTeamScore14(response.data[3].Team1Score)
        setTeamScore24(response.data[3].Team2Score)
      }

    })
    // Clean up for unmount to prevent memory leak
    return () => clearInterval(fetchDataIntervalId.current);
  }, [fetchDataTrigger]);

  const setFetchDataInterval = (interval) => {
    // Clear old interval
    if (fetchDataIntervalId.current) {
      clearInterval(fetchDataIntervalId.current);
      fetchDataIntervalId.current = undefined;
    }

    // Set new interval
    if (interval > 0) {
      fetchDataIntervalId.current = setInterval(() => {
        setFetchDataTrigger(Date.now());
      }, interval);
    }
  };



  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section>
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20  border-gray-800">


          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Main Event</h2>

          </div>

          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              {BetList.map((val, key) => {
                if (val.BetID == 1) {
                  return <div  style={{marginBottom:'10px'}}  className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">

                    <button
                      className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-50'}`}
                      onClick={() => setTab(1)}
                    >
                      <svg className="w-4 h-4 fill-current text-green-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                      </svg>
                      <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">{val.BetName}</span>
                    </button>
                  </div>
                }

                if (val.BetID == 2) {
                  return <div style={{marginLeft:'10px',marginBottom:'10px'}} className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
                    <button
                      className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 2 && 'opacity-50'}`}
                      onClick={() => setTab(2)}
                    >
                      <svg className="w-4 h-4 fill-current text-green-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                      </svg>
                      <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">{val.BetName}</span>
                    </button>
                  </div>

                }

                if (val.BetID == 3) {
                  return <div  style={{marginLeft:'10px',marginBottom:'10px'}}  className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
                    <button

                      className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-50'}`}
                      onClick={() => setTab(3)}
                    >
                      <svg className="w-4 h-4 fill-current text-green-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z" />
                      </svg>
                      <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">{val.BetName}</span>
                    </button>
                  </div>
                }
                if (val.BetID == 4) {
                  return <div  style={{marginLeft:'10px',marginBottom:'10px'}}  className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
                    <button
                      className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 4 && 'opacity-50'}`}
                      onClick={() => setTab(4)}
                    >
                      <svg className="w-4 h-4 fill-current text-green-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z" />
                      </svg>
                      <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">{val.BetName}</span>
                    </button>
                  </div>
                }
                if (val.BetID == 5) {
                  return <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
                    <button
                      className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 5 && 'opacity-50'}`}
                      onClick={() => setTab(5)}
                    >
                      <svg className="w-4 h-4 fill-current text-green-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.936 6.007H8.358l1.594-4.685c.3-.997-.897-1.794-1.694-.997L.284 8.3c-.598.598-.199 1.694.698 1.694H7.56l-1.594 4.685c-.3.997.897 1.794 1.694.997L15.633 7.7c.598-.598.2-1.694-.697-1.694z" />
                      </svg>
                      <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">{val.BetName}</span>
                    </button>
                  </div>
                }


              })}

            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="flex flex-col h-full" data-aos="fade-up">
                  <header>



                    <div className="block mb-9" >
                      <div className="grid gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-8 items-start">
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full  transform hover:scale-105 transition duration-700 ease-out" src={Team1Logo} width="352" height="198" alt="News 01" />
                          </figure>
                        </article>
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full  transform hover:scale-105 transition duration-700 ease-out" src={Team2Logo} width="200" height="198" alt="News 01" />
                          </figure>
                        </article>
                      </div>
                    </div>

                    <div className="grid gap-1 md:grid-cols-3 md:gap-x-0 md:gap-y-8 items-start">
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <h1 style={{ float: 'right' }} className="h1 mb-4" data-aos="fade-up">{TeamScore1}</h1>
                        </figure>
                      </article>
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <center><h1 className="h1 mb-4" data-aos="fade-up">-</h1></center>
                        </figure>
                      </article>
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <h1 style={{ float: 'left' }} className="h1 mb-8" data-aos="fade-up">{TeamScore2}</h1>
                        </figure>
                      </article>
                    </div>





                  </header>

                </article>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="flex flex-col h-full" data-aos="fade-up">
                  <header>



                    <div className="block mb-9" to="/blog-post">
                      <div className="grid gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-8 items-start">
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full  transform hover:scale-105 transition duration-700 ease-out" src={Team1Logo2} width="352" height="198" alt="News 01" />
                          </figure>
                        </article>
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full  transform hover:scale-105 transition duration-700 ease-out" src={Team2Logo24} width="200" height="198" alt="News 01" />
                          </figure>
                        </article>
                      </div>
                    </div>

                    <div className="grid gap-1 md:grid-cols-3 md:gap-x-0 md:gap-y-8 items-start">
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <h1 style={{ float: 'right' }} className="h1 mb-4" data-aos="fade-up">{TeamScore12}</h1>
                        </figure>
                      </article>
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <center><h1 className="h1 mb-4" data-aos="fade-up">-</h1></center>
                        </figure>
                      </article>
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <h1 style={{ float: 'left' }} className="h1 mb-8" data-aos="fade-up">{TeamScore22}</h1>
                        </figure>
                      </article>
                    </div>





                  </header>

                </article>
              </Transition>

              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="flex flex-col h-full" data-aos="fade-up">
                  <header>



                    <div className="block mb-9" to="/blog-post">
                      <div className="grid gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-8 items-start">
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full  transform hover:scale-105 transition duration-700 ease-out" src={Team1Logo23} width="352" height="198" alt="News 01" />
                          </figure>
                        </article>
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full  transform hover:scale-105 transition duration-700 ease-out" src={Team2Logo234} width="200" height="198" alt="News 01" />
                          </figure>
                        </article>
                      </div>
                    </div>

                    <div className="grid gap-1 md:grid-cols-3 md:gap-x-0 md:gap-y-8 items-start">
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <h1 style={{ float: 'right' }} className="h1 mb-4" data-aos="fade-up">{TeamScore13}</h1>
                        </figure>
                      </article>
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <center><h1 className="h1 mb-4" data-aos="fade-up">-</h1></center>
                        </figure>
                      </article>
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <h1 style={{ float: 'left' }} className="h1 mb-8" data-aos="fade-up">{TeamScore23}</h1>
                        </figure>
                      </article>
                    </div>





                  </header>

                </article>
              </Transition>

              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="flex flex-col h-full" data-aos="fade-up">
                  <header>



                    <div className="block mb-9" to="/blog-post">
                      <div className="grid gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-8 items-start">
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full  transform hover:scale-105 transition duration-700 ease-out" src={Team1Logo234} width="352" height="198" alt="News 01" />
                          </figure>
                        </article>
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full  transform hover:scale-105 transition duration-700 ease-out" src={Team2Logo2345} width="200" height="198" alt="News 01" />
                          </figure>
                        </article>
                      </div>
                    </div>

                    <div className="grid gap-1 md:grid-cols-3 md:gap-x-0 md:gap-y-8 items-start">
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <h1 style={{ float: 'right' }} className="h1 mb-4" data-aos="fade-up">{TeamScore14}</h1>
                        </figure>
                      </article>
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <center><h1 className="h1 mb-4" data-aos="fade-up">-</h1></center>
                        </figure>
                      </article>
                      <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                          <h1 style={{ float: 'left' }} className="h1 mb-8" data-aos="fade-up">{TeamScore24}</h1>
                        </figure>
                      </article>
                    </div>





                  </header>

                </article>
              </Transition>

              {/* Item 5 */}
              <Transition
                show={tab === 5}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="flex flex-col h-full" data-aos="fade-up">
                  <header>



                    <div className="block mb-9" to="/blog-post">
                      <div >
                        <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                          <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="540" height="520" viewBox="0 130 540 520" xmlns="http://www.w3.org/2000/svg">
                              <g className="fill-current text-green-600">
                                <circle className="pulse" cx="270" cy="260" r="64" />
                                <circle className="pulse pulse-1" cx="270" cy="260" r="64" />
                                <circle className="pulse pulse-2" cx="270" cy="260" r="64" />
                                <circle className="pulse pulse-3" cx="270" cy="260" r="64" />
                              </g>
                            </svg>
                          </figure>
                        </article>

                      </div>
                    </div>




                  </header>

                </article>
              </Transition>

            </div>

          </div>

        </div>
      </div>
    </section >
  );
}

export default Tabs;
