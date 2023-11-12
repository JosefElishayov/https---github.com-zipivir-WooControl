import App from "./App";
import { render } from '@wordpress/element';

/**
 * Import the stylesheet for the plugin.
 */
import './style/main.scss';
import "./style/global.css";

// Render the App component into the DOM
render(<App />, document.getElementById('new-dashboard'));
