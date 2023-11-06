import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Google.module.css";

type Property1GoogleType = {
  socialMediaLogo?: string;
  continueWithGoogle?: string;

  /** Style props */
  property1GoogleWidth?: CSSProperties["width"];
  property1GoogleHeight?: CSSProperties["height"];
  property1GooglePosition?: CSSProperties["position"];
  property1GoogleFlexShrink?: CSSProperties["flexShrink"];
  property1GoogleAlignSelf?: CSSProperties["alignSelf"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivGap?: CSSProperties["gap"];
  socialMediaLogoWidth?: CSSProperties["width"];
  socialMediaLogoHeight?: CSSProperties["height"];
  socialMediaLogoOverflow?: CSSProperties["overflow"];
  socialMediaLogoFlexShrink?: CSSProperties["flexShrink"];
  continueWithGoogleFontSize?: CSSProperties["fontSize"];
  continueWithGoogleFontFamily?: CSSProperties["fontFamily"];
};

const Property1Google: FunctionComponent<Property1GoogleType> = ({
  socialMediaLogo,
  continueWithGoogle,
  property1GoogleWidth,
  property1GoogleHeight,
  property1GooglePosition,
  property1GoogleFlexShrink,
  property1GoogleAlignSelf,
  frameDivTop,
  frameDivLeft,
  frameDivJustifyContent,
  frameDivGap,
  socialMediaLogoWidth,
  socialMediaLogoHeight,
  socialMediaLogoOverflow,
  socialMediaLogoFlexShrink,
  continueWithGoogleFontSize,
  continueWithGoogleFontFamily,
}) => {
  const property1GoogleStyle: CSSProperties = useMemo(() => {
    return {
      width: property1GoogleWidth,
      height: property1GoogleHeight,
      position: property1GooglePosition,
      flexShrink: property1GoogleFlexShrink,
      alignSelf: property1GoogleAlignSelf,
    };
  }, [
    property1GoogleWidth,
    property1GoogleHeight,
    property1GooglePosition,
    property1GoogleFlexShrink,
    property1GoogleAlignSelf,
  ]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      justifyContent: frameDivJustifyContent,
      gap: frameDivGap,
    };
  }, [frameDivTop, frameDivLeft, frameDivJustifyContent, frameDivGap]);

  const socialMediaLogoStyle: CSSProperties = useMemo(() => {
    return {
      width: socialMediaLogoWidth,
      height: socialMediaLogoHeight,
      overflow: socialMediaLogoOverflow,
      flexShrink: socialMediaLogoFlexShrink,
    };
  }, [
    socialMediaLogoWidth,
    socialMediaLogoHeight,
    socialMediaLogoOverflow,
    socialMediaLogoFlexShrink,
  ]);

  const continueWithGoogleStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: continueWithGoogleFontSize,
      fontFamily: continueWithGoogleFontFamily,
    };
  }, [continueWithGoogleFontSize, continueWithGoogleFontFamily]);

  return (
    <div className={styles.property1google} style={property1GoogleStyle}>
      <div className={styles.socialMediaLogoParent} style={frameDiv1Style}>
        <img
          className={styles.socialMediaLogo}
          alt=""
          src={socialMediaLogo}
          style={socialMediaLogoStyle}
        />
        <div
          className={styles.continueWithGoogle}
          style={continueWithGoogleStyle}
        >
          {continueWithGoogle}
        </div>
      </div>
    </div>
  );
};

export default Property1Google;
