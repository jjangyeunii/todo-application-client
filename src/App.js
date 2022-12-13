import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const tabList = ["all", "active", "completed"];
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  return (
    <DarkModeProvider>
      <Header
        tabList={tabList}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
      <TodoList currentTab={currentTab} />
    </DarkModeProvider>
  );
}

export default App;
