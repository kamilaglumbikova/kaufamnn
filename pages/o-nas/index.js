import { Srisakdi } from "@next/font/google";
import Mapblock from "@/components/home/Mapblock";
import Referenceblock from "@/components/home/Referenceblock";
import Benefit from "@/components/home/Benefit";
import Image from "next/image";
import Pagetitle from "@/components/Pagetitle";

const srisakdi = Srisakdi({ subsets: ["latin"], weight: ["700"] });
export default function Onas() {
  return (
    <>
      <div className="border-t border-[#26272D]">
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:pl-[104px] lg-pr-[72px] px-[24px] pt-[48px] pb-[96px]">
            <div className="flex flex-col md:flex-row gap-[16px]">
              <div className="flex-1 lg:pl-[104px]">
                <Pagetitle 
                  title="O nás"
                  subtitle="O spoločnosti"
                />
                <div className={`${srisakdi.className} mt-[32px]`}>
                  <div className="text-[24px] leading-[32px] text-primary-gold">
                    "Dobrý obchod je taký, kde sú spokojní všetci zúčastnení."
                  </div>
                  <div className="text-[16px] leading-[19.2px]">(T. Baťa )</div>
                </div>
                <div className="mt-[32px]">
                  Spoločnosť KAUFMANN BAU s.r.o. vznikla z materskej firmy
                  FERMAN s.r.l. založenej v roku 2000 v Taliansku (Modena).
                  Svoju prvú pobočku otvorila spoločnosť na Slovensku v roku
                  2006, a to so zameraním na drevovýrobu. Prečo Slovensko?
                  Slovensko je po Švédsku, Fínsku a Rakúsku štvrtou najviac
                  zalesnenou krajinou Európy. Tento aspekt je dôležitý z
                  kultúrneho hľadiska pre remeselníkov a ich odbornú činnosť v
                  oblasti stolárstva/tesárstva čomu sa prevažne venuje naša
                  spoločnosť. So zúročenými dlhoročnými skúsenosťami a odbornou
                  prácou vzniká spoločnosť KAUFMANN BAU s.r.o., ktorá je
                  zameraná predovšetkým na montážne práce v oblasti stavebníctva
                  najmä v európskych krajinách kde vie spoločnosť ponúknuť
                  širokú škálu odborných pracovníkov. Ako firma vykonávame
                  remeselnú činnosť v 5 európskych krajinách: Slovensko,
                  Rakúsko, Taliansko, Nemecko, Švajčiarsko. Naša spoločnosť sa
                  primárne zameriava na montážne práce v oblasti hoteliérstva,
                  wellness centier, reštauračných zariadení a lodiarstva. Vďaka
                  spokojnosti našich klientov a dobre odvedenej práci tvoríme
                  dôležitú súčasť ich každodenného podnikania a radíme sa tak na
                  popredné miesta v oblasti montážnych prác pre európskych
                  partnerov.
                </div>
                <div className="flex flex-col gap-[16px] mt-[32px]">
                  <Benefit benefit="Benefit 1" />
                  <Benefit benefit="Benefit 2" />
                </div>
              </div>
              <div className="flex-1 pt-[48px] lg:pt-[83px] mx-[-24px] md:mx-0">
                <div>
                  <Image 
                    className="mx-auto"
                    src="/assets/onas.png"
                    alt="O nás"
                    width={640}
                    height={575}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Referenceblock title="Pozrite si naše referencie" subtitle="Každý projekt má svoj vlastný príbeh. Pozrite si galériu našich zrealizovaných projektov." />
      <Mapblock />
    </>
  );
}
