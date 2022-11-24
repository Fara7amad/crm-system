import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Clients, Reports } from "@pages";
import ClientsContext from "@contexts/ClientsContext";
import Sidebar from "./components/client/Sidebar";
import { Container } from "react-bootstrap";
import BullingStor from "./components/client/BullingStor";

function App() {
	return (
		<div className="d-flex vh-100 overflow-hidden">
			<Sidebar />
			{/*<BullingStor/>*/}
			<div className="flex-grow-1">
				{/* The header goes here (position) */}
				<main className="page-layout">
					<Container>
						<ClientsContext>
							<Routes>
								{/* pages go here as Routes */}
								<Route path="/" element={<Dashboard />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/clients" element={<Clients />} />
								<Route path="/reports" element={<Reports />} />
							</Routes>
						</ClientsContext>
					</Container>
				</main>
			</div>
		</div>
	);
}

export default App;
