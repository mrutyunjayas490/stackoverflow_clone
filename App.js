import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import QuestionList from "./components/QuestionList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <QuestionList />
      </div>
      <Footer />
    </div>
  );
}

export default App;

