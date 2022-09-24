import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import TabsImage01 from '../images/Clevv.jpg';
import HeroImage01 from '../images/hero-image-01.jpg';


import Bet2 from '../images/Mariners.jpg';

import Bet3 from '../images/Huston.jpg';

import Bet4 from '../images/Cardinals.jpg';
import Axios from "axios";


function Tabs() {

  const [BetList, setBetList] = useState([])

  const [Img56 = '', setImgData22] = useState('')

  const [Img562 = '', setImgData222] = useState('')

  const [Img563 = '', setImgData223] = useState('')


  const [Img564 = '', setImgData224] = useState('')



 /* useEffect(() => {

    Axios.get('http://e392-35-204-64-57.ngrok.io/GetAllBets22').then((response) => {
      setBetList(response.data.FianlData)


      if (response.data.FianlData[0] != undefined) {
        console.log(response.data.FianlData[0].ImageURL, 'Finallll Da 1')
        setImgData22(response.data.FianlData[0].ImageURL)
      }
      if (response.data.FianlData[1] != undefined) {

        setImgData222(response.data.FianlData[1].ImageURL)
      }
      if (response.data.FianlData[2] != undefined) {

        setImgData223(response.data.FianlData[2].ImageURL)
      }
      if (response.data.FianlData[3] != undefined) {

        setImgData224(response.data.FianlData[3].ImageURL)
      }

    })

  }, []);
*/

  const [tab, setTab] = useState(5);

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
    <section >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">


          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Current Bets</h2>

          </div>

          {/* Section content */}
          <div >
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              {BetList.map((val, key) => {

                if (val.BetID == 1) {




                  return <div>

                    <div style={{ marginTop: '10px' }} className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
                      <button
                        className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-50'}`}
                        onClick={() => setTab(1)}
                      >
                        <svg className="w-4 h-4 fill-current text-green-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                        </svg>
                        <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">{val.BetName}</span>
                      </button>

                    </div>
                  </div>
                }
                <br></br>

                if (val.BetID == 2) {



                  return <div>

                    <div style={{ marginTop: '10px', marginLeft: '10px' }} className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
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
                  </div>
                }

                <br></br>

                if (val.BetID == 3) {



                  return <div>

                    <div style={{ marginTop: '10px', marginLeft: '10px' }} className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
                      <button
                        className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-50'}`}
                        onClick={() => setTab(3)}
                      >
                        <svg className="w-4 h-4 fill-current text-green-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                        </svg>
                        <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">{val.BetName}</span>
                      </button>

                    </div>
                  </div>
                }
                <br></br>

                if (val.BetID == 4) {



                  return <div>

                    <div style={{ marginTop: '10px' }} className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
                      <button
                        className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 4 && 'opacity-50'}`}
                        onClick={() => setTab(4)}
                      >
                        <svg className="w-4 h-4 fill-current text-green-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                        </svg>
                        <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">{val.BetName}</span>
                      </button>

                    </div>
                  </div>
                }



              })}

              {/* Tabs buttons */}





            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>
              {console.log(BetList[0])}
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
                <article className="relative max-w-md mx-auto md:max-w-none">

                  <figure className="md:absolute ">
                    <img className="w-full h-full object-cover" src={Img56} width="516" height="387" />
                  </figure>

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
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute ">
                    <img className="w-full h-full object-cover" src={Img562} width="516" height="387" />
                  </figure>

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
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute ">
                    <img className="w-full h-full object-cover" src={Img563} width="516" height="387" />
                  </figure>

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
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute ">
                    <img className="w-full h-full object-cover" src={Img564} width="516" height="387" />
                  </figure>

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

                <div data-aos="fade-up" ref={tabs}>

                  <div className="max-w-6xl mx-auto px-4 sm:px-6" >
                    <div class="ui three column very relaxed grid">
                      <div class="column">

                      </div>
                      <div class="column">

                      </div>

                      <div class="column">


                      </div>


                    </div>

                  </div>

                  <div style={{ marginLeft: '40px' }} >

                    <div className="max-w-6xl mx-auto px-4 sm:px-6" >
                      <svg style={{ marginTop: '-110px', marginLeft: '-36px' }} width="540" height="520" viewBox="0 0 540 520" xmlns="http://www.w3.org/2000/svg">
                        <g className="fill-current text-green-600">
                          <circle className="pulse" cx="270" cy="260" r="64" />
                          <circle className="pulse pulse-1" cx="270" cy="260" r="64" />
                          <circle className="pulse pulse-2" cx="270" cy="260" r="64" />
                          <circle className="pulse pulse-3" cx="270" cy="260" r="64" />
                        </g>
                      </svg>
                      <div class="ui two column very relaxed grid">
                        <div class="column">

                        </div>
                        <div class="column">


                        </div>

                      </div>

                    </div>










                  </div>









                </div>

              </Transition>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
