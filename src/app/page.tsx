'use client'
import Image from "next/image";
import Ravaninfo from "@/components/phadimage/ravaninfo";
import UmarKotinfo from "@/components/phadimage/umarkot";
import Ramdevinfo from "@/components/phadimage/ramdevinfo";
import Pabujiinfo from "@/components/phadimage/pabujiinfo";
import PabujiWeddinginfo from "@/components/phadimage/pabuji-wedding-info";
import Demajiinfo from "@/components/phadimage/demaji-info";
import RoofNathinfo from "@/components/phadimage/roopnathinfo";
import BhatisCourt from "@/components/phadimage/BhatisCourt";
import PabujiinfoCopy from "@/components/copies/pabujiinfoCopy";
import Chando from "@/components/phadimage/Chando";
import DemajiinfoCopy from "@/components/copies/demaji-infoCpy";
import Salji from "@/components/phadimage/Salji";
import Harmal from "@/components/phadimage/Harmal";
import MirzaKhan from "@/components/phadimage/MirzaKhan";
import GujaoWell from "@/components/phadimage/GujaoWell";
import Sati from "@/components/phadimage/Sati";
import RoopNathinfoCopy from "@/components/copies/roopnathinfoCopy";
import HermalJogi from "@/components/phadimage/HermalJogi";
import Kesarkalmi from "@/components/phadimage/KesarKalmi";
import Deval from "@/components/phadimage/Deval";

export default function Home() {



  return (
    <div className="h-screen flex items-center justify-center relative w-full overflow-hidden">
      <div className="w-full relative">
        <Image src='/Phad1.jpg' width={1000} height={800} alt="Image" className="object-cover w-full" />
      <Ravaninfo/>
      <UmarKotinfo/>
      <Ramdevinfo/>
      <Pabujiinfo/>
      <PabujiinfoCopy/>
      <Chando/>
      <DemajiinfoCopy/>
      <Salji/>
      <Harmal/>
      <MirzaKhan/>
      <GujaoWell/>
      <Sati/>
      <PabujiWeddinginfo/>
      <Demajiinfo/>
      <RoofNathinfo/>
      <HermalJogi/>
      <Kesarkalmi/>
      <Deval/>
      <RoopNathinfoCopy/>
      <BhatisCourt/>
      </div>
    </div>
  );
}
