"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

// bottombar is only for mobile view
function Bottombar() {
    const pathname = usePathname();

    return (
      <section className="bottombar">
        <div className="bottombar_container">
        { sidebarLinks.map((link)=>{
              const isActive = (pathname.includes(link.route) && link.route.length>1) || pathname===link.route;

              return (    // instead of writing links multiple time here we created a folder constants and mapped from there
              <Link href={link.route} key={link.label} className={`bottombar_link ${isActive && 'bg-primary-500'}`}>
                <Image src={link.imgURL} alt={link.imgURL} width={24} height={24}/>
                <p className="text-subtle-medium text-light-1 max-sm:hidden">
                  {link.label.split(/\s+/)[0]}
                </p>
              </Link>
              )
            })
          }
        </div>
      </section>
    )
  }
  
  export default Bottombar;