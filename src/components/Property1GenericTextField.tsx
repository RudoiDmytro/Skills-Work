import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1GenericTextField.module.css";

type Property1GenericTextFieldType = {
  label?: string;
  passwordHideSee?: boolean;
  inputs?: boolean;

  /** Style props */
  property1GenericTextFieldWidth?: CSSProperties["width"];
  property1GenericTextFieldGap?: CSSProperties["gap"];
  property1GenericTextFieldBorder?: CSSProperties["border"];
  property1GenericTextFieldFontFamily?: CSSProperties["fontFamily"];
  property1GenericTextFieldFontSize?: CSSProperties["fontSize"];
  property1GenericTextFieldBackgroundColor?: CSSProperties["backgroundColor"];
  property1GenericTextFieldAlignSelf?: CSSProperties["alignSelf"];
  textFieldBackgroundColor?: CSSProperties["backgroundColor"];
  inputsPosition?: CSSProperties["position"];
  inputsTop?: CSSProperties["top"];
  inputsLeft?: CSSProperties["left"];
  inputsFlexDirection?: CSSProperties["flexDirection"];
  inputsAlignItems?: CSSProperties["alignItems"];
  inputsJustifyContent?: CSSProperties["justifyContent"];
  inputsFontSize?: CSSProperties["fontSize"];
  inputsFontFamily?: CSSProperties["fontFamily"];
  inputsColor?: CSSProperties["color"];
  inputsTextAlign?: CSSProperties["textAlign"];
};

const Property1GenericTextField: FunctionComponent<
  Property1GenericTextFieldType
> = ({
  label,
  passwordHideSee,
  inputs,
  property1GenericTextFieldWidth,
  property1GenericTextFieldGap,
  property1GenericTextFieldBorder,
  property1GenericTextFieldFontFamily,
  property1GenericTextFieldFontSize,
  property1GenericTextFieldBackgroundColor,
  property1GenericTextFieldAlignSelf,
  textFieldBackgroundColor,
  inputsPosition,
  inputsTop,
  inputsLeft,
  inputsFlexDirection,
  inputsAlignItems,
  inputsJustifyContent,
  inputsFontSize,
  inputsFontFamily,
  inputsColor,
  inputsTextAlign,
}) => {
  const property1GenericTextFieldStyle: CSSProperties = useMemo(() => {
    return {
      width: property1GenericTextFieldWidth,
      gap: property1GenericTextFieldGap,
      border: property1GenericTextFieldBorder,
      fontFamily: property1GenericTextFieldFontFamily,
      fontSize: property1GenericTextFieldFontSize,
      backgroundColor: property1GenericTextFieldBackgroundColor,
      alignSelf: property1GenericTextFieldAlignSelf,
    };
  }, [
    property1GenericTextFieldWidth,
    property1GenericTextFieldGap,
    property1GenericTextFieldBorder,
    property1GenericTextFieldFontFamily,
    property1GenericTextFieldFontSize,
    property1GenericTextFieldBackgroundColor,
    property1GenericTextFieldAlignSelf,
  ]);

  const textFieldStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: textFieldBackgroundColor,
    };
  }, [textFieldBackgroundColor]);

  const inputsStyle: CSSProperties = useMemo(() => {
    return {
      position: inputsPosition,
      top: inputsTop,
      left: inputsLeft,
      flexDirection: inputsFlexDirection,
      alignItems: inputsAlignItems,
      justifyContent: inputsJustifyContent,
      fontSize: inputsFontSize,
      fontFamily: inputsFontFamily,
      color: inputsColor,
      textAlign: inputsTextAlign,
    };
  }, [
    inputsPosition,
    inputsTop,
    inputsLeft,
    inputsFlexDirection,
    inputsAlignItems,
    inputsJustifyContent,
    inputsFontSize,
    inputsFontFamily,
    inputsColor,
    inputsTextAlign,
  ]);

  return (
    <div
      className={styles.property1genericTextField}
      style={property1GenericTextFieldStyle}
    >
      <div className={styles.labelParent}>
        <div className={styles.label}>{label}</div>
        {!passwordHideSee && (
          <div className={styles.passwordHideSee}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.hide}>Hide</div>
          </div>
        )}
      </div>
      <div className={styles.textField} style={textFieldStyle}>
        {!inputs && (
          <div className={styles.inputs} style={inputsStyle}>
            <div className={styles.div}>123456</div>
            <div className={styles.inputsChild} />
          </div>
        )}
        <img className={styles.icons} alt="" src="/icons2.svg" />
      </div>
      <div className={styles.errorMessage}>Error message</div>
    </div>
  );
};

export default Property1GenericTextField;
