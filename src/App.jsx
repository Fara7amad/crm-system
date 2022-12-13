import "./App.css";
import { useState } from "react";
import NavigationBar from "@components/navigation-bar/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Reports, Dashboard, Clients, ClientDetails, Billings } from "@pages";
import ClientsContext from "@contexts/ClientsContext";
import Sidebar from "@components/sidebar/Sidebar";
import { Container } from "react-bootstrap";

function App() {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => setShowSidebar((open) => !open);

	return (
		<div className="d-flex vh-100 overflow-hidden">
			<Sidebar isOpen={showSidebar} />

			<div className="flex-grow-1">
				<NavigationBar toggleSidebar={toggleSidebar} />

				<main className="page-layout py-3">
					<Container fluid>
						<ClientsContext>
							<Routes>
								{/* pages go here as Routes */}
								<Route path="/" element={<Dashboard />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/clients" element={<Clients />} />
								<Route path="/reports" element={<Reports />} />
								<Route path="/billings" element={<Billings />} />
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
