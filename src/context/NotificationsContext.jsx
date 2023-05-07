import { useState, useEffect, createContext } from 'react';

export const NotificationsContext = createContext([]);

export const NotificationsContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const clearNotification = (id) => {
    setNotifications(() => notifications.map((notification) => notification.id !== id));
  };

  const addNotification = (notification) => {
    setNotifications(() => [...notifications, notification]);
  };

  useEffect(() => {}, [notifications])

  return (
    <NotificationsContext.Provider value={{
      notifications,
      setNotifications,
      addNotification,
      clearNotification,
    }}>
      {children}
    </NotificationsContext.Provider>
  )
};