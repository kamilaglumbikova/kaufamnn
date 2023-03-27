import Pagetitle from "@/components/Pagetitle";
import Referenceitem from "@/components/reference/Referenceitem";
import { referenceData } from '../../data/data';

export default function Referencie() {
  
  return (
    <div className="border-t border-[#26272D]">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:px-[104px] px-[24px] pt-[48px] pb-[96px]">
          <Pagetitle title="REFERENCIE" subtitle="Na čo sme najviac hrdí" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-[16px] gap-y-[16px] md:gap-y-[32px] mt-[32px]">
              {referenceData.reference.map((item, index) => (
                <Referenceitem item={item} key={index} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
