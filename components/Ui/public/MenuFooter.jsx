import Image from 'next/image'

export const MenuFooter = ({ t }) => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <section className="bottom-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bottom-background__img">
                {' '}
                <Image
                  alt="footerLogo"
                  src="/bottom-bg.png"
                  priority={true}
                  width={500}
                  height={100}
                  layout="responsive"
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
              width="150"
              height="150"
              alt="logo"
            />
            <div className="contact-info-footer">
              <h4 className="footer-title">Contáctanos</h4>
              <p>Medellín</p>
              <p>Teléfono +57 320 702 3823</p>
              <p>Email: </p>
              <p>info@fundacionsoytusalud.org</p>
            </div>
          </div>
          <div>
            <h4 className="footer-title">TeAcompaño</h4>
            <p className="description-footer">
              Ayúdanos a cambiar la vida de los menos favorecidos en Colombia.
            </p>
            <button className="btn-footer">TE ACOMPAÑO</button>
          </div>
        </div>
        <p className="footer-copyright">
          Copyrights Soy Tú Salud © {currentYear}. {t('footer:copyrights')}
        </p>
      </footer>

      <footer className="footer-mobile">
        <div className="container-footer">
          <div className="img-footer-mobile">
            <Image
              src="/logo_vertical-white.png"
              width="150"
              height="150"
              alt="logo"
            />
          </div>
          <div>
            <div className="contact-info-footer">
              <h4 className="footer-title">Contáctanos</h4>
              <p>Medellín</p>
              <p>Teléfono +57 320 702 3823</p>
              <p>Email: </p>
              <p>info@fundacionsoytusalud.org</p>
            </div>
            <div>
              <h4 className="footer-title">TeAcompaño</h4>
              <p className="description-footer">
                Ayúdanos a cambiar la vida de los menos favorecidos en Colombia.
              </p>
              <button className="btn-footer">TE ACOMPAÑO</button>
            </div>
          </div>
        </div>
        <p className="footer-copyright">
          Copyrights Soy Tú Salud © {currentYear}. {t('footer:copyrights')}
        </p>
      </footer>
    </>
  )
}
