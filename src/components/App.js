import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from './layout/header/Navbar'
import AboutUs from './pages/aboutUs/AboutUs'
import Activities from './pages/activities/Activities'
import Blog from './pages/blog/Blog'
import Cooperate from './pages/cooperate/Cooperate'
import CourseDetail from "./pages/courseDetail/CourseDetail";
import Courses from './pages/courses/Courses'
import Home from './pages/home/Home'


import './App.css';
function App() {
  return (
		<>
			<Navbar />
			<Switch>
				<Route path="/nosotros" render={() => <AboutUs />} />
				<Route path="/actividades" render={() => <Activities />} />
				<Route path="/blog" render={() => <Blog />} />
				<Route path="/colabora" render={() => <Cooperate />} />
				<Route path="/cursos" exact render={() => <Courses />} />
				<Route
					path="/cursos/:cursoId"
					render={(props) => <CourseDetail {...props} />}
				/>
				<Route path="/" exact render={() => <Home />} />
			</Switch>
		</>
	);
}

export default App;
