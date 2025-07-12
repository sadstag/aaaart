import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import type { Models } from "appwrite";
import { account, client, ID } from "./lib/appwrite";

// TO be removed later
// the component handling the main index route is 'Index'
function App() {
	const [loggedInUser, setLoggedInUser] =
		useState<Models.User<Models.Preferences> | null>(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	async function login(email: string, password: string) {
		await account.createEmailPasswordSession(email, password);
		setLoggedInUser(await account.get());
	}

	return (
		<>
			<h1>AAAart</h1>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noopener">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<p>
					{loggedInUser ? `Logged in as ${loggedInUser.name}` : "Not logged in"}
				</p>

				<form>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<button type="button" onClick={() => login(email, password)}>
						Login
					</button>

					<button
						type="button"
						onClick={async () => {
							await account.create(ID.unique(), email, password, name);
							login(email, password);
						}}
					>
						Register
					</button>

					<button
						type="button"
						onClick={async () => {
							await account.deleteSession("current");
							setLoggedInUser(null);
						}}
					>
						Logout
					</button>

					<button
						type="button"
						onClick={async () => {
							await client.ping();
						}}
					>
						send ping
					</button>
				</form>
			</div>
		</>
	);
}

export default App;
