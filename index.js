// ==========================================================================
// SISTEMA SOLAR - LÓGICA INTERACTIVA Y DATOS ASTRONÓMICOS
// ==========================================================================

// Base de datos astronómica exhaustiva de los cuerpos celestes
const PLANET_DATABASE = {
    Sol: {
        name: "El Sol",
        type: "Estrella de tipo espectral G2V (Enana Amarilla)",
        category: "estrella",
        distanceKm: "0 km (Centro del sistema)",
        distanceAU: "0.00 AU",
        diameter: "1,392,700 km",
        mass: "1.989 × 10³⁰ kg (333,000 veces la Tierra)",
        gravity: "274.0 m/s² (28 veces la terrestre)",
        temperature: "5,500 °C (Superficie) / 15,000,000 °C (Núcleo)",
        orbitPeriod: "230 millones de años (Órbita galáctica)",
        rotationPeriod: "25 - 35 días terrestres (Rotación diferencial)",
        moons: "0 planetas satélite directos",
        composition: "74% Hidrógeno, 24% Helio, 2% elementos pesados (Oxígeno, Carbono, Hierro)",
        atmosphere: "Corona, Cromosfera y Fotosfera compuestas por plasma sobrecalentado",
        summary: "El Sol es la estrella central y el objeto más masivo de nuestro sistema solar, albergando el 99.86% de toda la masa del sistema. Mediante fusión nuclear en su núcleo, convierte 600 millones de toneladas de hidrógeno en helio cada segundo, irradiando la luz y el calor esenciales para la biosfera terrestre.",
        curiosities: [
            "Contiene aproximadamente 1.3 millones de planetas Tierra en su volumen.",
            "La luz que vemos hoy tardó entre 10,000 y 170,000 años en viajar desde el núcleo hasta la superficie solar, pero solo 8 minutos y 20 segundos en llegar a la Tierra.",
            "Genera el viento solar, un flujo constante de partículas cargadas que da forma a la heliosfera cósmica."
        ],
        missions: "SOHO, Parker Solar Probe, Solar Orbiter, SDO"
    },
    Mercurio: {
        name: "Mercurio",
        type: "Planeta Telúrico / Rocoso",
        category: "rocoso",
        distanceKm: "57,910,000 km",
        distanceAU: "0.39 AU",
        diameter: "4,879 km",
        mass: "3.301 × 10²³ kg (0.055 tierras)",
        gravity: "3.7 m/s² (0.38 g)",
        temperature: "-180 °C (Noche) a 430 °C (Día)",
        orbitPeriod: "88 días terrestres",
        rotationPeriod: "58.6 días terrestres",
        moons: "0",
        composition: "Núcleo colosal de hierro fundido (85% del radio) y manto rocoso de silicatos",
        atmosphere: "Exosfera tenue compuesta por oxígeno, sodio, hidrógeno y helio",
        summary: "Mercurio es el planeta más pequeño y cercano al Sol. Carece de una atmósfera densa que retenga el calor, lo que produce la fluctuación térmica más salvaje del sistema solar (más de 600 °C entre el día y la noche). Su superficie grisácea está repleta de cráteres de impacto antiquísimos.",
        curiosities: [
            "Posee cráteres en sus polos en sombra perpetua donde se ha detectado hielo de agua.",
            "Debido a su órbita elíptica y lenta rotación, en algunos puntos del planeta el Sol parece salir, retroceder y volver a salir en el mismo día.",
            "Se está encogiendo lentamente: a medida que su núcleo metálico se enfría, su corteza se arruga formando escarpados acantilados."
        ],
        missions: "Mariner 10, MESSENGER, BepiColombo"
    },
    Venus: {
        name: "Venus",
        type: "Planeta Telúrico / Rocoso",
        category: "rocoso",
        distanceKm: "108,200,000 km",
        distanceAU: "0.72 AU",
        diameter: "12,104 km",
        mass: "4.867 × 10²⁴ kg (0.815 tierras)",
        gravity: "8.87 m/s² (0.90 g)",
        temperature: "465 °C (Constante en todo el planeta)",
        orbitPeriod: "224.7 días terrestres",
        rotationPeriod: "243 días terrestres (Rotación retrógrada)",
        moons: "0",
        composition: "Núcleo de hierro, manto rocoso de silicato y corteza basáltica volcánica",
        atmosphere: "96.5% Dióxido de carbono, 3.5% Nitrógeno, nubes de ácido sulfúrico concentrado",
        summary: "Venus es el objeto natural más brillante del cielo nocturno tras la Luna. Aunque tiene un tamaño muy similar al de la Tierra, es un infierno volcánico: la presión en su superficie es 92 veces mayor a la terrestre (equivalente a 900 metros bajo el mar) y sufre un efecto invernadero desbocado.",
        curiosities: [
            "Gira en sentido contrario a la mayoría de los planetas (el Sol sale por el oeste y se pone por el este).",
            "Un día en Venus dura más que su año completo.",
            "Es el planeta más caliente de todo el Sistema Solar, superando incluso a Mercurio."
        ],
        missions: "Venera 7–14, Magellan, Venus Express, Akatsuki, DAVINCI/VERITAS (futuras)"
    },
    Tierra: {
        name: "Tierra",
        type: "Planeta Telúrico / Rocoso",
        category: "rocoso",
        distanceKm: "149,600,000 km",
        distanceAU: "1.00 AU",
        diameter: "12,742 km",
        mass: "5.972 × 10²⁴ kg (1.00 tierra)",
        gravity: "9.807 m/s² (1.00 g)",
        temperature: "-88 °C (mínima Antártida) a 58 °C (máxima), media de 15 °C",
        orbitPeriod: "365.25 días terrestres",
        rotationPeriod: "23.93 horas (23h 56m 4s sideral)",
        moons: "1 (La Luna / Selene)",
        composition: "Núcleo de hierro-níquel, manto de silicato rico en magnesio y corteza continental/oceánica",
        atmosphere: "78% Nitrógeno, 21% Oxígeno, 0.93% Argón, 0.04% Dióxido de carbono y vapor de agua",
        summary: "La Tierra es el único planeta conocido que sustenta vida y cuenta con agua líquida superficial en sus océanos (que cubren el 71% de la superficie). Su atmósfera protectora y potente campo geomagnético desvían la dañina radiación cósmica y los vientos solares.",
        curiosities: [
            "La Luna estabiliza la inclinación del eje terrestre a 23.5°, lo que permite estaciones climáticas estables.",
            "No es una esfera perfecta, sino un esferoide achatado por los polos debido a la fuerza centrífuga de su rotación.",
            "Es el planeta más denso de todo el Sistema Solar (5.51 g/cm³)."
        ],
        missions: "Miles de satélites en órbita, Estación Espacial Internacional (ISS), Observatorios Terrestres"
    },
    Marte: {
        name: "Marte",
        type: "Planeta Telúrico / Rocoso",
        category: "rocoso",
        distanceKm: "227,900,000 km",
        distanceAU: "1.52 AU",
        diameter: "6,779 km",
        mass: "6.417 × 10²³ kg (0.107 tierras)",
        gravity: "3.72 m/s² (0.38 g)",
        temperature: "-125 °C a 20 °C (Promedio: -60 °C)",
        orbitPeriod: "687 días terrestres (1.88 años)",
        rotationPeriod: "24.62 horas (1 sol marciano)",
        moons: "2 (Fobos y Deimos)",
        composition: "Corteza basáltica rica en óxido de hierro (herrumbre), manto de silicato y núcleo de hierro-azufre",
        atmosphere: "95% Dióxido de carbono, 2.6% Nitrógeno, 1.9% Argón (Presión: 0.6% de la Tierra)",
        summary: "Conocido como el planeta rojo por la abundancia de óxido de hierro en su polvo superficial. Presenta cañones colosales como Valles Marineris (4,000 km de largo) y el volcán extinto Olympus Mons, tres veces más alto que el Monte Everest. Es el principal candidato para la futura exploración tripulada.",
        curiosities: [
            "Posee casquetes polares permanentes formados por hielo de agua y dióxido de carbono congelado (hielo seco).",
            "Sufre tormentas de polvo globales que pueden envolver todo el planeta durante meses.",
            "En el pasado albergó ríos, lagos caudalosos y posiblemente un océano septentrional."
        ],
        missions: "Viking 1/2, Curiosity, Perseverance, InSight, Hope, Tianwen-1"
    },
    Jupiter: {
        name: "Júpiter",
        type: "Gigante Gaseoso",
        category: "gaseoso",
        distanceKm: "778,500,000 km",
        distanceAU: "5.20 AU",
        diameter: "139,820 km",
        mass: "1.898 × 10²⁷ kg (317.8 tierras)",
        gravity: "24.79 m/s² (2.53 g)",
        temperature: "-110 °C en la cima de las nubes",
        orbitPeriod: "11.86 años terrestres (4,333 días)",
        rotationPeriod: "9.93 horas (El día más corto del sistema solar)",
        moons: "95 lunas confirmadas (Ío, Europa, Ganimedes, Calisto entre las mayores)",
        composition: "90% Hidrógeno, 10% Helio con trazas de metano, vapor de agua y amoníaco",
        atmosphere: "Complejas bandas atmosféricas alternas con vientos de 500 km/h y tormentas anticiclónicas",
        summary: "Júpiter es el rey indiscutible de los planetas. Su descomunal masa actúa como escudo gravitacional protegiendo los planetas interiores al desviar cometas y asteroides. En su interior, la presión extrema transforma el hidrógeno en un estado líquido metálico conductor generador de un campo magnético titánico.",
        curiosities: [
            "La Gran Mancha Roja es un anticiclón gigante que lleva activo al menos 350 años y en el que cabría la Tierra entera.",
            "Ganimedes, una de sus lunas, es más grande que el planeta Mercurio y posee su propio campo magnético.",
            "Europa contiene un océano subterráneo líquido bajo su corteza de hielo con más agua que todos los océanos terrestres juntos."
        ],
        missions: "Pioneer 10/11, Voyager 1/2, Galileo, Juno, JUICE (en camino), Europa Clipper"
    },
    Saturno: {
        name: "Saturno",
        type: "Gigante Gaseoso",
        category: "gaseoso",
        distanceKm: "1,433,000,000 km",
        distanceAU: "9.58 AU",
        diameter: "116,460 km",
        mass: "5.683 × 10²⁶ kg (95.2 tierras)",
        gravity: "10.44 m/s² (1.06 g)",
        temperature: "-140 °C en la atmósfera superior",
        orbitPeriod: "29.45 años terrestres (10,759 días)",
        rotationPeriod: "10.7 horas",
        moons: "146 lunas confirmadas (Titán y Encélado las más fascinantes)",
        composition: "96% Hidrógeno, 3% Helio, trazas de metano y amoníaco",
        atmosphere: "Atmósfera brumosa amarillenta con vientos que alcanzan los 1,800 km/h y un vórtice hexagonal en el polo norte",
        summary: "Famoso por su majestuoso sistema de anillos, que se extiende hasta 282,000 km desde el planeta pero tiene un grosor medio de solo 10 a 30 metros. Los anillos están formados por miles de millones de fragmentos de hielo de agua pura, desde granos microscópicos hasta bloques del tamaño de montañas.",
        curiosities: [
            "Es el único planeta con una densidad menor que la del agua (0.687 g/cm³); flotaría en un océano colosal.",
            "En su polo norte gira una misteriosa corriente de chorro en forma de hexágono geométrico perfecto.",
            "Su luna Encélado expulsa géiseres de agua salada al espacio desde un océano interno hidrotermal."
        ],
        missions: "Pioneer 11, Voyager 1/2, Cassini-Huygens (13 años en órbita)"
    },
    Urano: {
        name: "Urano",
        type: "Gigante de Hielo",
        category: "hielo",
        distanceKm: "2,872,000,000 km",
        distanceAU: "19.22 AU",
        diameter: "50,724 km",
        mass: "8.681 × 10²⁵ kg (14.5 tierras)",
        gravity: "8.69 m/s² (0.89 g)",
        temperature: "-224 °C (La atmósfera planetaria más fría registrada)",
        orbitPeriod: "84.0 años terrestres",
        rotationPeriod: "17.24 horas (Rotación retrógrada)",
        moons: "28 lunas confirmadas (nombradas en honor a obras de Shakespeare y Alexander Pope)",
        composition: "Manto fluido de 'hielos' calientes de agua, amoníaco y metano sobre un pequeño núcleo rocoso",
        atmosphere: "83% Hidrógeno, 15% Helio, 2% Metano (que absorbe la luz roja dándole su color cian)",
        summary: "Urano es un gigante de hielo que se desplaza de costado: su eje de rotación está inclinado 97.8°, probablemente debido a una colisión catastrófica con un protoplaneta del tamaño de la Tierra durante la juventud del sistema solar. Sus estaciones son extremas y duran 21 años cada una.",
        curiosities: [
            "Fue el primer planeta descubierto mediante telescopio por William Herschel en 1781.",
            "Posee 13 anillos oscuros y tenues descubiertos en 1977.",
            "A pesar de no ser el más lejano, tiene la temperatura atmosférica más baja de todo el sistema solar (-224 °C)."
        ],
        missions: "Voyager 2 (único sobrevuelo en 1986)"
    },
    Neptuno: {
        name: "Neptuno",
        type: "Gigante de Hielo",
        category: "hielo",
        distanceKm: "4,495,000,000 km",
        distanceAU: "30.05 AU",
        diameter: "49,244 km",
        mass: "1.024 × 10²⁶ kg (17.1 tierras)",
        gravity: "11.15 m/s² (1.14 g)",
        temperature: "-200 °C promedio",
        orbitPeriod: "164.8 años terrestres (Completó su primera órbita tras su descubrimiento en 2011)",
        rotationPeriod: "16.11 horas",
        moons: "16 lunas confirmadas (Tritón es la más masiva)",
        composition: "Manto denso de fluidos supercríticos (agua, metano, amoníaco) y núcleo rocoso",
        atmosphere: "80% Hidrógeno, 19% Helio, 1.5% Metano con intensas bandas cirrosas y vórtices oscuros",
        summary: "Neptuno es el guardián exterior de los planetas mayores. Destaca por su color azul zafiro profundo y una dinámica atmosférica extrema donde se registran los vientos más feroces del sistema solar, superando los 2,100 km/h. Fue descubierto en 1846 gracias a predicciones matemáticas de anomalías orbitales en Urano.",
        curiosities: [
            "Su luna principal, Tritón, orbita en dirección retrógrada y tiene criovolcanes que expulsan nitrógeno líquido.",
            "Genera 2.6 veces más calor interno del que recibe de la débil luz solar a 4,500 millones de kilómetros.",
            "La gravedad en su superficie visible es solo un 14% mayor que la de la Tierra."
        ],
        missions: "Voyager 2 (sobrevuelo en 1989)"
    }
};

// ==========================================================================
// ESTADO Y CONTROLADORES DE LA SIMULACIÓN
// ==========================================================================
let isPaused = false;
let currentSpeed = 1;
let currentZoom = 1;
let isPerspective3D = false;
let showOrbits = true;
let showLabels = true;
let activePlanetId = null;

// Elementos del DOM
const solarStage = document.getElementById('solarStage');
const orbitViewport = document.getElementById('orbitViewport');
const btnPlayPause = document.getElementById('btnPlayPause');
const playIcon = document.getElementById('playIcon');
const playText = document.getElementById('playText');
const btnPerspective = document.getElementById('btnPerspective');
const perspectiveText = document.getElementById('perspectiveText');
const btnToggleOrbits = document.getElementById('btnToggleOrbits');
const btnToggleLabels = document.getElementById('btnToggleLabels');
const btnZoomIn = document.getElementById('btnZoomIn');
const btnZoomOut = document.getElementById('btnZoomOut');
const btnZoomReset = document.getElementById('btnZoomReset');
const speedButtons = document.querySelectorAll('.btn-speed');

// Modal Elements
const planetModal = document.getElementById('planetModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

// Comparison Elements
const selectPlanet1 = document.getElementById('selectPlanet1');
const selectPlanet2 = document.getElementById('selectPlanet2');
const comparisonDisplay = document.getElementById('comparisonDisplay');

// Filter Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const planetCards = document.querySelectorAll('.planet-card');

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initSimulationControls();
    initPlanetInteractions();
    initFilters();
    initComparisonTool();
    initModalEvents();
});

// Controles de Simulación (Play/Pause, Velocidad, 3D, Zoom)
function initSimulationControls() {
    // Play / Pause
    btnPlayPause.addEventListener('click', () => {
        isPaused = !isPaused;
        document.documentElement.style.setProperty('--orbit-play-state', isPaused ? 'paused' : 'running');
        playIcon.textContent = isPaused ? '▶' : '⏸';
        playText.textContent = isPaused ? 'Reanudar' : 'Pausar';
        btnPlayPause.classList.toggle('active-toggle', isPaused);
    });

    // Velocidades
    speedButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            speedButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSpeed = parseFloat(btn.dataset.speed);
            document.documentElement.style.setProperty('--orbit-speed-scale', currentSpeed);
        });
    });

    // Toggle 3D Perspective
    btnPerspective.addEventListener('click', () => {
        isPerspective3D = !isPerspective3D;
        solarStage.classList.toggle('perspective-3d', isPerspective3D);
        btnPerspective.classList.toggle('active-toggle', isPerspective3D);
        perspectiveText.textContent = isPerspective3D ? 'Vista 2D' : 'Vista 3D';
    });

    // Toggle Órbitas
    btnToggleOrbits.addEventListener('click', () => {
        showOrbits = !showOrbits;
        orbitViewport.classList.toggle('hide-orbits', !showOrbits);
        btnToggleOrbits.classList.toggle('active-toggle', showOrbits);
    });

    // Toggle Etiquetas
    btnToggleLabels.addEventListener('click', () => {
        showLabels = !showLabels;
        orbitViewport.classList.toggle('hide-labels', !showLabels);
        btnToggleLabels.classList.toggle('active-toggle', showLabels);
    });

    // Zoom Controls
    btnZoomIn.addEventListener('click', () => {
        if (currentZoom < 1.8) {
            currentZoom += 0.15;
            applyZoom();
        }
    });

    btnZoomOut.addEventListener('click', () => {
        if (currentZoom > 0.5) {
            currentZoom -= 0.15;
            applyZoom();
        }
    });

    btnZoomReset.addEventListener('click', () => {
        currentZoom = 1;
        applyZoom();
    });

    function applyZoom() {
        if (isPerspective3D) {
            solarStage.style.transform = `scale(${currentZoom * 0.9}) rotateX(65deg) rotateZ(-20deg)`;
        } else {
            solarStage.style.transform = `scale(${currentZoom})`;
        }
    }
}

// Interacciones con los cuerpos en el lienzo orbital
function initPlanetInteractions() {
    const bodies = document.querySelectorAll('.body-wrapper, .Sol-wrapper');
    const quickButtons = document.querySelectorAll('.btn-quick-planet');

    bodies.forEach(body => {
        body.addEventListener('click', (e) => {
            e.stopPropagation();
            const planetId = body.dataset.planet;
            if (planetId) {
                focusOnPlanet(planetId);
            }
        });
    });

    quickButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            focusOnPlanet(target);
        });
    });
}

// Enfocar planeta (resalta en órbita y en la lista)
function focusOnPlanet(planetId) {
    activePlanetId = planetId;

    // Resaltar en la simulación orbital
    document.querySelectorAll('.body-wrapper, .Sol-wrapper').forEach(b => {
        b.classList.toggle('active-planet', b.dataset.planet === planetId);
    });

    document.querySelectorAll('.orbit').forEach(o => {
        o.classList.toggle('orbit-highlight', o.dataset.orbit === planetId);
    });

    // Resaltar tarjeta en el catálogo
    document.querySelectorAll('.planet-card').forEach(card => {
        const isMatch = card.dataset.id === planetId;
        card.classList.toggle('card-highlight', isMatch);
        if (isMatch) {
            // Scroll suave hacia la tarjeta si está fuera de vista
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}
window.focusOnPlanet = focusOnPlanet;

// Filtros de categoría para las tarjetas
function initFilters() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            planetCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Modal de detalles completos del planeta
function openPlanetModal(planetId) {
    const data = PLANET_DATABASE[planetId];
    if (!data) return;

    modalContent.innerHTML = `
        <div class="modal-header-hero">
            <div class="planet-visual-avatar visual-${planetId.toLowerCase()} modal-hero-avatar"></div>
            <div>
                <span class="planet-classification">${data.type} · ${data.distanceAU}</span>
                <h2 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; color: #fff;">${data.name}</h2>
            </div>
        </div>

        <div class="modal-tabs">
            <button class="modal-tab-btn active" data-tab="general">Resumen General</button>
            <button class="modal-tab-btn" data-tab="specs">Parámetros Físicos</button>
            <button class="modal-tab-btn" data-tab="atmosphere">Atmósfera y Geología</button>
            <button class="modal-tab-btn" data-tab="curiosities">Curiosidades</button>
            <button class="modal-tab-btn" data-tab="missions">Misiones Espaciales</button>
        </div>

        <div class="modal-tab-pane active" id="tab-general">
            <p style="margin-bottom: 1rem;">${data.summary}</p>
            <table class="modal-stats-table">
                <tr>
                    <td>Distancia Media al Sol</td>
                    <td>${data.distanceKm} (${data.distanceAU})</td>
                </tr>
                <tr>
                    <td>Periodo Orbital (Año)</td>
                    <td>${data.orbitPeriod}</td>
                </tr>
                <tr>
                    <td>Periodo de Rotación (Día)</td>
                    <td>${data.rotationPeriod}</td>
                </tr>
                <tr>
                    <td>Número de Lunas</td>
                    <td>${data.moons}</td>
                </tr>
            </table>
        </div>

        <div class="modal-tab-pane" id="tab-specs">
            <table class="modal-stats-table">
                <tr>
                    <td>Diámetro Ecuatorial</td>
                    <td>${data.diameter}</td>
                </tr>
                <tr>
                    <td>Masa</td>
                    <td>${data.mass}</td>
                </tr>
                <tr>
                    <td>Gravedad Superficial</td>
                    <td>${data.gravity}</td>
                </tr>
                <tr>
                    <td>Temperatura Extrema/Media</td>
                    <td>${data.temperature}</td>
                </tr>
            </table>
        </div>

        <div class="modal-tab-pane" id="tab-atmosphere">
            <h4 style="color: #fff; margin-bottom: 0.5rem; font-family: var(--font-display);">Composición Química:</h4>
            <p style="margin-bottom: 1rem;">${data.composition}</p>
            <h4 style="color: #fff; margin-bottom: 0.5rem; font-family: var(--font-display);">Estructura Atmosférica:</h4>
            <p>${data.atmosphere}</p>
        </div>

        <div class="modal-tab-pane" id="tab-curiosities">
            <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
                ${data.curiosities.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-tab-pane" id="tab-missions">
            <p style="margin-bottom: 0.5rem; color: #fff; font-weight: 600;">Sondas e Investigaciones Principales:</p>
            <p>${data.missions}</p>
        </div>
    `;

    // Tab switching inside modal
    const tabBtns = modalContent.querySelectorAll('.modal-tab-btn');
    const tabPanes = modalContent.querySelectorAll('.modal-tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPane = modalContent.querySelector(`#tab-${targetTab}`);
            if (targetPane) targetPane.classList.add('active');
        });
    });

    planetModal.classList.add('open');
    planetModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}
window.openPlanetModal = openPlanetModal;

function initModalEvents() {
    modalClose.addEventListener('click', closeModal);
    planetModal.addEventListener('click', (e) => {
        if (e.target === planetModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && planetModal.classList.contains('open')) {
            closeModal();
        }
    });
}

function closeModal() {
    planetModal.classList.remove('open');
    planetModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ==========================================================================
// HERRAMIENTA DE COMPARACIÓN DE PLANETAS
// ==========================================================================
function initComparisonTool() {
    const planetKeys = Object.keys(PLANET_DATABASE);

    // Llenar selectores
    planetKeys.forEach((key, index) => {
        const option1 = document.createElement('option');
        option1.value = key;
        option1.textContent = PLANET_DATABASE[key].name;
        if (key === 'Tierra') option1.selected = true;
        selectPlanet1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = key;
        option2.textContent = PLANET_DATABASE[key].name;
        if (key === 'Marte') option2.selected = true;
        selectPlanet2.appendChild(option2);
    });

    selectPlanet1.addEventListener('change', renderComparison);
    selectPlanet2.addEventListener('change', renderComparison);

    renderComparison();
}

function renderComparison() {
    const p1Key = selectPlanet1.value;
    const p2Key = selectPlanet2.value;

    const p1 = PLANET_DATABASE[p1Key];
    const p2 = PLANET_DATABASE[p2Key];

    if (!p1 || !p2) return;

    comparisonDisplay.innerHTML = `
        <div class="comparison-grid">
            <!-- Planeta 1 -->
            <div class="compare-col">
                <div class="compare-avatar-wrapper">
                    <div class="planet-visual-avatar visual-${p1Key.toLowerCase()}" style="width: 70px; height: 70px;">
                        ${p1Key === 'Saturno' ? '<div class="avatar-saturn-ring" style="width: 90px; height: 30px;"></div>' : ''}
                    </div>
                </div>
                <h3 class="compare-name">${p1.name}</h3>
                <span class="compare-type">${p1.type}</span>
            </div>

            <div class="comparison-vs">VS</div>

            <!-- Planeta 2 -->
            <div class="compare-col">
                <div class="compare-avatar-wrapper">
                    <div class="planet-visual-avatar visual-${p2Key.toLowerCase()}" style="width: 70px; height: 70px;">
                        ${p2Key === 'Saturno' ? '<div class="avatar-saturn-ring" style="width: 90px; height: 30px;"></div>' : ''}
                    </div>
                </div>
                <h3 class="compare-name">${p2.name}</h3>
                <span class="compare-type">${p2.type}</span>
            </div>
        </div>

        <div class="comparison-rows">
            <div class="compare-row">
                <span class="val-left">${p1.diameter}</span>
                <span class="label-center">Diámetro</span>
                <span class="val-right">${p2.diameter}</span>
            </div>
            <div class="compare-row">
                <span class="val-left">${p1.distanceAU}</span>
                <span class="label-center">Distancia al Sol</span>
                <span class="val-right">${p2.distanceAU}</span>
            </div>
            <div class="compare-row">
                <span class="val-left">${p1.orbitPeriod}</span>
                <span class="label-center">Periodo Orbital</span>
                <span class="val-right">${p2.orbitPeriod}</span>
            </div>
            <div class="compare-row">
                <span class="val-left">${p1.rotationPeriod}</span>
                <span class="label-center">Rotación (Día)</span>
                <span class="val-right">${p2.rotationPeriod}</span>
            </div>
            <div class="compare-row">
                <span class="val-left">${p1.gravity}</span>
                <span class="label-center">Gravedad</span>
                <span class="val-right">${p2.gravity}</span>
            </div>
            <div class="compare-row">
                <span class="val-left">${p1.moons}</span>
                <span class="label-center">Lunas</span>
                <span class="val-right">${p2.moons}</span>
            </div>
            <div class="compare-row">
                <span class="val-left">${p1.temperature}</span>
                <span class="label-center">Temperatura</span>
                <span class="val-right">${p2.temperature}</span>
            </div>
        </div>
    `;
}
