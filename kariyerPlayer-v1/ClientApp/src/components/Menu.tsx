import * as React from "react"
import './Menu/menu.css'

class Menu extends React.Component<{}> {
    public render() {
        return (
            <nav>
                <a href="#"
                    target="_top">
                    <h1>P</h1>
                </a>
                <ul>
                    <li><a href="#">Ahmet</a></li>
                    <li><a href="#">Atakan</a></li>
                    <li><a href="#">Savas</a></li>
                    <li>
                        <a href="#">
                            Cankiri
                        </a>
                    </li>
                </ul>
            </nav>
        )
    };
}

export default Menu;