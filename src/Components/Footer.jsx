const Footer = () => {
    return ( 
        <div className="w-full py-16 px-4 ">
            <div className=" hidden md:flex lg:cols-span-4  justify-between text-[#323232] blocked ">
                <div >
                    <h6 className="font-bold ">COMPANY</h6>
                    <ul>
                        <li  className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Press</li>
                        <li className="py-2 text-sm">Carrers</li>
                        <li className="py-2 text-sm">Contact</li>

                    </ul>
                </div>
                <div>
                    <h6 className="font-bold ">DEVELOPERS</h6>
                    <ul>
                        <li  className="py-2 text-sm">Documentations</li>
                        <li className="py-2 text-sm">API Reference</li>
                        <li className="py-2 text-sm">ChangeLog</li>
                        <li className="py-2 text-sm">Status</li>

                    </ul>
                </div>
                <div>
                    <h6 className="font-bold ">CONNECT</h6>
                    <ul>
                        <li  className="py-2 text-sm">Instagram</li>
                        <li className="py-2 text-sm">LinkedIn</li>
                        <li className="py-2 text-sm">Twitter</li>
                        
                    </ul>
                </div>
                <div className="p-2 text-right">
                    <h6 className="font-medium  text-4xl  ">Furte</h6>
                    <p className="p-4 mt-6 text-sm text-gray-400">They key difference between ordinary and special. No <br /> matter the season, our
                         spaces are as nuanced as the <br /> lifestyles they reflect, don’t just dream it</p>
                </div>

            </div>

                 {/*part 2*/}

            <div className="lg:cols-span-2  justify-between text-[#323232] lg:hidden md:hidden">
            
               <div className="mb-6 ">
                    <h6 className="font-medium  text-4xl  ">Furte</h6>
                    <p className=" mt-6 text-sm text-gray-400">They key difference between ordinary and special. No <br /> matter the season, our
                         spaces are as nuanced as the <br /> lifestyles they reflect, don’t just dream it</p>
                </div>

                <div className="lg:row-span-3 flex justify-between text-[#323232]">
                <div>
                    <h6 className="font-bold ">COMPANY</h6>
                    <ul>
                        <li  className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Press</li>
                        <li className="py-2 text-sm">Carrers</li>
                        <li className="py-2 text-sm">Contact</li>

                    </ul>
                </div>
                <div>
                    <h6 className="font-bold ">DEVELOPERS</h6>
                    <ul>
                        <li  className="py-2 text-sm">Documentations</li>
                        <li className="py-2 text-sm">API Reference</li>
                        <li className="py-2 text-sm">ChangeLog</li>
                        <li className="py-2 text-sm">Status</li>

                    </ul>
                </div>
                <div>
                    <h6 className="font-bold ">CONNECT</h6>
                    <ul>
                        <li  className="py-2 text-sm">Instagram</li>
                        <li className="py-2 text-sm">LinkedIn</li>
                        <li className="py-2 text-sm">Twitter</li>
                        
                    </ul>
                </div>
                </div>
                

            </div>


        </div>
     );
}
 
export default Footer;