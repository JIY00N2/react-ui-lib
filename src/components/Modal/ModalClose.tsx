import { ComponentProps } from "react";
import { useModalContext } from "./context/ModalContext";

export const ModalClose = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { close } = useModalContext();

  return (
    <div
      onClick={close}
      {...props}
      style={{ cursor: "pointer", ...style }}
    >
      {children}
    </div>
  );
};
