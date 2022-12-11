import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Dashboard, Clients, Reports, ClientDetails } from "@pages";
import ClientsContext from "@contexts/ClientsContext";
import Sidebar from "@components/SideBar/Sidebar";
import { Container } from "react-bootstrap";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import('./pages/Dashboard')) 
const Clients = React.lazy(() => import('./pages/Clients'))
const Reports = React.lazy(() => import('./pages/Reports'))
const ClientDetails = React.lazy(() => import('./pages/ClientDetails'))

function App() {
  return (
    <div className="d-flex vh-100 overflow-hidden">
      <Sidebar />
      <div className="flex-grow-1">
        <NavigationBar/>

        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>
    </div>
  );
}

export default App;
