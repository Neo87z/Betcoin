import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import TabsImage01 from '../images/Clevv.jpg';
import HeroImage01 from '../images/hero-image-01.jpg';

import logo from '../images/logo1.png';

import Bet2 from '../images/Mariners.jpg';

import Bet3 from '../images/Huston.jpg';

import Bet4 from '../images/Cardinals.jpg';
import Axios from "axios";
import Main1 from '../images/Match1.png';

import Main2 from '../images/jagu.png';

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
      <div style={{ marginLeft: '0' }} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">


          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Main Event</h2>

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
                if (val.BetID == 4) {



                  return <div>

                    <div style={{ marginTop: '10px', marginLeft: '10px' }} className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
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
              {console.log(Team1Logo, ';pgpppp')}
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

                <div data-aos="fade-up" ref={tabs}>
                 
                  <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{ marginTop: '45px' }} >
                    <div class="ui three column very relaxed grid">
                      <div class="column">
                      <center>  <img style={{ marginLeft: '75px' }} className="w-full h-full object-cover" src={Team1Logo} width="316" height="287" /></center>
                      </div>
                      <div class="column">
                      <center>  <h2  className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">VS1</h2> </center>
                      </div>

                      <div class="column">
                      <center>  <img style={{ marginLeft: '-75px' }} className="w-full h-full object-cover" src={Team2Logo} width="316" height="287" /> </center>

                      </div>


                    </div>

                  </div>

                  <div style={{ marginLeft: '40px' }} >

                    <div className="max-w-6xl mx-auto px-4 sm:px-6" >
                      <div class="ui two column very relaxed grid">
                        <div class="column">
                        <center>   <p className="text-lg text-gray-400">{Img56}</p>  </center>  
                        </div>
                        <div class="column">
                        <center>  <p style={{}} className="text-lg text-gray-400">{Img56T2}</p> </center>

                        </div>

                      </div>

                    </div>



                    <div style={{ width: '400px' }} className="max-w-6xl mx-auto px-7 sm:px-9" >
                      <div class="ui three column very relaxed grid">
                        <div class="column">
                        <center> <h2 style={{}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">{TeamScore1}</h2> </center>
                        </div>
                        <div class="column">
                          <h2 style={{ marginLeft: '10px' }} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">-</h2>
                        </div>

                        <div class="column">
                        <center>        <h2 style={{}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">{TeamScore2}</h2> </center>

                        </div>


                      </div>

                    </div>







                  </div>









                </div>

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

                <div data-aos="fade-up" ref={tabs}>

                  <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{ marginTop: '45px' }} >
                    <div class="ui three column very relaxed grid">
                      <div class="column">
                      <center>  <img style={{ marginLeft: '75px' }} className="w-full h-full object-cover" src={Team1Logo2} width="316" height="287" /> </center>
                      </div>
                      <div class="column">
                      <center> <h2  className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">VS1</h2> </center>
                      </div>

                      <div class="column">
                      <center>  <img style={{ marginLeft: '-75px' }} className="w-full h-full object-cover" src={Team2Logo24} width="316" height="287" /> </center>

                      </div>


                    </div>

                  </div>

                  <div style={{ marginLeft: '40px' }} >

                    <div className="max-w-6xl mx-auto px-4 sm:px-6" >
                      <div class="ui two column very relaxed grid">
                        <div class="column">
                        <center> <p className="text-lg text-gray-400">{Img5622}</p> </center>
                        </div>
                        <div class="column">
                        <center> <p style={{}} className="text-lg text-gray-400">{Img56T22}</p> </center>

                        </div>

                      </div>

                    </div>



                    <div style={{ width: '400px' }} className="max-w-6xl mx-auto px-7 sm:px-9" >
                      <div class="ui three column very relaxed grid">
                        <div class="column">
                        <center>  <h2 style={{}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">{TeamScore12}</h2> </center>
                        </div>
                        <div class="column">
                        <center>   <h2 style={{ marginLeft: '10px' }} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">-</h2> </center>
                        </div>

                        <div class="column">
                        <center>  <h2 style={{}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">{TeamScore22}</h2> </center>

                        </div>


                      </div>

                    </div>







                  </div>









                </div>

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

                <div data-aos="fade-up" ref={tabs}>

                  <div className="max-w-6xl mx-auto px-4 sm:px-6"  style={{ marginTop: '45px' }}>
                    <div class="ui three column very relaxed grid">
                      <div class="column">
                      <center> <img style={{ marginLeft: '75px' }} className="w-full h-full object-cover" src={Team1Logo23} width="316" height="287" /> </center>
                      </div>
                      <div class="column">
                      <center>  <h2  className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">VS1</h2> </center>
                      </div>

                      <div class="column">
                      <center> <img style={{ marginLeft: '-75px' }}className="w-full h-full object-cover" src={Team2Logo234} width="316" height="287" /> </center>

                      </div>


                    </div>

                  </div>

                  <div >

                    <div className="max-w-6xl mx-auto px-4 sm:px-6" >
                     
                      <div class="ui two column very relaxed grid">
                        <div class="column">
                        <center> <p className="text-lg text-gray-400">{Img56223}</p> </center>
                        </div>
                        <div class="column">
                        <center><p style={{}} className="text-lg text-gray-400">{Img56T223}</p> </center>

                        </div>

                      </div>

                    </div>



                    <div style={{ width: '400px' }} className="max-w-6xl mx-auto px-7 sm:px-9" >
                      <div class="ui three column very relaxed grid">
                        <div class="column">
                        <center> <h2 style={{}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">{TeamScore13}</h2> </center>
                        </div>
                        <div class="column">
                        <center><h2 style={{ marginLeft: '10px' }} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">-</h2> </center>
                        </div>

                        <div class="column">
                        <center> <h2 style={{}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">{TeamScore23}</h2> </center>

                        </div>


                      </div>

                    </div>







                  </div>









                </div>

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

                <div data-aos="fade-up" ref={tabs}>

                  <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{ marginTop: '45px' }}>
                    <div class="ui three column very relaxed grid">
                      <div class="column">
                      <center><img style={{ marginLeft: '75px' }} className="w-full h-full object-cover" src={Team1Logo234} width="316" height="287" alt="Tabs 01" /> </center>
                      </div>
                      <div class="column">
                      <center>  <h2  className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">VS1</h2> </center>
                      </div>

                      <div class="column">
                      <center> <img style={{ marginLeft: '-75px' }} className="w-full h-full object-cover" src={Team2Logo2345} width="316" height="287" alt="Tabs 01" /> </center>

                      </div>


                    </div>

                  </div>

                  <div >

                    <div className="max-w-6xl mx-auto px-4 sm:px-6" >
                      <div class="ui two column very relaxed grid">
                        <div class="column">
                        <center> <p className="text-lg text-gray-400">{Img562234}</p> </center>
                        </div>
                        <div class="column">
                        <center>   <p style={{}} className="text-lg text-gray-400">{Img56T2234}</p> </center>

                        </div>

                      </div>

                    </div>



                    <div style={{ width: '400px' }} className="max-w-6xl mx-auto px-7 sm:px-9" >
                      <div class="ui three column very relaxed grid">
                        <div class="column">
                        <center> <h2 style={{}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">{TeamScore14}</h2> </center>
                        </div>
                        <div class="column">
                        <center>  <h2 style={{ marginLeft: '10px' }} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">-</h2> </center>
                        </div>

                        <div class="column">
                        <center> <h2 style={{marginLeft:'40px'}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">{TeamScore24}</h2> </center>

                        </div>


                      </div>

                    </div>







                  </div>









                </div>
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
                      <svg style={{ marginTop: '-70px', marginLeft: '-36px' }} width="540" height="520" viewBox="0 0 540 520" xmlns="http://www.w3.org/2000/svg">
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
