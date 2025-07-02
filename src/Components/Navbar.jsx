import React, { useEffect, useState } from 'react';
import logo from '../img/Logo-TL.png';
import SocialMediaIcons from '../Components/SocialMediaIcons';
import { IoClose } from 'react-icons/io5';
import { CgDetailsMore } from 'react-icons/cg';
import { getOrganizationDetails } from '../Api/webApi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [organizationDetails, setOrganizationDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchOrganizationDetails = async () => {
    try {
      setLoading(true);
      const response = await getOrganizationDetails();
      
   
      const orgData = response.data.organization;
      if (orgData && orgData.length > 0) {
        setOrganizationDetails(orgData[0]); 
      } else {
        console.warn("No organization data found");
      }
    } catch (error) {
      console.error("Failed to fetch organization details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganizationDetails();
  }, []);

  return (
    <div className="w-full relative h-fit p-2 bg-opacity-80 items-end justify-between pt-4 py-2 flex">
      <div className="font-bold w-full flex flex-wrap justify-between items-center">
        <div className="flex justify-between w-full items-end gap-4">
          <div className="text-3xl h-fit w-fit rounded-full text-[50px]">
       
            <img 
              src={organizationDetails?.logo || logo} 
              alt={organizationDetails?.companyName || "Company Logo"} 
              className="h-20 w-auto"
              onError={(e) => {
     
                e.target.src = logo;
              }}
            />
          </div>
          <div className="md:text-[36px] text-xl font-bold text-white drop-shadow-md">

            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              organizationDetails?.companyName?.toUpperCase() || "TL TECHNOLOGIES"
            )}
          </div>
        </div>
      </div>
      
      <div className={`md:hidden absolute top-0 right-0 z-50 w-full bg-stone-950 flex flex-col text-bl items-center transition-transform duration-300 ease-in-out ${menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <SocialMediaIcons link={"https://tltechnologies.net/"} title={<span className='text-white'>HOME</span>} />
        <SocialMediaIcons link={"https://connect.tltechnologies.net/products&services"} title={<span className='text-white'>PRODUCTS & SERVICES</span>} />
        <SocialMediaIcons link={"https://tltechnologies.net/about"} title={<span className='text-white'>ABOUT</span>} />
        <SocialMediaIcons link={"https://tltechnologies.net/blog"} title={<span className='text-white'>BLOGS</span>} />
      </div>

      <button onClick={toggleMenu} className='w-fit absolute top-2 right-2 p-1 flex md:hidden bg-stone-200 z-50 text-red-400 rounded-lg'>
        {menuOpen ? <IoClose /> : <CgDetailsMore />}
      </button>
    </div>
  );
}

export default Navbar;