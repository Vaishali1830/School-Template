import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import DropList from "./Droplist";
import { useState } from "react";
import Anchor from "./Anchor";
// import Searchbar from "./Searchbar";
import Accordion from "./Accordion";
import logo from '../../assets/logo.webp'
import {Link } from "react-router-dom";

const Header = () => {

  const[selectedValue , setSelectedValue] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (value: string)=>{
    setSelectedValue(value)
  }
  console.log("selected value" , selectedValue)

  const accordionItems = [
    {
      title: "Get Involved",
      items: ["How to give", "Volunteers", "Careers"],
    },
    {
      title: "Programming",
      items: [
        "Trauma Informed Early Education",
        "Enrollment",
        "Events",
        "Media",
      ],
    },
    {
      title: "About Us",
      items: [
        "Mission",
        "History",
        "20 Stories of Hope",
        "Meet Our Team",
        "Board of Directors",
      ],
    },
  ];

  return (
    <div className="relative">
      {/* HEADER 1 */}
      <div className="flex gap-4 items-center justify-center bg-new-color p-1">
        <Anchor title = "Contact Us" href="/contact-us"/>
        <Anchor title = "Careers" href="/careers"/>
        <Anchor title = "Mewsletter Sign-up" href="/signup"/>
        <Anchor title = {<FaInstagram size={15}/>}  href="#"/>
        <Anchor title = {<FaYoutube size={15}/>}  href="#"/>
        <Anchor title = {<FaTwitter  size={15}/>}  href="#"/>
      </div>

      {/* HEADER 2 */}
      <div className="flex gap-6 bg-surface p-4 justify-between w-[100vw] items-center relative h-16">
        <div className="flex flex-start">
          <img src={logo} alt="logo" className="object-cover w-15 h-15 rounded-full custom-position"/>
        </div>

        <div className="md:hidden flex gap-6">
          {/* <Searchbar /> */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu size={24} color="indigo" />
          </button>
        </div>

        <div className="hidden md:flex gap-6">
          {/* <Searchbar/> */}
          <DropList options={["How to give", "Volunteers", "Careers"]} onChange={handleChange} placeholder="Get Involved" />
          <DropList options={["Trauma Informed Early Education", "Enrollment", "Events", "Media"]} onChange={handleChange} placeholder="Programming" />
          <DropList options={["Mission", "History", "20 Stories of Hope", "Meet Our Team", "Board of Directors"]} onChange={handleChange} placeholder="About Us" />
          <Link to='contact-us' className="border border-violet-600 h-10 mt-2 mr-3 rounded-lg px-4 pt-2 text-violet-600 hover:bg-violet-500 transition-all duration-500 hover:text-white">CONTACT</Link>
        </div>     
      </div>
 
      <div className="md:hidden ml-[70vw]">
        {isMenuOpen && (
          <div className="absolute right-0 shadow-lg z-50 w-[30vw] bg-surface">
            <Accordion items={accordionItems}/>
          </div>
          )}
      </div>
    </div>  
  )
}

export default Header
