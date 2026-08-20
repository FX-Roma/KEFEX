/**
 * @fileoverview Catálogo Centralizado de Foros y Productos - KEFEX Ecosystem
 * @description Colección oficial de 40 artículos con assets visuales optimizados.
 */

export const FORUM_DATABASE_40 = [
    // --- 1. E-COMMERCE (5) ---
    {
        id: "post-ec-1",
        category: "ecommerce",
        categoryLabel: "E-commerce",
        topFilter: "recientes",
        title: "Optimización de checkout en Shopify Plus con Stripe Elements",
        author: { name: "DevCommerce", verified: true, avatar: "https://i.pravatar.cc/150?u=ec1" },
        date: "Hace 10 minutos",
        score: 4.8, votes: 45, commentsCount: 12,
        excerpt: "Cómo redujimos el abandono de carrito un 18% implementando pagos en un solo clic y Apple Pay directo.",
        product: { 
            name: "Shopify Plus Enterprise", 
            brand: "Shopify", 
            price: "$2,000 USD/mes", 
            image: "https://images.unsplash.com/photo-1556742049-0a67dd612457?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.shopify.com/plus" 
        }
    },
    {
        id: "post-ec-2",
        category: "ecommerce",
        categoryLabel: "E-commerce",
        topFilter: "valorados",
        title: "Logística transfronteriza: Guía de integración con DHL Express API",
        author: { name: "LogisticsPro", verified: true, avatar: "https://i.pravatar.cc/150?u=ec2" },
        date: "Hace 3 horas",
        score: 5.0, votes: 310, commentsCount: 45,
        excerpt: "Análisis técnico de la API REST de DHL para cálculo de impuestos en origen y generación de guías automatizadas.",
        product: { 
            name: "DHL Express Commerce API", 
            brand: "DHL", 
            price: "Personalizado", 
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.dhl.com" 
        }
    },
    {
        id: "post-ec-3",
        category: "ecommerce",
        categoryLabel: "E-commerce",
        topFilter: "discutidos",
        title: "¿WooCommerce o Magento (Adobe Commerce) para +100k SKUs?",
        author: { name: "ArchArchitect", verified: false, avatar: "https://i.pravatar.cc/150?u=ec3" },
        date: "Hace 5 horas",
        score: 4.5, votes: 189, commentsCount: 98,
        excerpt: "Debate abierto sobre indexación en MySQL vs Elasticsearch para catálogos masivos en infraestructuras AWS.",
        product: { 
            name: "Adobe Commerce Enterprise", 
            brand: "Adobe", 
            price: "Cotización", 
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://business.adobe.com/products/magento/magento-commerce.html" 
        }
    },
    {
        id: "post-ec-4",
        category: "ecommerce",
        categoryLabel: "E-commerce",
        topFilter: "sin-responder",
        title: "Fallo en webhook de cancelación de pedidos en Tiendanube",
        author: { name: "JuniorDev99", verified: false, avatar: "https://i.pravatar.cc/150?u=ec4" },
        date: "Hace 1 día",
        score: 3.5, votes: 2, commentsCount: 0,
        excerpt: "El evento order/cancelled no está devolviendo el payload completo de reembolso. ¿Alguien con la misma incidencia?",
        product: { 
            name: "Tiendanube API", 
            brand: "Tiendanube", 
            price: "$15 USD/mes", 
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.tiendanube.com" 
        }
    },
    {
        id: "post-ec-5",
        category: "ecommerce",
        categoryLabel: "E-commerce",
        topFilter: "recientes",
        title: "Implementación de BVC (BigCommerce Visual Composer)",
        author: { name: "FrontendMaster", verified: true, avatar: "https://i.pravatar.cc/150?u=ec5" },
        date: "Hace 20 minutos",
        score: 4.6, votes: 28, commentsCount: 4,
        excerpt: "Personalización de widgets React headless sobre el motor de BigCommerce Stencil.",
        product: { 
            name: "BigCommerce Headless", 
            brand: "BigCommerce", 
            price: "$299 USD/mes", 
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.bigcommerce.com" 
        }
    },

    // --- 2. TECNOLOGÍA (5) ---
    {
        id: "post-tec-1",
        category: "tecnologia",
        categoryLabel: "Tecnología",
        topFilter: "recientes",
        title: "MacBook Pro M3 Max en desarrollo backend: Benchmark de compilación",
        author: { name: "CarlosM_Tech", verified: true, avatar: "https://i.pravatar.cc/150?u=tec1" },
        date: "Hace 5 minutos",
        score: 4.9, votes: 142, commentsCount: 28,
        excerpt: "Pruebas de estrés con 10 contenedores Docker, bases de datos PostgreSQL y compilación masiva en Go.",
        product: { 
            name: "MacBook Pro 16\" M3 Max", 
            brand: "Apple", 
            price: "$3,499 USD", 
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.apple.com/macbook-pro/" 
        }
    },
    {
        id: "post-tec-2",
        category: "tecnologia",
        categoryLabel: "Tecnología",
        topFilter: "valorados",
        title: "Sennheiser HD 660S2: Análisis dinámico de impedancia y respuesta",
        author: { name: "AudioPhile_Senior", verified: true, avatar: "https://i.pravatar.cc/150?u=tec2" },
        date: "Hace 2 horas",
        score: 5.0, votes: 520, commentsCount: 64,
        excerpt: "Respuesta cromática en medios y graves profundos con amplificador equilibrado de 300 ohms.",
        product: { 
            name: "Sennheiser HD 660S2", 
            brand: "Sennheiser", 
            price: "$499 USD", 
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.sennheiser-hearing.com" 
        }
    },
    {
        id: "post-tec-3",
        category: "tecnologia",
        categoryLabel: "Tecnología",
        topFilter: "discutidos",
        title: "ASUS ROG Swift OLED 27\" vs Dell Alienware AW2725DF 360Hz",
        author: { name: "HardwareLab", verified: true, avatar: "https://i.pravatar.cc/150?u=tec3" },
        date: "Hace 4 horas",
        score: 4.7, votes: 310, commentsCount: 112,
        excerpt: "Comparativa técnica: retención de imagen, tiempo de respuesta de 0.03ms y fidelidad de color HDR.",
        product: { 
            name: "ASUS ROG Swift OLED PG27AQDM", 
            brand: "ASUS", 
            price: "$899 USD", 
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://rog.asus.com" 
        }
    },
    {
        id: "post-tec-4",
        category: "tecnologia",
        categoryLabel: "Tecnología",
        topFilter: "sin-responder",
        title: "Problema de firmware en SSD Samsung 990 PRO 2TB en Linux Kernel 6.8",
        author: { name: "KernelDev", verified: false, avatar: "https://i.pravatar.cc/150?u=tec4" },
        date: "Hace 12 horas",
        score: 4.0, votes: 15, commentsCount: 0,
        excerpt: "Caída sostenida de velocidades de escritura I/O al superar los 50°C sin disipador pasivo.",
        product: { 
            name: "Samsung 990 PRO NVMe 2TB", 
            brand: "Samsung", 
            price: "$179 USD", 
            image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.samsung.com" 
        }
    },
    {
        id: "post-tec-5",
        category: "tecnologia",
        categoryLabel: "Tecnología",
        topFilter: "recientes",
        title: "Keychron K2 Pro: Mapeo avanzado de capas mediante VIA Keyboard Configuration",
        author: { name: "TypingGeek", verified: true, avatar: "https://i.pravatar.cc/150?u=tec5" },
        date: "Hace 30 minutos",
        score: 4.8, votes: 76, commentsCount: 9,
        excerpt: "Cómo configurar atajos de desarrollo personalizado en capas secundarias dentro de la EEPROM.",
        product: { 
            name: "Keychron K2 Pro QMK", 
            brand: "Keychron", 
            price: "$119 USD", 
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.keychron.com" 
        }
    },

    // --- 3. MODA (5) ---
    {
        id: "post-mod-1",
        category: "moda",
        categoryLabel: "Moda",
        topFilter: "recientes",
        title: "Nike Air Max DN: Tecnología Dynamic Air y amortiguación dual",
        author: { name: "SneakerHead_X", verified: true, avatar: "https://i.pravatar.cc/150?u=mod1" },
        date: "Hace 1 hora",
        score: 4.7, votes: 88, commentsCount: 15,
        excerpt: "Análisis de los tubos de presión dual que transfieren el aire dinámicamente con cada pisada.",
        product: { 
            name: "Nike Air Max DN", 
            brand: "Nike", 
            price: "$160 USD", 
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.nike.com" 
        }
    },
    {
        id: "post-mod-2",
        category: "moda",
        categoryLabel: "Moda",
        topFilter: "valorados",
        title: "Chaqueta Patagonia Down Sweater: Resistencia térmica e hilado reciclado",
        author: { name: "EcoOutdoor", verified: true, avatar: "https://i.pravatar.cc/150?u=mod2" },
        date: "Hace 1 día",
        score: 4.9, votes: 410, commentsCount: 38,
        excerpt: "Prueba de aislamiento en condiciones bajo cero y durabilidad del tejido NetPlus de redes de pesca.",
        product: { 
            name: "Patagonia Down Sweater", 
            brand: "Patagonia", 
            price: "$279 USD", 
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.patagonia.com" 
        }
    },
    {
        id: "post-mod-3",
        category: "moda",
        categoryLabel: "Moda",
        topFilter: "discutidos",
        title: "Mochila Peak Design Everyday 20L: ¿Vale su elevado coste?",
        author: { name: "UrbanStyle", verified: false, avatar: "https://i.pravatar.cc/150?u=mod3" },
        date: "Hace 2 días",
        score: 4.4, votes: 230, commentsCount: 84,
        excerpt: "Debate sobre el sistema de divisores MagFold y la impermeabilidad real bajo lluvia torrencial.",
        product: { 
            name: "Everyday Backpack 20L", 
            brand: "Peak Design", 
            price: "$279 USD", 
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.peakdesign.com" 
        }
    },
    {
        id: "post-mod-4",
        category: "moda",
        categoryLabel: "Moda",
        topFilter: "sin-responder",
        title: "Tallas de Botas Red Wing Iron Ranger: ¿Comprar media talla menos?",
        author: { name: "BootsCollector", verified: false, avatar: "https://i.pravatar.cc/150?u=mod4" },
        date: "Hace 2 días",
        score: 4.1, votes: 12, commentsCount: 0,
        excerpt: "Consulta sobre el amoldado del cuero Amber Harness en el puente del pie antes de la primera postura.",
        product: { 
            name: "Red Wing Iron Ranger 8111", 
            brand: "Red Wing", 
            price: "$349 USD", 
            image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.redwingshoes.com" 
        }
    },
    {
        id: "post-mod-5",
        category: "moda",
        categoryLabel: "Moda",
        topFilter: "valorados",
        title: "Gafas Ray-Ban Meta Smart Glasses: Estilo clásico con grabación 1080p",
        author: { name: "FashionTech", verified: true, avatar: "https://i.pravatar.cc/150?u=mod5" },
        date: "Hace 3 días",
        score: 4.8, votes: 350, commentsCount: 52,
        excerpt: "Integración de audio en patillas y cámara ultra gran angular en monturas Wayfarer tradicionales.",
        product: { 
            name: "Ray-Ban Meta Wayfarer", 
            brand: "Ray-Ban", 
            price: "$299 USD", 
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.ray-ban.com" 
        }
    },

    // --- 4. HOGAR (5) ---
    {
        id: "post-hog-1",
        category: "hogar",
        categoryLabel: "Hogar",
        topFilter: "recientes",
        title: "Aspiradora Robot Roborock S8 MaxV Ultra: Mapeo LiDAR y fregado 60°C",
        author: { name: "SmartHome_Guru", verified: true, avatar: "https://i.pravatar.cc/150?u=hog1" },
        date: "Hace 40 minutos",
        score: 4.9, votes: 95, commentsCount: 18,
        excerpt: "Evaluación de la evitación de obstáculos por IA y el llenado/vaciado automático en la base.",
        product: { 
            name: "Roborock S8 MaxV Ultra", 
            brand: "Roborock", 
            price: "$1,599 USD", 
            image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://us.roborock.com" 
        }
    },
    {
        id: "post-hog-2",
        category: "hogar",
        categoryLabel: "Hogar",
        topFilter: "valorados",
        title: "Silla Ergonómica Herman Miller Embody: Análisis ortopédico tras 1 año",
        author: { name: "ErgoHealth", verified: true, avatar: "https://i.pravatar.cc/150?u=hog2" },
        date: "Hace 1 día",
        score: 5.0, votes: 680, commentsCount: 79,
        excerpt: "Distribución de presión en la matriz Pixelated Support e impacto en la postura lumbar.",
        product: { 
            name: "Herman Miller Embody", 
            brand: "Herman Miller", 
            price: "$1,695 USD", 
            image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.hermanmiller.com" 
        }
    },
    {
        id: "post-hog-3",
        category: "hogar",
        categoryLabel: "Hogar",
        topFilter: "discutidos",
        title: "Dyson V15 Detect Submarine: ¿Sustituye a la fregona tradicional?",
        author: { name: "CleanTech", verified: false, avatar: "https://i.pravatar.cc/150?u=hog3" },
        date: "Hace 3 días",
        score: 4.3, votes: 210, commentsCount: 105,
        excerpt: "Polémica sobre la limpieza del rodillo húmedo y la autonomía en potencia Boost.",
        product: { 
            name: "Dyson V15 Submarine", 
            brand: "Dyson", 
            price: "$949 USD", 
            image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.dyson.com" 
        }
    },
    {
        id: "post-hog-4",
        category: "hogar",
        categoryLabel: "Hogar",
        topFilter: "sin-responder",
        title: "Lámpara BenQ ScreenBar Halo: Calibración con monitores curvos 1500R",
        author: { name: "SetupMaker", verified: false, avatar: "https://i.pravatar.cc/150?u=hog4" },
        date: "Hace 2 días",
        score: 4.2, votes: 8, commentsCount: 0,
        excerpt: "¿Produce reflejos incómodos en paneles ultra-wide con acabado mate agredido?",
        product: { 
            name: "BenQ ScreenBar Halo", 
            brand: "BenQ", 
            price: "$179 USD", 
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.benq.com" 
        }
    },
    {
        id: "post-hog-5",
        category: "hogar",
        categoryLabel: "Hogar",
        topFilter: "discutidos",
        title: "Purificador Philips Series 3000i: Medición de partículas PM2.5 reales",
        author: { name: "AirQualityLab", verified: true, avatar: "https://i.pravatar.cc/150?u=hog5" },
        date: "Hace 4 días",
        score: 4.6, votes: 175, commentsCount: 62,
        excerpt: "Eficacia de filtrado HEPA NanoProtect contra alérgenos y compuestos orgánicos volátiles.",
        product: { 
            name: "Philips Air Purifier 3000i", 
            brand: "Philips", 
            price: "$399 USD", 
            image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.philips.com" 
        }
    },

    // --- 5. GAMING (5) ---
    {
        id: "post-gam-1",
        category: "gaming",
        categoryLabel: "Gaming",
        topFilter: "recientes",
        title: "Steam Deck OLED 1TB: Eficiencia del APU AMD Seis-Nanómetros",
        author: { name: "GamerArch", verified: true, avatar: "https://i.pravatar.cc/150?u=gam1" },
        date: "Hace 15 minutos",
        score: 4.9, votes: 230, commentsCount: 34,
        excerpt: "Pruebas de consumo energético a 15W TDP en Cyberpunk 2077 con pantalla HDR OLED.",
        product: { 
            name: "Steam Deck OLED 1TB", 
            brand: "Valve", 
            price: "$649 USD", 
            image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://store.steampowered.com/steamdeck" 
        }
    },
    {
        id: "post-gam-2",
        category: "gaming",
        categoryLabel: "Gaming",
        topFilter: "valorados",
        title: "Mando DualSense Edge PS5: Configuración de gatillos ajustables y palancas",
        author: { name: "ProGamer_Zone", verified: true, avatar: "https://i.pravatar.cc/150?u=gam2" },
        date: "Hace 1 día",
        score: 4.8, votes: 540, commentsCount: 42,
        excerpt: "Perfiles de curva de respuesta para joysticks y calibración de zonas muertas para eSports.",
        product: { 
            name: "DualSense Edge Wireless", 
            brand: "PlayStation", 
            price: "$199 USD", 
            image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.playstation.com" 
        }
    },
    {
        id: "post-gam-3",
        category: "gaming",
        categoryLabel: "Gaming",
        topFilter: "discutidos",
        title: "Tarjeta Gráfica NVIDIA RTX 4090 vs AMD Radeon RX 7900 XTX en 4K",
        author: { name: "BenchmarkRig", verified: true, avatar: "https://i.pravatar.cc/150?u=gam3" },
        date: "Hace 2 días",
        score: 4.6, votes: 620, commentsCount: 215,
        excerpt: "Análisis masivo de Ray Tracing, DLSS 3.5 Frame Generation frente a FSR 3 en 20 juegos.",
        product: { 
            name: "NVIDIA GeForce RTX 4090", 
            brand: "NVIDIA", 
            price: "$1,599 USD", 
            image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.nvidia.com" 
        }
    },
    {
        id: "post-gam-4",
        category: "gaming",
        categoryLabel: "Gaming",
        topFilter: "sin-responder",
        title: "Ruido de latido (Coil Whine) en Fuente ASUS ROG Thor 1200W Platinum II",
        author: { name: "PCBuilder_New", verified: false, avatar: "https://i.pravatar.cc/150?u=gam4" },
        date: "Hace 1 día",
        score: 3.8, votes: 5, commentsCount: 0,
        excerpt: "Sonido agudo al superar el 80% de carga sintética en test de Power Supply OCCT.",
        product: { 
            name: "ASUS ROG Thor 1200W", 
            brand: "ASUS", 
            price: "$339 USD", 
            image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://rog.asus.com" 
        }
    },
    {
        id: "post-gam-5",
        category: "gaming",
        categoryLabel: "Gaming",
        topFilter: "sin-responder",
        title: "Silla Gaming Secretlab TITAN Evo 2024: ¿Tejido SoftWeave Plus o Cuero PU?",
        author: { name: "ChairTester", verified: false, avatar: "https://i.pravatar.cc/150?u=gam5" },
        date: "Hace 3 días",
        score: 4.4, votes: 19, commentsCount: 0,
        excerpt: "Dudas sobre transpirabilidad en climas cálidos y durabilidad del soporte lumbar magnético.",
        product: { 
            name: "Secretlab TITAN Evo", 
            brand: "Secretlab", 
            price: "$549 USD", 
            image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://secretlab.co" 
        }
    },

    // --- 6. BELLEZA (5) ---
    {
        id: "post-bel-1",
        category: "belleza",
        categoryLabel: "Belleza",
        topFilter: "recientes",
        title: "Multiestilizador Dyson Airwrap Multi-Styler: Control inteligente de calor",
        author: { name: "BeautyTech_Laura", verified: true, avatar: "https://i.pravatar.cc/150?u=bel1" },
        date: "Hace 50 minutos",
        score: 4.9, votes: 110, commentsCount: 22,
        excerpt: "Efecto Coanda para moldear sin daño térmico extremo. Evaluación de nuevos barriles largos.",
        product: { 
            name: "Dyson Airwrap Complete", 
            brand: "Dyson", 
            price: "$599 USD", 
            image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.dyson.com" 
        }
    },
    {
        id: "post-bel-2",
        category: "belleza",
        categoryLabel: "Belleza",
        topFilter: "valorados",
        title: "Sérum CeraVe Skin Renewing Vitamin C: Estabilidad del ácido L-ascórbico 10%",
        author: { name: "DermoExpert", verified: true, avatar: "https://i.pravatar.cc/150?u=bel2" },
        date: "Hace 2 días",
        score: 4.8, votes: 380, commentsCount: 41,
        excerpt: "Formulación con 3 ceramidas esenciales y ácido hialurónico para barrera cutánea sensible.",
        product: { 
            name: "CeraVe Vitamin C Serum", 
            brand: "CeraVe", 
            price: "$25 USD", 
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.cerave.com" 
        }
    },
    {
        id: "post-bel-3",
        category: "belleza",
        categoryLabel: "Belleza",
        topFilter: "discutidos",
        title: "Máscara LED FAQ 202 de FOREO: Terapia de luz roja y cercana al infrarrojo",
        author: { name: "SkincareAddict", verified: false, avatar: "https://i.pravatar.cc/150?u=bel3" },
        date: "Hace 4 días",
        score: 4.2, votes: 145, commentsCount: 78,
        excerpt: "Discusión clínica sobre la penetración en dermis y estimulación natural de colágeno.",
        product: { 
            name: "FOREO FAQ 202 LED Mask", 
            brand: "FOREO", 
            price: "$839 USD", 
            image: "https://images.unsplash.com/photo-1512290900673-7002ff01da91?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.foreo.com" 
        }
    },
    {
        id: "post-bel-4",
        category: "belleza",
        categoryLabel: "Belleza",
        topFilter: "sin-responder",
        title: "Protector Solar La Roche-Posay Anthelios UVMune 400: Acabado en piel grasa",
        author: { name: "SkinGlow", verified: false, avatar: "https://i.pravatar.cc/150?u=bel4" },
        date: "Hace 1 día",
        score: 4.5, votes: 14, commentsCount: 0,
        excerpt: "¿Deja residuo blanco o brillo tras reaplicación continua cada 2 horas?",
        product: { 
            name: "Anthelios UVMune 400 Fluid", 
            brand: "La Roche-Posay", 
            price: "$22 USD", 
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.laroche-posay.com" 
        }
    },
    {
        id: "post-bel-5",
        category: "belleza",
        categoryLabel: "Belleza",
        topFilter: "valorados",
        title: "Limpiador Facial Foreo LUNA 4: Pulsaciones T-Sonic y silicona ultra-higiénica",
        author: { name: "GlowBeauty", verified: true, avatar: "https://i.pravatar.cc/150?u=bel5" },
        date: "Hace 3 días",
        score: 4.7, votes: 290, commentsCount: 31,
        excerpt: "Análisis de eficacia retirando maquillaje de larga duración frente a limpieza manual.",
        product: { 
            name: "FOREO LUNA 4 Smart Device", 
            brand: "FOREO", 
            price: "$279 USD", 
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.foreo.com" 
        }
    },

    // --- 7. SUPERMERCADO (5) ---
    {
        id: "post-sup-1",
        category: "supermercado",
        categoryLabel: "Supermercado",
        topFilter: "recientes",
        title: "Café en Grano Lavazza Super Crema: Perfil de tueste y extracción Espresso",
        author: { name: "BaristaPro", verified: true, avatar: "https://i.pravatar.cc/150?u=sup1" },
        date: "Hace 2 horas",
        score: 4.8, votes: 65, commentsCount: 11,
        excerpt: "Notas de avellana y miel en ratio 1:2 en máquinas espresso semi-automáticas.",
        product: { 
            name: "Lavazza Super Crema 1kg", 
            brand: "Lavazza", 
            price: "$24 USD", 
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.lavazza.com" 
        }
    },
    {
        id: "post-sup-2",
        category: "supermercado",
        categoryLabel: "Supermercado",
        topFilter: "valorados",
        title: "Aceite de Oliva Virgen Extra Oro Bailén Picual: Acidez 0.1° y polifenoles",
        author: { name: "GourmetChef", verified: true, avatar: "https://i.pravatar.cc/150?u=sup2" },
        date: "Hace 2 días",
        score: 5.0, votes: 480, commentsCount: 29,
        excerpt: "Cata de uno de los aceites de oliva más galardonados del mundo. Notas frutadas e intensidad.",
        product: { 
            name: "Oro Bailén Reserva Familiar 500ml", 
            brand: "Oro Bailén", 
            price: "$22 USD", 
            image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.orobailen.com" 
        }
    },
    {
        id: "post-sup-3",
        category: "supermercado",
        categoryLabel: "Supermercado",
        topFilter: "discutidos",
        title: "Proteína Whey Optimum Nutrition Gold Standard 100%: ¿Fórmula alterada?",
        author: { name: "FitnessNutri", verified: false, avatar: "https://i.pravatar.cc/150?u=sup3" },
        date: "Hace 3 días",
        score: 4.1, votes: 310, commentsCount: 140,
        excerpt: "Polémica en la comunidad por cambios en los edulcorantes del sabor Doble Rico Chocolate.",
        product: { 
            name: "ON Gold Standard Whey 5lbs", 
            brand: "Optimum Nutrition", 
            price: "$84 USD", 
            image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.optimumnutrition.com" 
        }
    },
    {
        id: "post-sup-4",
        category: "supermercado",
        categoryLabel: "Supermercado",
        topFilter: "sin-responder",
        title: "Freidora de Aire Ninja Foodi DualZone AF300: Consumo energético KWh",
        author: { name: "HomeChef_Saver", verified: false, avatar: "https://i.pravatar.cc/150?u=sup4" },
        date: "Hace 1 día",
        score: 4.4, votes: 9, commentsCount: 0,
        excerpt: "Medición en tiempo real con enchufe inteligente durante 30 minutos a 200°C.",
        product: { 
            name: "Ninja DualZone AF300", 
            brand: "Ninja", 
            price: "$199 USD", 
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.ninjakitchen.com" 
        }
    },
    {
        id: "post-sup-5",
        category: "supermercado",
        categoryLabel: "Supermercado",
        topFilter: "sin-responder",
        title: "Cápsulas Nespresso Master Origin Colombia: Proceso de lavado tardío",
        author: { name: "CoffeeLover", verified: false, avatar: "https://i.pravatar.cc/150?u=sup5" },
        date: "Hace 2 días",
        score: 4.6, votes: 18, commentsCount: 0,
        excerpt: "Notas vinagres y afrutadas características de la alta montaña colombiana.",
        product: { 
            name: "Nespresso Master Origin Colombia", 
            brand: "Nespresso", 
            price: "$11 USD/pack", 
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.nespresso.com" 
        }
    },

    // --- 8. MARKETPLACE (5) ---
    {
        id: "post-mp-1",
        category: "marketplace",
        categoryLabel: "Marketplace",
        topFilter: "recientes",
        title: "Vender en Mercado Libre Full vs Amazon FBA en Latinoamérica 2026",
        author: { name: "SellerExpert", verified: true, avatar: "https://i.pravatar.cc/150?u=mp1" },
        date: "Hace 10 minutos",
        score: 4.8, votes: 120, commentsCount: 26,
        excerpt: "Análisis comparativo de comisiones por almacenamiento, tiempos de entrega y retenciones fiscales.",
        product: { 
            name: "Mercado Libre Full Logistics", 
            brand: "Mercado Libre", 
            price: "Comisión %", 
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.mercadolibre.com" 
        }
    },
    {
        id: "post-mp-2",
        category: "marketplace",
        categoryLabel: "Marketplace",
        topFilter: "valorados",
        title: "Anuncios Amazon Sponsored Products: Estrategia PPC con ACOS < 15%",
        author: { name: "PPC_Mastermind", verified: true, avatar: "https://i.pravatar.cc/150?u=mp2" },
        date: "Hace 1 día",
        score: 4.9, votes: 490, commentsCount: 55,
        excerpt: "Optimización de palabras clave de concordancia exacta y negación sistemática de términos con alto gasto.",
        product: { 
            name: "Amazon Ads Console", 
            brand: "Amazon", 
            price: "PPC Dinámico", 
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://advertising.amazon.com" 
        }
    },
    {
        id: "post-mp-3",
        category: "marketplace",
        categoryLabel: "Marketplace",
        topFilter: "discutidos",
        title: "Temu Seller Central: Impacto en vendedores locales de pequeñas utilidades",
        author: { name: "RetailAnalyst", verified: false, avatar: "https://i.pravatar.cc/150?u=mp3" },
        date: "Hace 2 días",
        score: 4.0, votes: 280, commentsCount: 165,
        excerpt: "Debate sobre subsidios de envío directo desde China y normativas aduaneras de minimis.",
        product: { 
            name: "Temu Global Marketplace", 
            brand: "Temu", 
            price: "Acceso Gratuito", 
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://www.temu.com" 
        }
    },
    {
        id: "post-mp-4",
        category: "marketplace",
        categoryLabel: "Marketplace",
        topFilter: "sin-responder",
        title: "Bloqueo preventivo de cuenta en Walmart Seller Center por ODR > 1%",
        author: { name: "SellerHelp", verified: false, avatar: "https://i.pravatar.cc/150?u=mp4" },
        date: "Hace 1 día",
        score: 3.9, votes: 7, commentsCount: 0,
        excerpt: "Plan de Acción (POA) rechazado dos veces tras retrasos de paquetería en festivos.",
        product: { 
            name: "Walmart Marketplace Center", 
            brand: "Walmart", 
            price: "Comisión %", 
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://marketplace.walmart.com" 
        }
    },
    {
        id: "post-mp-5",
        category: "marketplace",
        categoryLabel: "Marketplace",
        topFilter: "valorados",
        title: "Integración de eBay API con ERP SAP Business One",
        author: { name: "EnterpriseDev", verified: true, avatar: "https://i.pravatar.cc/150?u=mp5" },
        date: "Hace 3 días",
        score: 4.7, votes: 310, commentsCount: 22,
        excerpt: "Sincronización bidireccional de inventario e ingresos mediante conectores REST OAuth 2.0.",
        product: { 
            name: "eBay REST API", 
            brand: "eBay", 
            price: "Gratuito con límites", 
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            officialUrl: "https://developer.ebay.com" 
        }
    }
];