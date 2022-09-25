import React from 'react';
import { Link } from 'react-router-dom';


import Tabs from '../partials/Tabs';
import Match from '../partials/match';
import LiveChat from '../partials/LiveCHat';
function News() {
  return (
    <section style={{marginTop:'10px'}}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

    

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

              {/* 1st article */}
              <article style={{marginTop:'-120px'}} className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                <Tabs />

              </article>
              {/* 2nd article */}
              <article style={{marginTop:'-120px'}} className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>

                  <Match />



                </header>


              </article>

              {/* 3rd article */}
             
              <article style={{marginTop:'-120px'}} className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>

                  <LiveChat />



                </header>


              </article>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default News;
