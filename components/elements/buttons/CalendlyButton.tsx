import { PopupButton } from "react-calendly"
import React, { useEffect, useState } from 'react';

const CalendlyButton = ({ children, styles, url, disabled }) => {
    const [rootElement, setRootElement] = useState(null);

    useEffect(() => {
        setRootElement(document.getElementById("__next"));
    }, []);

    if (!rootElement) return null;
    return (
      <PopupButton
          url={url}
          className={styles}
          rootElement={rootElement}
          text="Schedule"
      />
  )
}
export default CalendlyButton
