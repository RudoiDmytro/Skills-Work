import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TabsNav.module.css";

type TabsNavType = {
  signUp?: string;

  /** Style props */
  tabsNavBorder?: CSSProperties["border"];
  tabsNavPadding?: CSSProperties["padding"];
  tabsNavPosition?: CSSProperties["position"];
  tabsNavFlexShrink?: CSSProperties["flexShrink"];
  tabsNavBackgroundColor?: CSSProperties["backgroundColor"];
  tabsNavCursor?: CSSProperties["cursor"];
  tabsNavWidth?: CSSProperties["width"];
  tabsNavFlex?: CSSProperties["flex"];
  signUpTop?: CSSProperties["top"];
  signUpFontFamily?: CSSProperties["fontFamily"];
  signUpDisplay?: CSSProperties["display"];
  tabsNavHeight?: CSSProperties["height"];
  tabsNavAlignSelf?: CSSProperties["alignSelf"];
  signUpLeft?: CSSProperties["left"];
  signUpTextAlign?: CSSProperties["textAlign"];
};

const TabsNav: FunctionComponent<TabsNavType> = ({
  signUp,
  tabsNavBorder,
  tabsNavPadding,
  tabsNavPosition,
  tabsNavFlexShrink,
  tabsNavBackgroundColor,
  tabsNavCursor,
  tabsNavWidth,
  tabsNavFlex,
  signUpTop,
  signUpFontFamily,
  signUpDisplay,
  tabsNavHeight,
  tabsNavAlignSelf,
  signUpLeft,
  signUpTextAlign,
}) => {
  const tabsNavStyle: CSSProperties = useMemo(() => {
    return {
      border: tabsNavBorder,
      padding: tabsNavPadding,
      position: tabsNavPosition,
      flexShrink: tabsNavFlexShrink,
      backgroundColor: tabsNavBackgroundColor,
      cursor: tabsNavCursor,
      width: tabsNavWidth,
      flex: tabsNavFlex,
      height: tabsNavHeight,
      alignSelf: tabsNavAlignSelf,
    };
  }, [
    tabsNavBorder,
    tabsNavPadding,
    tabsNavPosition,
    tabsNavFlexShrink,
    tabsNavBackgroundColor,
    tabsNavCursor,
    tabsNavWidth,
    tabsNavFlex,
    tabsNavHeight,
    tabsNavAlignSelf,
  ]);

  const signUp1Style: CSSProperties = useMemo(() => {
    return {
      top: signUpTop,
      fontFamily: signUpFontFamily,
      display: signUpDisplay,
      left: signUpLeft,
      textAlign: signUpTextAlign,
    };
  }, [signUpTop, signUpFontFamily, signUpDisplay, signUpLeft, signUpTextAlign]);

  return (
    <div className={styles.tabsNav} style={tabsNavStyle}>
      <div className={styles.signUp} style={signUp1Style}>
        {signUp}
      </div>
      <div className={styles.tabsNavChild} />
    </div>
  );
};

export default TabsNav;
