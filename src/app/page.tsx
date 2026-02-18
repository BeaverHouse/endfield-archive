"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import MailPage from "@/components/MailPage";
import EventPage from "@/components/EventPage";
import Footer from "@/components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "mail":
        return <MailPage />;
      case "event":
        return <EventPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
