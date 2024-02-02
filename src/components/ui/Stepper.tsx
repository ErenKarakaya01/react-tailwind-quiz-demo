import React from "react";

const Stepper = ({
  activeStep,
  children,
}: {
  activeStep: number;
  children: JSX.Element[];
}) => {
  return (
    <div className="flex flex-row">
      {children}
    </div>
  );
};

export default Stepper;
