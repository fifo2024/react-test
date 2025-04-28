import { useEffect } from "react";

import "./style.css";

const MovieSite = () => {
    useEffect(() => {
        const header = document.querySelector("header");
        const nav = document.querySelector("nav");
        const navbarMenuBtn = document.querySelector(".navbar-menu-btn");

        const navbarForm = document.querySelector(".navbar-form");
        const navbarFormCloseBtn = document.querySelector(".navbar-form-close");
        const navbarSearchBtn = document.querySelector(".navbar-search-btn");

        function navIsActive() {
            header?.classList.toggle("active");
            nav?.classList.toggle("active");
            navbarMenuBtn?.classList.toggle("active");
        }

        navbarMenuBtn?.addEventListener("click", navIsActive);

        const searchBarIsActive = () => navbarForm?.classList.toggle("active");

        navbarSearchBtn?.addEventListener("click", searchBarIsActive);
        navbarFormCloseBtn?.addEventListener("click", searchBarIsActive);
    }, []);

    return (
        <div className="container">
            <header className="">
                <div className="navbar">
                    <button className="navbar-menu-btn">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                    </button>

                    <a href="#" className="navbar-brand">
                        <img
                            src="https://i.postimg.cc/KvjKVZXj/logo.png"
                            alt="logo"
                        />
                    </a>

                    <nav className="">
                        <ul className="navbar-nav">
                            <li>
                                <a href="#" className="navbar-link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#category" className="navbar-link">
                                    Category
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#live"
                                    className="navbar-link indicator"
                                >
                                    LIVE
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="navbar-actions">
                        <form action="#" className="navbar-form">
                            <input
                                type="text"
                                className="navbar-form-search search"
                                placeholder="I'm looking for..."
                            />

                            <button className="navbar-form-btn">
                                <div className="search"></div>
                            </button>

                            <button className="navbar-form-close">
                                <div className="close-circle-outline"></div>
                            </button>
                        </form>

                        <button className="navbar-search-btn">
                            <div className="search"></div>
                        </button>

                        <a href="#" className="navbar-signin">
                            <span>Sign In</span>
                            <div className="log-in"></div>
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className="banner">
                    <div className="banner-card">
                        <img
                            src="https://i.postimg.cc/Y9SMdz0P/John-Wick-3.jpg"
                            alt="banner"
                            className="banner-img"
                        />

                        <div className="card-content">
                            <div className="card-info">
                                <div className="genre">
                                    {/* <div className="film"></div> */}
                                    <span>Action/Thriller</span>
                                </div>

                                <div className="year">
                                    {/* <div className="calendar"></div> */}
                                    <span>2019</span>
                                </div>

                                <div className="duration">
                                    {/* <div className="time"></div> */}
                                    <span>2h 11min</span>
                                </div>

                                <div className="quality">4k</div>
                            </div>
                            <h2 className="card-title">
                                John Wick: Chapter 3 - Parabellum
                            </h2>
                        </div>
                    </div>
                </section>

                <section className="movies">
                    <div className="filter-bar">
                        <div className="filter-dropdowns">
                            <select className="genre">
                                <option value="all genres">All Genres</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="animal">Animal</option>
                                <option value="animation">Animation</option>
                                <option value="biography">Biography</option>
                                <option value="drama">Drama</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="horror">Horror</option>
                                <option value="scifi">Sci-fi</option>
                                <option value="war">War</option>
                            </select>

                            <select className="year">
                                <option value="all years">All years</option>
                                <option value="2024">2024</option>
                                <option value="2020-2023">2020-2023</option>
                                <option value="2010-2019">2010-2019</option>
                                <option value="2000-2009">2000-2009</option>
                                <option value="1980-1999">1980-1999</option>
                            </select>
                        </div>

                        <div className="filter-radios">
                            <input
                                type="radio"
                                className="grade"
                                id="featured"
                                checked
                            />
                            <label htmlFor="featured">Featured</label>

                            <input
                                type="radio"
                                className="grade"
                                id="popular"
                            />
                            <label htmlFor="popular">Popular</label>

                            <input type="radio" className="grade" id="newest" />
                            <label htmlFor="newest">Newest</label>

                            <div className="checked-radio-bg"></div>
                        </div>
                    </div>

                    <div className="movies-grid">
                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/C5mrM9gh/red-notice.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>6.3</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Red Notice</h3>

                                <div className="card-info">
                                    <span className="genre">Action/Comedy</span>
                                    <span className="year">2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/brB48dkY/spider-men.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>7.4</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">
                                    Spider-Man: Homecoming
                                </h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Action/Adventure
                                    </span>
                                    <span className="year">2017</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/Kv3HBGtL/matrix.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>5.6</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">
                                    The Matrix Ressurections
                                </h3>

                                <div className="card-info">
                                    <span className="genre">Sci-fi/Action</span>
                                    <span className="year">2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/c4YNZM9V/eternals.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>6.3</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Eternals</h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Adventure/Action
                                    </span>
                                    <span className="year">2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/Y9jJP1LD/dune.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>8.0</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Dune: Part One</h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Sci-fi/Adventure
                                    </span>
                                    <span className="year">2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/q7NwVQQK/1917.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>8.2</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">1917</h3>

                                <div className="card-info">
                                    <span className="genre">War/Drama</span>
                                    <span className="year">2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/d1vhmV70/shang-chi.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>7.4</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">
                                    Shang-Chi and the Legend of the Ten Rings
                                </h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Action/Fantasy
                                    </span>
                                    <span className="year">2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/L6r638wM/casino-royale.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>8.0</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Casino Royale</h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Action/Adventure
                                    </span>
                                    <span className="year">2006</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/Gt6rKXMj/dark-knight.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>9.0</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">The Dark Knight</h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Action/Adventure
                                    </span>
                                    <span className="year">2008</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/hjjBqk6r/panther.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>7.3</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Black Panther</h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Action/Adventure
                                    </span>
                                    <span className="year">2018</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/QtyrN6rr/venom.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>6.6</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Venom</h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Action/Adventure
                                    </span>
                                    <span className="year">2018</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/3JgJ9TT4/LOTR.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>9.0</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">
                                    Lord Of The Rings: Return Of The King
                                </h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Fantasy/Adventure
                                    </span>
                                    <span className="year">2003</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/VkgsQW5z/saving-private-ryan.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>8.6</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">
                                    Saving Private Ryan
                                </h3>

                                <div className="card-info">
                                    <span className="genre">War/Action</span>
                                    <span className="year">1998</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/cHgd3qhJ/interstaller.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>8.7</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Interstellar</h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Sci-fi/Adventure
                                    </span>
                                    <span className="year">2014</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/y8LKr6rd/gladiator.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>8.5</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Gladiator</h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Action/Adventure
                                    </span>
                                    <span className="year">2000</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/6QSXtjKx/endgame.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>8.5</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">
                                    Avengers: Endgame
                                </h3>

                                <div className="card-info">
                                    <span className="genre">Action/Sci-fi</span>
                                    <span className="year">2019</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/1X0h0yqy/ww84.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>5.4</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">
                                    Wonder Woman 1984
                                </h3>

                                <div className="card-info">
                                    <span className="genre">
                                        Action/Adventure
                                    </span>
                                    <span className="year">2020</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/v85swtSC/captain-marvel.jpg"
                                    alt="movie"
                                    className="card-img"
                                />

                                <div className="card-overlay">
                                    <div className="bookmark">
                                        <div className="bookmark"></div>
                                    </div>

                                    <div className="rating">
                                        <div className="star-outline"></div>
                                        <span>5.4</span>
                                    </div>

                                    <div className="play">
                                        <div className="play-circle-outline"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">Captain Marvel</h3>

                                <div className="card-info">
                                    <span className="genre">Action/Sci-fi</span>
                                    <span className="year">2019</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="load-more">LOAD MORE</button>
                </section>

                <section className="category" id="category">
                    <h2 className="section-heading">Category</h2>

                    <div className="category-grid">
                        <div className="category-card">
                            <img
                                src="https://i.postimg.cc/JzfWFmfC/action.jpg"
                                alt="image"
                                className="card-img"
                            />
                            <div className="className">Action</div>
                            <div className="total">100</div>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://i.postimg.cc/CKpxqjL8/comedy.jpg"
                                alt="image"
                                className="card-img"
                            />
                            <div className="className">Comedy</div>
                            <div className="total">50</div>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://i.postimg.cc/3rfrBMxY/thriller.webp"
                                alt="image"
                                className="card-img"
                            />
                            <div className="className">Thriller</div>
                            <div className="total">20</div>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://i.postimg.cc/HkXpdV4k/horror.jpg"
                                alt="image"
                                className="card-img"
                            />
                            <div className="className">Horror</div>
                            <div className="total">80</div>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://i.postimg.cc/qRRVhRnn/adventure.jpg"
                                alt="image"
                                className="card-img"
                            />
                            <div className="className">Adventure</div>
                            <div className="total">100</div>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://i.postimg.cc/15pmZ8K5/animated.jpg"
                                alt="image"
                                className="card-img"
                            />
                            <div className="className">Animation</div>
                            <div className="total">50</div>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://i.postimg.cc/XvX6Xq95/crime.jpg"
                                alt="image"
                                className="card-img"
                            />
                            <div className="className">Crime</div>
                            <div className="total">20</div>
                        </div>

                        <div className="category-card">
                            <img
                                src="https://i.postimg.cc/8568BYKP/sci-fi.jpg"
                                alt="image"
                                className="card-img"
                            />
                            <div className="className">Sci-fi</div>
                            <div className="total">80</div>
                        </div>
                    </div>
                </section>

                <section className="live" id="live">
                    <h2 className="section-heading">Live TV Shows</h2>

                    <div className="live-grid">
                        <div className="live-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/m26wBrZJ/planet.jpg"
                                    alt="image"
                                    className="card-img"
                                />
                                <div className="live-badge">LIVE</div>
                                <div className="total-viewers">
                                    305K viewers
                                </div>
                                <div className="play">
                                    <div className="play-circle-outline"></div>
                                </div>
                            </div>

                            <div className="card-body">
                                <img
                                    src="https://i.postimg.cc/YCzQjqtt/bbcamerica.jpg"
                                    alt="image"
                                    className="avatar"
                                />
                                <h3 className="card-title">
                                    Planet Earth II <br /> Season 1 - Islands
                                </h3>
                            </div>
                        </div>

                        <div className="live-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/PrY8CrdP/got.jpg"
                                    alt="image"
                                    className="card-img"
                                />
                                <div className="live-badge">LIVE</div>
                                <div className="total-viewers">
                                    1.7M viewers
                                </div>
                                <div className="play">
                                    <div className="play-circle-outline"></div>
                                </div>
                            </div>

                            <div className="card-body">
                                <img
                                    src="https://i.postimg.cc/ryWpJn3H/HBO-Logo-square.jpg"
                                    alt="image"
                                    className="avatar"
                                />
                                <h3 className="card-title">
                                    Game of Thrones <br /> Season 5 - Mother's
                                    Mercy
                                </h3>
                            </div>
                        </div>

                        <div className="live-card">
                            <div className="card-head">
                                <img
                                    src="https://i.postimg.cc/RVLZr3MQ/vikins.jpg"
                                    alt="image"
                                    className="card-img"
                                />
                                <div className="live-badge">LIVE</div>
                                <div className="total-viewers">
                                    468K viewers
                                </div>
                                <div className="play">
                                    <div className="play-circle-outline"></div>
                                </div>
                            </div>

                            <div className="card-body">
                                <img
                                    src="https://i.postimg.cc/ryWpJn3H/HBO-Logo-square.jpg"
                                    alt="image"
                                    className="avatar"
                                />
                                <h3 className="card-title">
                                    Vikings <br /> Season 4 - What Might Have
                                    Been
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-brand">
                        <img
                            src="https://i.postimg.cc/KvjKVZXj/logo.png"
                            alt="image"
                            className="footer-logo"
                        />
                        <p className="slogan">
                            Movies & TV Shows, Online Cinema, Movie Database
                            HTML Template
                        </p>

                        <div className="social-link">
                            <a href="#">
                                <div className="logo-facebook"></div>
                            </a>
                            <a href="#">
                                <div className="logo-twitter"></div>
                            </a>
                            <a href="#">
                                <div className="logo-instagram"></div>
                            </a>
                            <a href="#">
                                <div className="logo-tiktok"></div>
                            </a>
                            <a href="#">
                                <div className="logo-youtube"></div>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <ul>
                            <h4 className="link-heading">CineFlix</h4>

                            <li className="link-item">
                                <a href="#">About us</a>
                            </li>
                            <li className="link-item">
                                <a href="#">My profile</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Pricing plans</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Contacts</a>
                            </li>
                        </ul>

                        <ul>
                            <h4 className="link-heading">Browse</h4>

                            <li className="link-item">
                                <a href="#">Live TV</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Live News</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Live Sports</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Streaming Library</a>
                            </li>
                        </ul>

                        <ul>
                            <li className="link-item">
                                <a href="#">TV Shows</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Movies</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Kids</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Collections</a>
                            </li>
                        </ul>

                        <ul>
                            <h4 className="link-heading">Help</h4>

                            <li className="link-item">
                                <a href="#">Account & Billing</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Plans & Pricing</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Supported Devices</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="copyright">
                        <p>&copy; Copyright 2024 CineFlix</p>
                    </div>

                    <div className="wrapper">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms and conditions</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MovieSite;
