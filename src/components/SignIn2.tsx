import { FunctionComponent, useState } from "react";
import SignUp2 from "./SignUp2";
import PortalPopup from "./PortalPopup";
import TabsNav from "./TabsNav";
import Property1Google from "./Property1Google";
import Divider from "./Divider";
import Property1GenericTextField from "./Property1GenericTextField";
import Button from "./Button";
import styles from "./SignIn2.module.css";

type SignIn2Type = {
  onClose?: () => void;
};

const SignIn2: FunctionComponent<SignIn2Type> = ({ onClose }) => {
  const [isSignUp2PopupOpen, setSignUp2PopupOpen] = useState(false);
  return (
    <div className={styles.signIn2}>
      <img className={styles.icons} alt="" src="/icons.svg" />
      <section className={styles.frameParent}>
        <div className={styles.tabsNavParent}>
          <TabsNav
            signUp="Зареєструватися"
            tabsNavBorder="none"
            tabsNavPadding="0"
            tabsNavPosition="relative"
            tabsNavFlexShrink="unset"
            tabsNavBackgroundColor="rgba(17, 17, 17, 0.25)"
            tabsNavCursor="pointer"
            tabsNavWidth="unset"
            tabsNavFlex="1"
            signUpTop="calc(50% - 11px)"
            signUpFontFamily="Inter"
            signUpDisplay="inline-block"
            tabsNavHeight="56px"
            tabsNavAlignSelf="unset"
            signUpLeft="calc(50% - 76px)"
            signUpTextAlign="center"
          />
          <TabsNav
            signUp="Авторизація"
            tabsNavBorder="none"
            tabsNavPadding="0"
            tabsNavPosition="relative"
            tabsNavFlexShrink="unset"
            tabsNavBackgroundColor="#111"
            tabsNavCursor="unset"
            tabsNavWidth="unset"
            tabsNavFlex="1"
            signUpTop="calc(50% - 11px)"
            signUpFontFamily="Inter"
            signUpDisplay="inline-block"
            tabsNavHeight="56px"
            tabsNavAlignSelf="unset"
            signUpLeft="calc(50% - 54px)"
            signUpTextAlign="center"
          />
        </div>
        <div className={styles.signInParent}>
          <div className={styles.signIn}>Авторизація</div>
          <div className={styles.frameWrapper}>
            <div className={styles.socialMediaSignuploginParent}>
              <Property1Google
                socialMediaLogo="/social-media-logo1.svg"
                continueWithGoogle="Реєстрація через Facebook"
                property1GoogleWidth="454px"
                property1GoogleHeight="64px"
                property1GooglePosition="relative"
                property1GoogleFlexShrink="0"
                property1GoogleAlignSelf="unset"
                frameDivTop="calc(50% - 15.5px)"
                frameDivLeft="calc(50% - 145.5px)"
                frameDivJustifyContent="center"
                frameDivGap="16px"
                socialMediaLogoWidth="32px"
                socialMediaLogoHeight="32px"
                socialMediaLogoOverflow="unset"
                socialMediaLogoFlexShrink="unset"
                continueWithGoogleFontSize="18px"
                continueWithGoogleFontFamily="Inter"
              />
              <Property1Google
                socialMediaLogo="/social-media-logo11.svg"
                continueWithGoogle="Реєстрація через Google"
                property1GoogleWidth="454px"
                property1GoogleHeight="64px"
                property1GooglePosition="relative"
                property1GoogleFlexShrink="0"
                property1GoogleAlignSelf="unset"
                frameDivTop="calc(50% - 12.5px)"
                frameDivLeft="calc(50% - 129.5px)"
                frameDivJustifyContent="center"
                frameDivGap="16px"
                socialMediaLogoWidth="24px"
                socialMediaLogoHeight="24px"
                socialMediaLogoOverflow="hidden"
                socialMediaLogoFlexShrink="0"
                continueWithGoogleFontSize="18px"
                continueWithGoogleFontFamily="Inter"
              />
            </div>
          </div>
          <Divider
            oR="АБО"
            dividerWidth="unset"
            dividerAlignSelf="stretch"
            oRFontSize="18px"
            oRFontFamily="Inter"
            oRFontWeight="100"
          />
          <div className={styles.frameGroup}>
            <div className={styles.textFieldParent}>
              <Property1GenericTextField
                label="Адреса електронної пошти"
                passwordHideSee={false}
                inputs={false}
                property1GenericTextFieldWidth="unset"
                property1GenericTextFieldGap="4px"
                property1GenericTextFieldBorder="unset"
                property1GenericTextFieldFontFamily="unset"
                property1GenericTextFieldFontSize="unset"
                property1GenericTextFieldBackgroundColor="unset"
                property1GenericTextFieldAlignSelf="stretch"
                textFieldBackgroundColor="transparent"
                inputsPosition="relative"
                inputsTop="unset"
                inputsLeft="unset"
                inputsFlexDirection="unset"
                inputsAlignItems="unset"
                inputsJustifyContent="unset"
                inputsFontSize="14px"
                inputsFontFamily="Poppins"
                inputsColor="#ee1d52"
                inputsTextAlign="left"
              />
              <Property1GenericTextField
                label="Пароль"
                passwordHideSee={false}
                inputs={false}
                property1GenericTextFieldWidth="unset"
                property1GenericTextFieldGap="4px"
                property1GenericTextFieldBorder="unset"
                property1GenericTextFieldFontFamily="unset"
                property1GenericTextFieldFontSize="unset"
                property1GenericTextFieldBackgroundColor="unset"
                property1GenericTextFieldAlignSelf="stretch"
                textFieldBackgroundColor="transparent"
                inputsPosition="relative"
                inputsTop="unset"
                inputsLeft="unset"
                inputsFlexDirection="unset"
                inputsAlignItems="unset"
                inputsJustifyContent="unset"
                inputsFontSize="14px"
                inputsFontFamily="Poppins"
                inputsColor="#ee1d52"
                inputsTextAlign="left"
              />
            </div>
            <Button
              icons="/icons1.svg"
              signUp="Авторизуватися"
              buttonBorderRadius="40px"
              buttonWidth="unset"
              buttonCursor="pointer"
              buttonBorder="none"
              buttonPadding="0"
              buttonPosition="relative"
              buttonFlexShrink="0"
              buttonOpacity="0.25"
              buttonAlignSelf="stretch"
              frameDivLeft="calc(50% - 86.5px)"
              signUpDisplay="inline-block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn2;
