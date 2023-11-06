import { FunctionComponent } from "react";
import TabsNav from "./TabsNav";
import Property1Google from "./Property1Google";
import Divider from "./Divider";
import Property1GenericTextField from "./Property1GenericTextField";
import Button from "./Button";
import styles from "./SignUp2.module.css";

type SignUp2Type = {
  onClose?: () => void;
};

const SignUp2: FunctionComponent<SignUp2Type> = ({ onClose }) => {
  return (
    <div className={styles.signUp2}>
      <img className={styles.icons} alt="" src="/icons.svg" />
      <div className={styles.frameParent}>
        <div className={styles.tabsNavParent}>
          <TabsNav
            signUp="Реєстрація"
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
            tabsNavHeight="unset"
            tabsNavAlignSelf="stretch"
            signUpLeft="calc(50% - 49px)"
            signUpTextAlign="center"
          />
          <TabsNav
            signUp="Авторизація"
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
            tabsNavHeight="unset"
            tabsNavAlignSelf="stretch"
            signUpLeft="calc(50% - 54px)"
            signUpTextAlign="center"
          />
        </div>
        <section className={styles.signUpParent}>
          <div className={styles.signUp}>Реєстрація</div>
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
          <Divider
            oR="АБО"
            dividerWidth="454px"
            dividerAlignSelf="unset"
            oRFontSize="18px"
            oRFontFamily="Inter"
            oRFontWeight="100"
          />
          <div className={styles.frameGroup}>
            <div className={styles.socialMediaSignuploginParent}>
              <div className={styles.textFieldParent}>
                <Property1GenericTextField
                  property1GenericTextFieldWidth="220px"
                  property1GenericTextFieldGap="unset"
                  property1GenericTextFieldBorder="none"
                  property1GenericTextFieldFontFamily="unset"
                  property1GenericTextFieldFontSize="unset"
                  property1GenericTextFieldBackgroundColor="transparent"
                  property1GenericTextFieldAlignSelf="unset"
                />
                <Property1GenericTextField
                  property1GenericTextFieldWidth="220px"
                  property1GenericTextFieldGap="unset"
                  property1GenericTextFieldBorder="none"
                  property1GenericTextFieldFontFamily="unset"
                  property1GenericTextFieldFontSize="unset"
                  property1GenericTextFieldBackgroundColor="transparent"
                  property1GenericTextFieldAlignSelf="unset"
                />
              </div>
              <Property1GenericTextField
                label="Адреса електронної пошти"
                passwordHideSee={false}
                inputs={false}
                property1GenericTextFieldWidth="454px"
                property1GenericTextFieldGap="4px"
                property1GenericTextFieldBorder="unset"
                property1GenericTextFieldFontFamily="unset"
                property1GenericTextFieldFontSize="unset"
                property1GenericTextFieldBackgroundColor="unset"
                property1GenericTextFieldAlignSelf="unset"
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
                property1GenericTextFieldWidth="454px"
                property1GenericTextFieldGap="4px"
                property1GenericTextFieldBorder="unset"
                property1GenericTextFieldFontFamily="unset"
                property1GenericTextFieldFontSize="unset"
                property1GenericTextFieldBackgroundColor="unset"
                property1GenericTextFieldAlignSelf="unset"
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
                label="Повторіть пароль"
                passwordHideSee={false}
                inputs={false}
                property1GenericTextFieldWidth="454px"
                property1GenericTextFieldGap="4px"
                property1GenericTextFieldBorder="unset"
                property1GenericTextFieldFontFamily="unset"
                property1GenericTextFieldFontSize="unset"
                property1GenericTextFieldBackgroundColor="unset"
                property1GenericTextFieldAlignSelf="unset"
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
              signUp="Реєстрація"
              buttonBorderRadius="40px"
              buttonWidth="454px"
              buttonCursor="pointer"
              buttonBorder="none"
              buttonPadding="0"
              buttonPosition="relative"
              buttonFlexShrink="0"
              buttonOpacity="0.25"
              buttonAlignSelf="unset"
              frameDivLeft="calc(50% - 58px)"
              signUpDisplay="inline-block"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp2;
