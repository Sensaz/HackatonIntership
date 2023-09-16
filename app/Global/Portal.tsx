"use client";
import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import "@/style/portal.sass";

type PortalProps = {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
};
export const Portal = ({
  open = false,
  handleClose,
  children,
}: PortalProps) => {
  const portalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    portalRef.current = document.querySelector<HTMLElement>("#portal");
  }, []);
  return open && portalRef.current
    ? createPortal(
        <div>
          {" "}
          <div className="overlay-poratl" />
          <div className="portal">
            <Button click={handleClose}>zamknij</Button>
            <div>{children}</div>
          </div>
        </div>,
        portalRef.current
      )
    : null;
};
