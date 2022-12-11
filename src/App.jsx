import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Clients, Reports, ClientDetails } from "@pages";
import ClientsContext from "@contexts/ClientsContext";
import Sidebar from "./components/client/Sidebar";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/DashboardPage/NavigationBar";

function App() {
  return (
    <div className="d-flex vh-100 overflow-hidden">
      <Sidebar />
      <div className="flex-grow-1">
        <NavigationBar />

        <main className="page-layout">
          <Container fluid>
            <ClientsContext>
              <Routes>
                {/* pages go here as Routes */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/details/:id" element={<ClientDetails />} />
              </Routes>
            </ClientsContext>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
