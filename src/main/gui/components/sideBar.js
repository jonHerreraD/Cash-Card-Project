class SideBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            .mn-w-tool-bar {
                flex: 1;
                text-align: right;
                position: relative;
                color: black;
                font-size: 40px;
                margin-right: 10px;
            }

            .mn-w-tool-bar button {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
                font-size: 16px;
            }

            .mn-w-tool-bar button:hover {
                background-color: #0056b3;
            }

            #mn-w-tool-bar-options {
                position: absolute;
                top: 71px;
                right: 0;
                background-color: #f0f0f0;
                border: 1px solid #ccc;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            #mn-w-tool-bar-options ul {
                list-style-type: none;
                margin: 0;
                padding: 10px;
            }

            #mn-w-tool-bar-options li {
                margin: 5px 0;
            }

            .hidden {
                display: none;
            }

            .visible {
                width: 244px;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        </style>
        <div class="mn-w-tool-bar">
            <button id="menu-button">|||</button>
        </div>
        <nav id="mn-w-tool-bar-options" class="hidden">
            <ul>
                <li>Profile</li>
                <li>Cash Cards</li>
            </ul>
            <div class="mn-w-tool-bar">
                <button id="log-out-button">Log Out</button>
            </div>
        </nav>
        
        
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.getElementById('menu-button').addEventListener('click', this.toggleMenu.bind(this));
    }

    disconnectedCallback() {
        this.shadowRoot.getElementById('menu-button').removeEventListener('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
        const menu = this.shadowRoot.getElementById('mn-w-tool-bar-options');
        menu.classList.toggle('hidden');
        menu.classList.toggle('visible');
    }
}

customElements.define('side-bar', SideBar);
