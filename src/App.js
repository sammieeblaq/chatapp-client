import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import of Components
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";


const App = () => (
    <Router>git git 
        <Route path="/"  exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
)

export default App;