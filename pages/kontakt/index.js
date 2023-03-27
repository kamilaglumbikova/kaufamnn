import Contactitem from "@/components/contact/Contactitem";
import Info from "@/components/contact/Info";
import Referenceblock from "@/components/home/Referenceblock";
import Pagetitle from "@/components/Pagetitle";

export default function Kontakt() {
  return (
    <div className="border-t border-[#26272D]">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:pl-[104px] lg-pr-[72px] px-[24px] pt-[48px] pb-[96px]">
          <Pagetitle title="KONTAKT" subtitle="Kontakty" />
          <p className="mt-[32px]">
            Máte na nás nejakú otázku? Tak nás neváhajte kontaktovať
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-[16px] mt-[32px]">
            <Info
              icon="/assets/contact/briefcase.svg"
              title="ÚDAJE FIRMY"
              subtitle1="KAUFMANN BAU s.r.o."
              subtitle2="IČO: 52599141IČ DPH: SK2121079686"
              fontweight="font-medium"
            />
            <Info
              icon="/assets/reference/point.svg"
              title="KDE NÁS NÁJDETE"
              subtitle1="Nižný Mirošov 7"
              subtitle2="090 11 Nižný Mirošov"
            />
            <Info
              icon="/assets/contact/envelope.svg"
              title="NAPÍŠTE NÁM"
              subtitle1="info@kaufmann.sk"
              subtitle2="PO-PIA 8:00-16:00"
            />
          </div>
          <div className="bg-[#26272D] p-[32px] mt-[32px]">
            <Pagetitle title="" subtitle="Vedenie" />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[16px] mt-[32px]">
              <Contactitem
                urlImg="/assets/contact/petervook.png"
                position="CEO"
                name="Peter Vook"
                language={["uk", "it", "sk"]}
                phone="+421 915 259 817"
                email="vook@kaufmann.sk"
              />
              <Contactitem
                urlImg="/assets/contact/dominikmoson.png"
                position="CEO"
                name="Ing. Dominik Mošoň"
                language={["sk", "de", "uk"]}
                phone="+421 915 259 817"
                email="moson@kaufmann.sk"
              />
              <Contactitem
                urlImg="/assets/contact/none.png"
                position="BUSINESS DEVELOP"
                name="Luca Pancaldi"
                language={["uk", "it", "fr", "de"]}
                phone="+39 335 804 5113"
                email="pancaldi@kaufmann.sk"
              />
              <Contactitem
                urlImg="/assets/contact/gabrielmusig.png"
                position="BUSINESS DEVELOP"
                name="Gabriel Musig"
                language={["it", "sk"]}
                phone="+39 333 632 9893"
                email="gabrlele@kaufmann.sk"
              />
            </div>
            <div className="mt-[48px]">
              <Pagetitle title="" subtitle="Office" />
              <div className="grid md:grid-cols-2 grid-cols-1 gap-[16px] mt-[32px]">
                <Contactitem
                  urlImg="/assets/contact/janagajdosova.png"
                  position="EKONOMICKÉ ODDELENIE - PERSONALISTIKA"
                  name="Ing. Jana Gajdošová"
                  language={["uk", "sk"]}
                  phone="+421 948 282 469"
                  email="gajdosova@kaufmann.sk"
                />
                <Contactitem
                  urlImg="/assets/contact/none.png"
                  position="ROZPOČTY A CENOTVORBA"
                  name="Michal Kollár"
                  language={["uk", "sk"]}
                  phone="+421 917 723 720"
                  email="ponuka@kaufmann.sk"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Referenceblock title="Pozrite si naše referencie" subtitle="Každý projekt má svoj vlastný príbeh. Pozrite si galériu našich zrealizovaných projektov." />
    </div>
  );
}
