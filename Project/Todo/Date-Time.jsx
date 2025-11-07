import { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
export const  DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDateTime(`${now.toLocaleDateString()} • ${now.toLocaleTimeString()}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="date-time">
      <FaClock className="clock-icon" />
      <span>{dateTime}</span>
    </div>
  )
    }
