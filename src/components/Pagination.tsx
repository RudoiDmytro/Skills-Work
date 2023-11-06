import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StatusFalsePositionPrimary from "./StatusFalsePositionPrimary";
import Property1Hover from "./Property1Hover";
import styles from "./Pagination.module.css";

type PaginationType = {
  fiarrowRight?: string;

  /** Style props */
  paginationPosition?: CSSProperties["position"];
  paginationTop?: CSSProperties["top"];
  paginationLeft?: CSSProperties["left"];
  paginationBackgroundColor?: CSSProperties["backgroundColor"];
  paginationBoxSizing?: CSSProperties["boxSizing"];
  paginationBoxSizing1?: CSSProperties["boxSizing"];
};

const Pagination: FunctionComponent<PaginationType> = ({
  fiarrowRight,
  paginationPosition,
  paginationTop,
  paginationLeft,
  paginationBackgroundColor,
  paginationBoxSizing,
  paginationBoxSizing1,
}) => {
  const paginationStyle: CSSProperties = useMemo(() => {
    return {
      position: paginationPosition,
      top: paginationTop,
      left: paginationLeft,
    };
  }, [paginationPosition, paginationTop, paginationLeft]);

  const property1HoverStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: paginationBackgroundColor,
    };
  }, [paginationBackgroundColor]);

  const statusFalsePositionPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: paginationBoxSizing,
    };
  }, [paginationBoxSizing]);

  const statusFalsePositionPrimaryStyle1: CSSProperties = useMemo(() => {
    return {
      boxSizing: paginationBoxSizing1,
    };
  }, [paginationBoxSizing1]);

  return (
    <div className={styles.pagination} style={paginationStyle}>
      <StatusFalsePositionPrimary
        fiarrowRight="/fiarrowright4.svg"
        statusFalsePositionPrimarBackgroundColor="unset"
        statusFalsePositionPrimarTransform=" rotate(180deg)"
        statusFalsePositionPrimarTransformOrigin="0 0"
        statusFalsePositionPrimarBoxSizing="border-box"
      />
      <div className={styles.pages}>
        <Property1Hover
          prop="01"
          property1HoverBackgroundColor="#0a65cc"
          property1HoverPosition="relative"
          divColor="#fff"
          divLeft="calc(50% - 8px)"
        />
        <Property1Hover
          prop="02"
          property1HoverBackgroundColor="unset"
          property1HoverPosition="relative"
          divColor="#5e6670"
          divLeft="calc(50% - 9px)"
        />
        <Property1Hover
          prop="03"
          property1HoverBackgroundColor="unset"
          property1HoverPosition="relative"
          divColor="#5e6670"
          divLeft="calc(50% - 9px)"
        />
        <Property1Hover
          prop="04"
          property1HoverBackgroundColor="#f1f2f4"
          property1HoverPosition="relative"
          divColor="#18191c"
          divLeft="calc(50% - 9px)"
        />
        <Property1Hover
          prop="05"
          property1HoverBackgroundColor="unset"
          property1HoverPosition="relative"
          divColor="#5e6670"
          divLeft="calc(50% - 9px)"
        />
      </div>
      <StatusFalsePositionPrimary
        fiarrowRight="/fiarrowright2.svg"
        statusFalsePositionPrimarBackgroundColor="#e7f0fa"
        statusFalsePositionPrimarTransform="unset"
        statusFalsePositionPrimarTransformOrigin="unset"
        statusFalsePositionPrimarBoxSizing="border-box"
      />
    </div>
  );
};

export default Pagination;
