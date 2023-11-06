import { FunctionComponent, useState } from "react";
import SignUp from "./SignUp";
import PortalPopup from "./PortalPopup";
import TabsNav from "./TabsNav";
import Property1Google from "./Property1Google";
import Divider from "./Divider";
import EmailFormContainer from "./EmailFormContainer";
import styles from "./SignIn.module.css";

type SignInType = {
  onClose?: () => void;
};

const SignIn: FunctionComponent<SignInType> = ({ onClose }) => {
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState(false);
  return (
    <div className={styles.signIn}>
      <img className={styles.icons} alt="" src="/icons.svg" />
      <section className={styles.frameParent}>
        <div className={styles.tabsNavParent}>
          <TabsNav
            signUp="Sign up"
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
            signUpLeft="calc(50% - 31px)"
            signUpTextAlign="left"
          />
          <TabsNav
            signUp="Sign in"
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
            signUpLeft="calc(50% - 31px)"
            signUpTextAlign="left"
          />
        </div>
        <div className={styles.signInParent}>
          <div className={styles.signIn1}>Sign in</div>
          <div className={styles.socialMediaSignuploginParent}>
            <Property1Google
              socialMediaLogo="/social-media-logo1.svg"
              continueWithGoogle="Sign in with Facebook"
              property1GoogleWidth="unset"
              property1GoogleHeight="64px"
              property1GooglePosition="relative"
              property1GoogleFlexShrink="0"
              property1GoogleAlignSelf="stretch"
              frameDivTop="calc(50% - 15.5px)"
              frameDivLeft="calc(50% - 110px)"
              frameDivJustifyContent="space-between"
              frameDivGap="unset"
              socialMediaLogoWidth="32px"
              socialMediaLogoHeight="32px"
              socialMediaLogoOverflow="unset"
              socialMediaLogoFlexShrink="unset"
              continueWithGoogleFontSize="18px"
              continueWithGoogleFontFamily="Inter"
            />
            <Property1Google
              socialMediaLogo="/social-media-logo11.svg"
              continueWithGoogle="Sign in with Google"
              property1GoogleWidth="unset"
              property1GoogleHeight="64px"
              property1GooglePosition="relative"
              property1GoogleFlexShrink="0"
              property1GoogleAlignSelf="stretch"
              frameDivTop="calc(50% - 12.5px)"
              frameDivLeft="calc(50% - 94px)"
              frameDivJustifyContent="space-between"
              frameDivGap="unset"
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
            dividerWidth="unset"
            dividerAlignSelf="stretch"
            oRFontSize="18px"
            oRFontFamily="Inter"
            oRFontWeight="100"
          />
          <EmailFormContainer />
        </div>
      </section>
    </div>
  );
};

export default SignIn;
