class MenuWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            

            .mn-w-title h1 {
                flex: 1;
                color: black;
                font-size: 40px;
                margin: 0;
                padding: 0;
            }

            .mn-w-space {
                flex: 10;
            }
            a {
                text-decoration: none;
                color: black;
              }
        </style>
            <div class="mn-w-title">
                <h1><a href="index.html">Cash Cards</a></h1>
            </div>
            <div class="mn-w-space"></div>
        
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('menu-wrapper', MenuWrapper);
