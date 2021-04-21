import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link class="navbar-brand" to="/">
						Navbar
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link" aria-current="page" to="/nosotros">
									Nosotros
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" aria-current="page" to="/actividades">
									Actividades
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" aria-current="page" to="/blog">
									Blog
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" aria-current="page" to="/cursos">
									Cursos
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" aria-current="page" to="/colabora">
									Colabora
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
