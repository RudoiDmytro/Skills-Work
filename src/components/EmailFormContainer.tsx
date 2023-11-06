import { FunctionComponent } from "react";
import Property1GenericTextField from "./Property1GenericTextField";
import Button from "./Button";
import styles from "./EmailFormContainer.module.css";

const EmailFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.textFieldParent}>
        <Property1GenericTextField
          label="Email address"
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
          label="Password"
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
        signUp="Sign in"
        buttonBorderRadius="40px"
        buttonWidth="unset"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonPadding="0"
        buttonPosition="relative"
        buttonFlexShrink="0"
        buttonOpacity="0.25"
        buttonAlignSelf="stretch"
        frameDivLeft="calc(50% - 37.5px)"
        signUpDisplay="inline-block"
      />
    </div>
  );
};

export default EmailFormContainer;
