import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Hover.module.css";

type Property1HoverType = {
  prop?: string;

  /** Style props */
  property1HoverBackgroundColor?: CSSProperties["backgroundColor"];
  property1HoverPosition?: CSSProperties["position"];
  divColor?: CSSProperties["color"];
  divLeft?: CSSProperties["left"];
};

const Property1Hover: FunctionComponent<Property1HoverType> = ({
  prop,
  property1HoverBackgroundColor,
  property1HoverPosition,
  divColor,
  divLeft,
}) => {
  const property1HoverStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: property1HoverBackgroundColor,
      position: property1HoverPosition,
    };
  }, [property1HoverBackgroundColor, property1HoverPosition]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: divColor,
      left: divLeft,
    };
  }, [divColor, divLeft]);

  return (
    <div className={styles.property1hover} style={property1HoverStyle}>
      <div className={styles.div} style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

export default Property1Hover;
