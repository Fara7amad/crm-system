import { Route, Routes } from "react-router-dom";
import { Dashboard, Clients, Reports } from "@pages";
import ClientsContext from "@contexts/ClientsContext";

function App() {
	return (
		<div className="d-flex vh-100">
			{/* The side bar goes here */}

			<div className="flex-grow-1">
				{/* The header goes here (position) */}

				<main className="">
					<ClientsContext>
						<Routes>
							{/* pages go here as Routes */}
							<Route path="/" element={<Dashboard />} />
							<Route path="/clients" element={<Clients />} />
							<Route path="/reports" element={<Reports />} />
						</Routes>
					</ClientsContext>
				</main>
			</div>
		</div>
	);
}

export default App;
