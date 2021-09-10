import React from 'react';
import "./Home.css";
import Product from './Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="prime_banner" />

                <div className="home__row">
                    <Product id="0670921602" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={450} image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' rating={5} />

                    <Product id="B08MVN9KTP" title="AMION Hand Blender & Hand Mixer 300W Black & Green" price={1699} image='https://m.media-amazon.com/images/I/71D3MTPp0xL._SY550_.jpg' rating={4}/>
                </div>

                <div className="home__row">
                    
                    <Product id="B07WLL998K" title="Mi Smart Band 4 0.94-inch AMOLED Color Display" price={2499} image='https://m.media-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg' rating={4} />

                    <Product id="B07PFFMP9P" title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)" price={2999} image='https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg' rating={5}
                    />

                    <Product id="B0932S78QJ" title="Apple iPad Pro (11-inch/27.96 cm, 128GB) - Space Grey" price={100000} image='https://m.media-amazon.com/images/I/81a-rN2A3DS._SL1500_.jpg' rating={5} />
                </div>

                <div className="home__row">
                    <Product id="B084L6MSSN" title="Samsung 80 cm (32 Inches) HD Ready LED TV UA32T4010ARXXL (Black) (2020 model)" price={17390} image='https://m.media-amazon.com/images/I/81N7bMl70HL._SL1500_.jpg' rating={4} />
                </div>

            </div>

        </div>
    )
}

export default Home
