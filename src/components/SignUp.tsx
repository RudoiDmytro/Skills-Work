import { FunctionComponent } from "react";
import TabsNav from "./TabsNav";
import Property1Google from "./Property1Google";
import Divider from "./Divider";
import Property1GenericTextField from "./Property1GenericTextField";
import Button from "./Button";
import styles from "./SignUp.module.css";

type SignUpType = {
  onClose?: () => void;
};

const SignUp: FunctionComponent<SignUpType> = ({ onClose }) => {
  return (
    <div className={styles.signUp}>
      <img className={styles.icons} alt="" src="/icons.svg" />
      <div className={styles.frameParent}>
        <div className={styles.tabsNavParent}>
          <TabsNav
            signUp="Sign up"
            tabsNavBorder="none"
            tabsNavPadding="0"
            tabsNavPosition="relative"
            tabsNavFlexShrink="0"
            tabsNavBackgroundColor="#111"
            tabsNavCursor="unset"
            tabsNavWidth="302px"
            tabsNavFlex="unset"
            signUpTop="calc(50% - 11px)"
            signUpFontFamily="Inter"
            signUpDisplay="inline-block"
            tabsNavHeight="56px"
            tabsNavAlignSelf="unset"
            signUpLeft="calc(50% - 31px)"
            signUpTextAlign="left"
          />
          <TabsNav
            signUp="Log in"
            tabsNavBorder="none"
            tabsNavPadding="0"
            tabsNavPosition="relative"
            tabsNavFlexShrink="0"
            tabsNavBackgroundColor="rgba(17, 17, 17, 0.25)"
            tabsNavCursor="pointer"
            tabsNavWidth="302px"
            tabsNavFlex="unset"
            signUpTop="calc(50% - 11px)"
            signUpFontFamily="Inter"
            signUpDisplay="inline-block"
            tabsNavHeight="56px"
            tabsNavAlignSelf="unset"
            signUpLeft="calc(50% - 31px)"
            signUpTextAlign="left"
          />
        </div>
        <section className={styles.signUpParent}>
          <div className={styles.signUp1}>Sign up</div>
          <div className={styles.socialMediaSignuploginParent}>
            <Property1Google
              socialMediaLogo="/social-media-logo1.svg"
              continueWithGoogle="Sign up with Facebook"
              property1GoogleWidth="454px"
              property1GoogleHeight="64px"
              property1GooglePosition="relative"
              property1GoogleFlexShrink="0"
              property1GoogleAlignSelf="unset"
              frameDivTop="calc(50% - 15.5px)"
              frameDivLeft="calc(50% - 121px)"
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
              continueWithGoogle="Sign up with Google"
              property1GoogleWidth="454px"
              property1GoogleHeight="64px"
              property1GooglePosition="relative"
              property1GoogleFlexShrink="0"
              property1GoogleAlignSelf="unset"
              frameDivTop="calc(50% - 12.5px)"
              frameDivLeft="calc(50% - 105px)"
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
            oR="OR"
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
                  property1GenericTextFieldFontFamily="Poppins"
                  property1GenericTextFieldFontSize="16px"
                  property1GenericTextFieldBackgroundColor="transparent"
                  property1GenericTextFieldAlignSelf="unset"
                />
                <Property1GenericTextField
                  property1GenericTextFieldWidth="220px"
                  property1GenericTextFieldGap="unset"
                  property1GenericTextFieldBorder="none"
                  property1GenericTextFieldFontFamily="Poppins"
                  property1GenericTextFieldFontSize="16px"
                  property1GenericTextFieldBackgroundColor="transparent"
                  property1GenericTextFieldAlignSelf="unset"
                />
              </div>
              <Property1GenericTextField
                label="Email address"
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
                label="Password"
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
                label="Repeat password"
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
              signUp="Sign up"
              buttonBorderRadius="40px"
              buttonWidth="454px"
              buttonCursor="pointer"
              buttonBorder="none"
              buttonPadding="0"
              buttonPosition="relative"
              buttonFlexShrink="0"
              buttonOpacity="0.25"
              buttonAlignSelf="unset"
              frameDivLeft="calc(50% - 42px)"
              signUpDisplay="inline-block"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
