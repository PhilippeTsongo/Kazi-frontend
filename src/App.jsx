import './App.css'
import Jobs from './pages/Jobs/Jobs'
import Chat from './pages/Chat/Chat'
import JobDetails from './pages/Jobs/JobDetails'
import Home from './pages/Home'
import JobApplication from './pages/Jobs/JobApplication'
import Login from './pages/User/Login'
import SignUp from './pages/User/SignUp'

import {
	Routes,
	Route,
} from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/jobDetail" element={<JobDetails />} />
				<Route path="/jobApplication" element={<JobApplication />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp/>}/>

			</Routes>
		</>
	)
}

export default App;
