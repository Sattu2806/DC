'use client'
import Image from "next/image";
import Ravaninfo from "@/components/phadimage/ravaninfo";
import UmarKotinfo from "@/components/phadimage/umarkot";
import Ramdevinfo from "@/components/phadimage/ramdevinfo";
import Pabujiinfo from "@/components/phadimage/pabujiinfo";
import PabujiWeddinginfo from "@/components/phadimage/pabuji-wedding-info copy";
import Demajiinfo from "@/components/phadimage/demaji-info";
import RoofNathinfo from "@/components/phadimage/roopnathinfo";

export default function Home() {



  return (
    <div className="h-screen flex items-center justify-center relative w-full overflow-hidden">
      <div className="w-full relative">
        <Image src='/Phad1.jpg' width={1000} height={800} alt="Image" className="object-cover w-full" />
      <Ravaninfo/>
      <UmarKotinfo/>
      <Ramdevinfo/>
      <Pabujiinfo/>
      <PabujiWeddinginfo/>
      <Demajiinfo/>
      <RoofNathinfo/>

      </div>
    </div>
  );
}
