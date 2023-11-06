import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

type ButtonType = {
  icons?: string;
  signUp?: string;

  /** Style props */
  buttonBorderRadius?: CSSProperties["borderRadius"];
  buttonWidth?: CSSProperties["width"];
  buttonCursor?: CSSProperties["cursor"];
  buttonBorder?: CSSProperties["border"];
  buttonPadding?: CSSProperties["padding"];
  buttonPosition?: CSSProperties["position"];
  buttonFlexShrink?: CSSProperties["flexShrink"];
  buttonOpacity?: CSSProperties["opacity"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
  frameDivLeft?: CSSProperties["left"];
  signUpDisplay?: CSSProperties["display"];
};

const Button: FunctionComponent<ButtonType> = ({
  icons,
  signUp,
  buttonBorderRadius,
  buttonWidth,
  buttonCursor,
  buttonBorder,
  buttonPadding,
  buttonPosition,
  buttonFlexShrink,
  buttonOpacity,
  buttonAlignSelf,
  frameDivLeft,
  signUpDisplay,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: buttonBorderRadius,
      width: buttonWidth,
      cursor: buttonCursor,
      border: buttonBorder,
      padding: buttonPadding,
      position: buttonPosition,
      flexShrink: buttonFlexShrink,
      opacity: buttonOpacity,
      alignSelf: buttonAlignSelf,
    };
  }, [
    buttonBorderRadius,
    buttonWidth,
    buttonCursor,
    buttonBorder,
    buttonPadding,
    buttonPosition,
    buttonFlexShrink,
    buttonOpacity,
    buttonAlignSelf,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  const signUpStyle: CSSProperties = useMemo(() => {
    return {
      display: signUpDisplay,
    };
  }, [signUpDisplay]);

  return (
    <div className={styles.button} style={buttonStyle}>
      <div className={styles.iconsParent} style={frameDivStyle}>
        <img className={styles.icons} alt="" src={icons} />
        <div className={styles.signUp} style={signUpStyle}>
          {signUp}
        </div>
      </div>
    </div>
  );
};

export default Button;
