import "./App.css";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Reports } from "@pages";
import ClientsContext from "@contexts/ClientsContext";
import Sidebar from "@components/SideBar/Sidebar";
import { Container } from "react-bootstrap";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Clients = React.lazy(() => import("./pages/Clients"));
// const Reports = React.lazy(() => import("./pages/Reports"));
const ClientDetails = React.lazy(() => import("./pages/ClientDetails"));

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
								<Route path="/reports" element={<Reports />} />
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
