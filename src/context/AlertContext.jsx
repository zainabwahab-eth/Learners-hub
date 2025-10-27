import { useState } from "react";
import { AlertContext } from "../context/useContext";
import Alert from "../components/Alert";

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

  const showAlert = (message, type = "info") => {
    setAlert({ message, type, visible: true });

    setTimeout(() => {
      setAlert({ message: "", type: "", visible: false });
    }, 3000); // Auto close after 3s
  };

  const hideAlert = () => {
    setAlert({ message: "", type: "", visible: false });
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alert.visible && (
        <Alert
          visible={alert.visible}
          message={alert.message}
          type={alert.type}
          onClose={hideAlert}
        />
      )}
    </AlertContext.Provider>
  );
};
