import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { referenceData } from "../../data/data";
import Pagetitle from "@/components/Pagetitle";
import Info from "@/components/referenceDetail/Info";
import Link from "next/link";

const ReferenceDetail = () => {
  const router = useRouter();
  const [detailId, setDetailId] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      setDetailId(router.query.id);
      const itemDetail = referenceData.reference.find(
        (itm) => itm.id === router.query.id
      );
      setItem(itemDetail);
    }
  }, [router.isReady]);

  return (
    <div className="border-t border-[#26272D]">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:pl-[104px] lg-pr-[72px] px-[24px] pt-[48px] pb-[96px]">
          <Pagetitle title="REFERENCIE" subtitle={item.title} />
          <div className="grid md:grid-cols-4 grid-cols-1 gap-[16px] mt-[96px]">
            <Info
              icon="/assets/reference/hammer.svg"
              title="Realizovali sme"
              subtitle="drevený obklad"
            />
            <Info
              icon="/assets/reference/calendar.svg"
              title="Rok stavby"
              subtitle="2019"
            />
            <Info
              icon="/assets/reference/point.svg"
              title="Lokalita"
              subtitle="Alpe di Siusi, Taliansko"
            />
            <Info
              icon="/assets/reference/file.svg"
              title="Referenčný list"
              subtitle="Stiahnúť"
            />
          </div>
          <div className="mt-[96px]">Images</div>
          <div className="bg-[#26272D] p-[32px] mt-[96px]">
            <div className="font-playfair text-[32px] leading-[42.66px] font-medium">
              Popis zakázky
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[16px] gap-y-[32px] mt-[32px]">
              <p>
                Sagittis tellus aenean venenatis ante faucibus risus non semper.
                In egestas neque nulla et egestas sed eget. Sem pretium vitae
                non urna lectus at nam. Velit lacus vitae morbi non faucibus
                pellentesque. Egestas velit sed leo id. Neque at mauris tortor
                mauris consectetur. Diam odio non ac ac in velit. Scelerisque
                ante nunc dignissim scelerisque urna viverra malesuada sit
                nulla. Erat nec dolor ut congue mattis tortor eu pharetra sit.
                Et morbi vitae sed mattis ipsum gravida eu. Dis tortor faucibus
                egestas ultricies dui rhoncus. Diam neque morbi pharetra varius
                nisl quisque velit volutpat. Cras fermentum volutpat suspendisse
                enim non.
              </p>
              <p>
                Sagittis tellus aenean venenatis ante faucibus risus non semper.
                In egestas neque nulla et egestas sed eget. Sem pretium vitae
                non urna lectus at nam. Velit lacus vitae morbi non faucibus
                pellentesque. Egestas velit sed leo id. Neque at mauris tortor
                mauris consectetur. Diam odio non ac ac in velit. Scelerisque
                ante nunc dignissim scelerisque urna viverra malesuada sit
                nulla. Erat nec dolor ut congue mattis tortor eu pharetra sit.
                Et morbi vitae sed mattis ipsum gravida eu. Dis tortor faucibus
                egestas ultricies dui rhoncus. Diam neque morbi pharetra varius
                nisl quisque velit volutpat. Cras fermentum volutpat suspendisse
                enim non.
              </p>
              <p>
                Sagittis tellus aenean venenatis ante faucibus risus non semper.
                In egestas neque nulla et egestas sed eget. Sem pretium vitae
                non urna lectus at nam. Velit lacus vitae morbi non faucibus
                pellentesque. Egestas velit sed leo id. Neque at mauris tortor
                mauris consectetur. Diam odio non ac ac in velit. Scelerisque
                ante nunc dignissim scelerisque urna viverra malesuada sit
                nulla. Erat nec dolor ut congue mattis tortor eu pharetra sit.
                Et morbi vitae sed mattis ipsum gravida eu. Dis tortor faucibus
                egestas ultricies dui rhoncus. Diam neque morbi pharetra varius
                nisl quisque velit volutpat. Cras fermentum volutpat suspendisse
                enim non.
              </p>
              <p>
                Sagittis tellus aenean venenatis ante faucibus risus non semper.
                In egestas neque nulla et egestas sed eget. Sem pretium vitae
                non urna lectus at nam. Velit lacus vitae morbi non faucibus
                pellentesque. Egestas velit sed leo id. Neque at mauris tortor
                mauris consectetur. Diam odio non ac ac in velit. Scelerisque
                ante nunc dignissim scelerisque urna viverra malesuada sit
                nulla. Erat nec dolor ut congue mattis tortor eu pharetra sit.
                Et morbi vitae sed mattis ipsum gravida eu. Dis tortor faucibus
                egestas ultricies dui rhoncus. Diam neque morbi pharetra varius
                nisl quisque velit volutpat. Cras fermentum volutpat suspendisse
                enim non.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
              className="border border-primary-gold h-[48px] px-[32px] mt-[96px] flex items-center"
                href='/referencie'
              >SPÄŤ NA REFERENCIE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDetail;
