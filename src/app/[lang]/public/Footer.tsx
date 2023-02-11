import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";
import Image from "next/image";

export default async function Footer({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const currentYear = new Date().getFullYear();
  const dictionary = await getDictionary(lang);

  return (
    <>
      <section className={"bottom-background"}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bottom-background__img">
                {" "}
                <Image
                  alt="footerLogo"
                  src="/bottom-bg.png"
                  priority={true}
                  width={400}
                  height={50}
                  layout="responsive"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container-footer">
          <div className="footer-container-one">
            <Image
              className=""
              src="/logo_vertical-white.png"
              width="165"
              height="100"
              alt="logo"
            />
            <div className="contact-info-footer">
              <h4 className="footer-title">{dictionary.footer.CONTACT_US}</h4>
              <p>Medellín</p>
              <p>{dictionary.footer.PHONE} +57 320 702 3823</p>
              <p>Email: </p>
              <p>info@fundacionsoytusalud.org</p>
            </div>
          </div>
          <div>
            <h4 className="footer-title">
              {dictionary.footer.I_ACCOMPANY_YOU}
            </h4>
            <p className="description-footer">{dictionary.footer.HELP_US}</p>
            <button className="btn-footer">
              {dictionary.footer.I_ACCOMPANY_YOU}
            </button>
          </div>
        </div>
        <p className="footer-copyright">
          Copyrights Soy Tú Salud © {currentYear}. {dictionary.footer.COPYRIGHT}
        </p>
      </footer>

      <footer className="footer-mobile">
        <div className="container-footer">
          <div className="img-footer-mobile">
            <Image
              src="/logo_vertical-white.png"
              width={150}
              height={150}
              alt="logo"
            />
          </div>
          <div>
            <div className="contact-info-footer">
              <h4 className="footer-title">{dictionary.footer.CONTACT_US}</h4>
              <p>Medellín</p>
              <p>{dictionary.footer.PHONE} +57 320 702 3823</p>
              <p>Email: </p>
              <p>info@fundacionsoytusalud.org</p>
            </div>
            <div>
              <h4 className="footer-title">
                {dictionary.footer.I_ACCOMPANY_YOU}
              </h4>
              <p className="description-footer">{dictionary.footer.HELP_US}</p>
              <button className="btn-footer">
                {dictionary.footer.I_ACCOMPANY_YOU}
              </button>
            </div>
          </div>
        </div>
        <p className="footer-copyright">
          Copyrights Soy Tú Salud © {currentYear}. {dictionary.footer.COPYRIGHT}
        </p>
      </footer>
    </>
  );
}
