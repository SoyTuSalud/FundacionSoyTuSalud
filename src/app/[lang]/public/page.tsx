import { getDictionary } from "@/src/get-dictionary";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "../components/locale-switcher";
import Image from "next/image";
import Head from "next/head";
// import { LayoutMain } from "./layout";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      {/* <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>{dictionary.home.ABOUT_US}</p> */}

      <Head>
        <title>FundacionSoyTu | Home</title>
      </Head>
      <section className="">
        <div className="container mt-12">
          <div className="row align-items-center mt-4">
            <div className="col-lg-6">
              <div className="heading">
                <span className="heading__pre-title" data-lang="nostros">
                  {dictionary.home.ABOUT_US}
                </span>
                <h2 className="heading__title">
                  <span className="title-main-home">
                    {dictionary.common.FOUNDATION}
                  </span>{" "}
                  Soy Tú Salud
                </h2>
              </div>
              <p>
                {dictionary.home.FIRST_TEXT}{" "}
                <a href="https://www.fundacionsoytusalud.org">
                  {dictionary.common.FOUNDATION} Soy Tú Salud
                </a>{" "}
                {dictionary.home.SECOND_TEXT}.
              </p>
              <p className="pb-8">
                {" "}
                {dictionary.home.ON_THE}{" "}
                <a href="https://www.fundacionsoytusalud.org/">
                  {dictionary.common.FOUNDATION} Soy Tú Salud
                </a>{" "}
                {dictionary.home.THIRD_TEXT} :{" "}
              </p>
              <div className="row">
                <div className="col-md-6 col-lg-12">
                  <ul className="unordered-list">
                    <li>{dictionary.home.LIST_1}</li>
                    <li>{dictionary.home.LIST_2}</li>
                    <li>{dictionary.home.LIST_3}</li>
                    <li>{dictionary.home.LIST_4}</li>
                    <li>{dictionary.home.LIST_5}</li>
                  </ul>
                </div>
              </div>
              <a className="button button--primary" href="src/pages2#">
                {dictionary.home.MORE_ABOUT_US}
              </a>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="info-box flex items-center">
                <div className="absolute">
                  <Image
                    src="/about_layout.png"
                    alt="img"
                    width={700}
                    height={700}
                  />
                </div>
                <div className="relative box-content m-auto">
                  <Image
                    src="/gallery_2.png"
                    alt="img"
                    width={350}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section icons-section pt-0">
        <div className="container">
          <div className="row margin-bottom">
            <div className="col-12">
              <div className="heading heading--center">
                <span className="heading__pre-title">
                  {dictionary.common.SERVICES}
                </span>
                <h2 className="heading__title">
                  <span>{dictionary.home.WE_MAKE}</span>{" "}
                  <span>{dictionary.home.PEOPLE}</span>{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="icon-item">
                <div className="icon-item__img">
                  <div className="icon icon-item__icon icon--red">
                    <Image
                      src="/Logo_servicios1.png"
                      alt="img"
                      width={150}
                      height={150}
                    />
                  </div>

                  <div className="img--layout">
                    <Image
                      src="/icon_1-1.png"
                      alt="img"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div className="icon-item__text">
                  <p>{dictionary.home.MEDICAL_HELP}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
