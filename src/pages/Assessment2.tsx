import { FunctionComponent, useState, useCallback } from "react";
import Pricing2 from "../components/Pricing2";
import PortalPopup from "../components/PortalPopup";
import EN from "../components/EN";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import SizeMediumPositionPrimary from "../components/SizeMediumPositionPrimary";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./Assessment2.module.css";

const Assessment2: FunctionComponent = () => {
  const [isPricing2Open, setPricing2Open] = useState(false);
  const [isENOpen, setENOpen] = useState(false);
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/homepage2");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/assessment2");
  }, [navigate]);

  const onNavLinkContainer3Click = useCallback(() => {
    navigate("/employers2");
  }, [navigate]);

  const openPricing2 = useCallback(() => {
    setPricing2Open(true);
  }, []);

  const closePricing2 = useCallback(() => {
    setPricing2Open(false);
  }, []);

  const openEN = useCallback(() => {
    setENOpen(true);
  }, []);

  const closeEN = useCallback(() => {
    setENOpen(false);
  }, []);

  return (
    <>
      <div className={styles.assessment2}>
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <Breadcrumb
                label="Оцінка навичок"
                label1="додому"
                prop="/ Пошук тестів /"
                label2="Оцінка навичок"
                showLabel={false}
                breadcrumbPosition="unset"
                breadcrumbTop="unset"
                breadcrumbLeft="unset"
                breadcrumbWidth="unset"
                breadcrumbAlignSelf="stretch"
              />
            </div>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <div className={styles.frame3}>
              <div className={styles.navigation}>
                <div className={styles.frameParent}>
                  <div className={styles.navLinkParent}>
                    <div
                      className={styles.navLink}
                      onClick={onNavLinkContainerClick}
                    >
                      <div className={styles.testLibrary}>Домашня сторінка</div>
                    </div>
                    <div className={styles.navLink1}>
                      <b className={styles.testLibrary}>Бібліотека тестів</b>
                    </div>
                    <div
                      className={styles.navLink}
                      onClick={onNavLinkContainer2Click}
                    >
                      <div className={styles.testLibrary}>Пошук роботи</div>
                    </div>
                    <div
                      className={styles.navLink}
                      onClick={onNavLinkContainer3Click}
                    >
                      <div className={styles.testLibrary}>Роботодавці</div>
                    </div>
                    <div className={styles.navLink} onClick={openPricing2}>
                      <div className={styles.testLibrary}>Цінові плани</div>
                    </div>
                    <div className={styles.navLink5}>
                      <div className={styles.testLibrary}>
                        Підтримка клієнтів
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.phonecallParent}>
                      <img
                        className={styles.phonecallIcon}
                        alt=""
                        src="/phonecall.svg"
                      />
                      <div className={styles.div}>+380-63-619-04-36</div>
                    </div>
                    <div className={styles.navLink6} onClick={openEN}>
                      <img
                        className={styles.image1Icon}
                        alt=""
                        src="/image-13@2x.png"
                      />
                      <div className={styles.englishParent}>
                        <div className={styles.testLibrary}>Українська</div>
                        <img
                          className={styles.fichevronDownIcon}
                          alt=""
                          src="/fichevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.navigation1}>
                  <div className={styles.logoParent}>
                    <div className={styles.phonecallParent}>
                      <img
                        className={styles.briefcase1Icon}
                        alt=""
                        src="/briefcase-1.svg"
                      />
                      <div className={styles.skillswork}>{`Skills&Work`}</div>
                    </div>
                    <div className={styles.search}>
                      <div className={styles.frameContainer}>
                        <div className={styles.image1Parent}>
                          <img
                            className={styles.image1Icon1}
                            alt=""
                            src="/image-14@2x.png"
                          />
                          <div className={styles.div}>Україна</div>
                          <img
                            className={styles.caretdownIcon}
                            alt=""
                            src="/caretdown.svg"
                          />
                        </div>
                        <div className={styles.frameChild} />
                        <div className={styles.fisearchParent}>
                          <img
                            className={styles.fisearchIcon}
                            alt=""
                            src="/fisearch.svg"
                          />
                          <div className={styles.jobTittleKeyword}>
                            Назва роботи, ключове слово, компанія
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <img
                      className={styles.bellringingIcon}
                      alt=""
                      src="/property-1true.svg"
                    />
                    <img
                      className={styles.buttonChild}
                      alt=""
                      src="/ellipse-181@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frame4}>
              <div className={styles.job}>
                <div className={styles.heading}>
                  <div className={styles.englishBasicFreeContainer}>
                    <span>{`English (Basic) `}</span>
                    <span className={styles.free}>FREE</span>
                  </div>
                </div>
                <div className={styles.company}>
                  <div className={styles.info}>
                    <div className={styles.theEnglishLanguage}>
                      Тест на знання англійської мови призначений для оцінки
                      здатності кандидатів використовувати та розуміти
                      англійську мову. Тест допоможе оцінити рівень володіння
                      англійською мовою. Цей тест містить 15 питань. На
                      виконання тесту у вас буде 10 хвилин. Вам потрібно набрати
                      50% балів, щоб скласти тест.
                    </div>
                  </div>
                </div>
                <div className={styles.company1}>
                  <div className={styles.info}>
                    <div className={styles.theEnglishLanguage}>
                      Примітка. Зміна вкладок, згортання або інший
                      несправедливий спосіб призведе до негайного припинення
                      тестування
                    </div>
                  </div>
                </div>
                <img
                  className={styles.jobChild}
                  alt=""
                  src="/calendarblank1.svg"
                />
                <div className={styles.adbanceFilter}>
                  <div className={styles.inputField}>
                    <img
                      className={styles.image3Icon}
                      alt=""
                      src="/image-3@2x.png"
                    />
                    <div className={styles.jobTittleKeyword}>10 Хвилин</div>
                  </div>
                  <div className={styles.inputField}>
                    <img
                      className={styles.image3Icon}
                      alt=""
                      src="/image-31@2x.png"
                    />
                    <div className={styles.jobTittleKeyword}>20 Питань(ня)</div>
                  </div>
                  <div className={styles.devider} />
                  <div className={styles.buttonWrapper}>
                    <SizeMediumPositionPrimary
                      primary="Розпочати зараз"
                      sizeMediumPositionPrimaryBackgroundColor="#d14d72"
                    />
                  </div>
                </div>
                <img
                  className={styles.jobChild}
                  alt=""
                  src="/calendarblank1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frame5}>
            <div className={styles.frameItem} />
          </div>
        </div>
        <ContainerFooter dimensionCode="/image-2@2x.png" />
      </div>
      {isPricing2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePricing2}
        >
          <Pricing2/>
        </PortalPopup>
      )}
      {isENOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEN}
        >
          <EN />
        </PortalPopup>
      )}
    </>
  );
};

export default Assessment2;
