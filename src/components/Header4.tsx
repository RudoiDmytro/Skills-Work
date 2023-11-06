import { FunctionComponent, useState, useCallback } from "react";
import Pricing2 from "./Pricing2";
import PortalPopup from "./PortalPopup";
import EN from "./EN";
import SignIn2 from "./SignIn2";
import { useNavigate } from "react-router-dom";
import styles from "./Header4.module.css";

const Header4: FunctionComponent = () => {
  const [isPricing2Open, setPricing2Open] = useState(false);
  const [isENOpen, setENOpen] = useState(false);
  const [isSignIn2PopupOpen, setSignIn2PopupOpen] = useState(false);
  const navigate = useNavigate();

  const onNavLinkContainer1Click = useCallback(() => {
    navigate("/tests2");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/job-list2");
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

  const openSignIn2Popup = useCallback(() => {
    setSignIn2PopupOpen(true);
  }, []);

  const closeSignIn2Popup = useCallback(() => {
    setSignIn2PopupOpen(false);
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/job-list2");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/assessment2");
  }, [navigate]);

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.frameParent}>
          <div className={styles.navLinkParent}>
            <div className={styles.navLink}>
              <b className={styles.home}>{`Skills&Work`}</b>
            </div>
            <div className={styles.navLink1} onClick={onNavLinkContainer1Click}>
              <div className={styles.testLibrary}>Бібліотека тестів</div>
            </div>
            <div className={styles.navLink2} onClick={onNavLinkContainer2Click}>
              <div className={styles.home}>Пошук роботи</div>
            </div>
            <div className={styles.navLink2} onClick={onNavLinkContainer3Click}>
              <div className={styles.home}>Роботодавці</div>
            </div>
            <div className={styles.navLink2} onClick={openPricing2}>
              <div className={styles.home}>Цінові плани</div>
            </div>
            <div className={styles.navLink5}>
              <div className={styles.home}>Підтримка клієнтів</div>
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
                src="/image-12@2x.png"
              />
              <div className={styles.englishParent}>
                <div className={styles.home}>Українська</div>
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
            <div className={styles.logo}>
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
                    src="/image-11@2x.png"
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
            <div className={styles.button1} onClick={openSignIn2Popup}>
              <div className={styles.signIn}>Увійти</div>
            </div>
            <div className={styles.button2} onClick={onButtonContainer1Click}>
              <div className={styles.signIn}>Пошук роботи</div>
            </div>
            <div className={styles.button2} onClick={onButtonContainer2Click}>
              <div className={styles.signIn}>Оцінка навичок</div>
            </div>
          </div>
        </div>
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
      {isSignIn2PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignIn2Popup}
        >
          <SignIn2 onClose={closeSignIn2Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header4;
