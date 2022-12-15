import "./App.css";
import React, { Suspense, useState } from "react";
import NavigationBar from "@components/navigation-bar/NavigationBar";
import { Route, Routes } from "react-router-dom";
// import { Reports, Dashboard, Clients, ClientDetails, Billings } from "@pages";
import ClientsContext from "@contexts/ClientsContext";
import Sidebar from "@components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Clients = React.lazy(() => import("./pages/Clients"));
const Reports = React.lazy(() => import("./pages/Reports"));
const ClientDetails = React.lazy(() => import("./pages/ClientDetails"));
const Billings = React.lazy(() => import("./pages/Billings"));

function App() {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => setShowSidebar((open) => !open);

	return (
		<div className="d-flex">
			<Sidebar isOpen={showSidebar} />

			<div className="flex-grow-1 page-layout">
				<NavigationBar toggleSidebar={toggleSidebar} />

				<main className="py-3">
					<Container fluid>
						<ClientsContext>
							<Routes>
								{/* pages go here as Routes */}
								<Route
									path="/"
									element={
										<Suspense>
											<Dashboard />
										</Suspense>
									}
								/>
								<Route
									path="/dashboard"
									element={
										<Suspense>
											<Dashboard />
										</Suspense>
									}
								/>
								<Route
									path="/clients"
									element={
										<Suspense>
											<Clients />
										</Suspense>
									}
								/>
								<Route
									path="/reports"
									element={
										<Suspense>
											<Reports />
										</Suspense>
									}
								/>
								<Route
									path="/billings"
									element={
										<Suspense>
											<Billings />
										</Suspense>
									}
								/>
								<Route
									path="/details/:id"
									element={
										<Suspense>
											<ClientDetails />
										</Suspense>
									}
								/>
							</Routes>
						</ClientsContext>
					</Container>
				</main>
			</div>
		</div>
	);
}

export default App;
