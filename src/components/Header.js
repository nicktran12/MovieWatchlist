import React from 'react';
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/">MovieTracker</Link>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>
                </ul>

                <ul className="nav-links">
                    <li>
                        <Link to="/watching">Watching</Link>
                    </li>
                </ul>

                <ul className="nav-links">
                    <li>
                        <Link to="/watchlist">Watchlist</Link>
                    </li>
                </ul>

                <ul className="nav-links">
                    <li>
                        <Link to="/" className="btn">Add</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
