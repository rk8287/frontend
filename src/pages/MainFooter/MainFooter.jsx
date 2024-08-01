import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import "./MainFooter.css";
import { MdFlightTakeoff } from "react-icons/md";

const one = require('../../assets/img/credit-card1.png');
const two = require('../../assets/img/credit-card2.png');
const three = require('../../assets/img/credit-card4.png');
const four = require('../../assets/img/credit-card5.png');




const MainFooter = () => {
  return (
    <Footer className="pro bgDark">
      <div className="main-footer w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.LinkGroup col>
              <Footer.Link href="#">
              <div className="logos">
                    <h2>Time<span style={{color:"orangered"}}>less</span> Travels <MdFlightTakeoff className='logo-icons'/></h2>
                </div>
              </Footer.Link>
              <Footer.Link href="#">2024 © Timeless Travels</Footer.Link>
              <Footer.Link href="#">California CST: 12345678</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Information" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Help Center</Footer.Link>
              <Footer.Link href="#">Contacts</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms of Use</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="COMPANY" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
              <Footer.Link href="#">News & Press</Footer.Link>
              <Footer.Link href="#">Reviews</Footer.Link>
              <Footer.Link href="#">Airlines</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="WE ACCEPT" />
            <Footer.LinkGroup row className="payment-icon">
              <Footer.Link href="#" className="main-card">
                <img className="card-img" src={one} alt="" />
                <img className="card-img" src={two} alt="" />
                <img className="card-img" src={three} alt="" />
                <img className="card-img" src={four} alt="" />
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="footer-copyright w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Timesless Travels" year={2024} className="copyright-tag" />
          <div className="flex space-x-6 sm:mt-0 sm:justify-center footer-icons">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>

       

        <div className="paragraph">
          *All the fares displayed are in USD and include all taxes, fees and
          applicable surcharges. All prices are per person, based on economy
          class weekday travel (Monday – Thursday) from the USA, and depend on
          the chosen class of service, departure city, airline and the route
          (lowest transatlantic fares are usually from the East Coast;
          transpacific fares – from the West Coast). The maximum allowable stay
          is six months. Please call our toll-free line for current best prices
          and additional details.
          {/* <br /> */}
          ^Savings up to 40% off are indicated off the full unrestricted
          published airfares of major airlines and may vary based on individual
          fare rules. Some airlines may impose additional baggage charges. The
          fares are subject to seat availability in the corresponding booking
          inventory. Seats are limited and may not be available on all flights
          and dates. The fares are non-refundable, non-exchangeable, and
          non-transferable. The fares and their governing rules are subject to
          change without prior notice. Other restrictions may apply. Less
          restrictive fares available at different rates.
        </div>
      </div>
    </Footer>
  );
};

export default MainFooter;