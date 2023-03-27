import Referenceblock from "@/components/home/Referenceblock";
import Pagetitle from "@/components/Pagetitle";
import Sluzbyitem from "@/components/sluzby/Sluzbyitem";

export default function Sluzby() {
  const data = {
    sluzby: [
      {
        imgUrl: "/assets/sluzby/sluzby_drevo.png",
        title: "Drevo",
        text: "Naša spoločnosť zastrešuje širokú škálu služieb v oblasti drevárstva. Obory v ktorých pôsobí naša spoločnosť: - Stolárske práce vo výrobe",
        link: "#",
      },
      {
        imgUrl: "/assets/sluzby/sluzby_stavebnictvo.png",
        title: "Stavebníctvo",
        text: "Odbory, v ktorých pôsobíme: - Suché stavby Montáž nosných konštrukcií, sadrokartónu, tmelenie, brúsenie.",
        link: "#",
      },
      {
        imgUrl: "/assets/sluzby/sluzby_elektroinstalacie.png",
        title: "Elektroinštalácie",
        text: "Naša spoločnosť pôsobí v tomto sektore hlavne v montážach elektroinštalácií v apartmánových domoch, hoteloch, jachtách a pod...",
        link: "#",
      },
      {
        imgUrl: "/assets/sluzby/sluzby_kov.png",
        title: "Kov",
        text: "Zastrešujeme rôzne priemyselné oblasti v poskytovaní našich služieb v obore zvárania. Venujeme sa zváraniu v oblasti potrubí- rafinérie, kotolne, teplárne, ...",
        link: "#",
      },
    ],
  };
  return (
    <>
      <div className="border-t border-[#26272D]">
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:pl-[104px] lg-pr-[72px] px-[24px] pt-[48px] pb-[96px]">
            <Pagetitle title="SLUŽBY" subtitle="Naša práca, naše hobby" />
            <div className="mt-[32px] max-w-[504px]">
              Naša spoločnosť sa zameriava na remeselné práce v oblasti
              stavebníctva v interiéri a exteriéri prevažne v európskych
              krajinách: Taliansko, Rakúsko, Švajčiarsko, Nemecko.
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[16px] mt-[32px]">
              {data.sluzby.map((item, index) => (
                <Sluzbyitem
                key={index}
                item={item}
                index={index}
              />
              ))}
            </div>
          </div>
        </div>
        <Referenceblock title="Pozrite si naše referencie" subtitle="Každý projekt má svoj vlastný príbeh. Pozrite si galériu našich zrealizovaných projektov." />
      </div>
    </>
  );
}
