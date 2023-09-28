import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export function ToastProvider ({ children }) {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const hideToast = () => {
    setToastVisible(false);
    setToastMessage('');
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast, toastVisible, toastMessage }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast () {
  return useContext(ToastContext);
}
