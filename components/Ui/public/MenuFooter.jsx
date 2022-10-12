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
              <h4 className="footer-title">{t('footer:CONTACT_US')}</h4>
              <p>Medellín</p>
              <p>{t('footer:PHONE')} +57 320 702 3823</p>
              <p>Email: </p>
              <p>info@fundacionsoytusalud.org</p>
            </div>
          </div>
          <div>
            <h4 className="footer-title">{t('footer:I_ACCOMPANY_YOU')}</h4>
            <p className="description-footer">{t('footer:HELP_US')}</p>
            <button className="btn-footer">
              {t('footer:I_ACCOMPANY_YOU')}
            </button>
          </div>
        </div>
        <p className="footer-copyright">
          Copyrights Soy Tú Salud © {currentYear}. {t('footer:COPYRIGHT')}
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
              <h4 className="footer-title">{t('footer:CONTACT_US')}</h4>
              <p>Medellín</p>
              <p>{t('footer:PHONE')} +57 320 702 3823</p>
              <p>Email: </p>
              <p>info@fundacionsoytusalud.org</p>
            </div>
            <div>
              <h4 className="footer-title">{t('footer:I_ACCOMPANY_YOU')}</h4>
              <p className="description-footer">{t('footer:HELP_US')}</p>
              <button className="btn-footer">
                {t('footer:I_ACCOMPANY_YOU')}
              </button>
            </div>
          </div>
        </div>
        <p className="footer-copyright">
          Copyrights Soy Tú Salud © {currentYear}. {t('footer:COPYRIGHT')}
        </p>
      </footer>
    </>
  )
}
