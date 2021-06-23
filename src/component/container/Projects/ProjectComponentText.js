import apparelStoreMockup from '../../../shared/images/apparel-store-mockup.jpg'
import tokenizeAmazonMockup from '../../../shared/images/tokenize-amazon-mockup.jpg'
import bobaMockup from '../../../shared/images/boba-app-mockup.jpg';

// Project Component cards content
export const projectComponentCardTextConfig = [
    {
        title: "Tokenize Amazon",
        description: "Responsive Landing Page and Full website of Tokenize Amazon website.",
        image: tokenizeAmazonMockup,
        imageAlt: "Tokenize Amazon device mockups",
        gitLink: "https://github.com/312akim/apparel-store-mern",
        onClick: 1,
        modal: {
            modalTitle: "Tokenize Amazon",
            modalObjective: "Create a performant landing page from the design teams mockup to showcase startup ideas and newsletter email acquisition integration through email chimp.",
            modalTechText: [
                "Git",
                "React",
                "React Scroll",
                "React Spring",
                "Netlify Deployment",
                "Styled Components",
                "Email Chimp Integration",
            ],
            modalLearningsText: [
                "Flexbox",
                "React Spring",
                "Transition Animations",
                "Global Theme & Theme Provider",
                "Responsive Design Practices",
                "Website Image Optimization",
            ],
            modalSummaryText: [
                "My first project working with a dedicated Design team. Working and communicating with the design team gave me great insight to responsive design practices and how to communicate on a more technical level. This project brought together my previous coding/deployment experience for a great review of skills. I also made a point to utilize and master flexbox throughout the project. Site load times were a priority for me and improvements were made by converting to jpg or resizing images where possible. I considered Low Quality Placeholder and lazy loading images using cloudinary & intersect observer but decided against the implementation due to the small image sizes of the non-hero content.",
            ]
        }
    },
    {
        title: "Apparel Store",
        description: "Fullstack SPA e-commerce store built with Class Components. Cart and checkout functionality achieved through integration with Snipcart.",
        image: apparelStoreMockup,
        imageAlt: "Apparel Store Website device mockups",
        gitLink: "https://github.com/312akim/apparel-store-mern",
        onClick: 2,
        modal: {
            modalTitle: "Apparel Store",
            modalObjective: "Build a fully functioning fullstack SPA e-commerce website to be used as a template for future web-stores.",
            modalTechText: [
                "NodeJS",
                "MongoDB Atlas",
                "Express",
                "Mongoose",
                "Git",
                "Proxy",
                "Postman",
                "Snipcart Integration",
                "Netlify Deployment",
                "Heroku Backend Server",
            ],
            modalLearningsText: [
                "ENV Files",
                "React Proxy",
                "MongoDB CRUD interactions",
                "Heroku Deployment",
            ],
            modalSummaryText: [
                "My first fullstack project that covered everything from Design to Backend to Proxys. The front end is coded with React Class Components and the backend with NodeJS. One of my greatest challenges during this project was integration with Snipcart for checkout and cart functionality. The apparel website needed to send a product id to the Snipcart server which then sent a request to a specified url, expecting to receive the same price for verification. The simplest way would be for the same website and url that the product is hosted on to POST the correct price. However, since the front end was deployed on Netlify which only hosts front end code, I needed to find a different solution. The solution I chose was to create a backend response on my heroku server to POST the item ID and price for verification from the connected mongoDB database and then have the Snipcart API send a request to the heroku backend instead. I made frequent use of Postman to ensure I was receiving the expected responses from my endpoints."
            ]
        }
    },
    {
        title: "Portfolio Website",
        description: "The code behind this portfolio site, featuring the Github Octokit api to load my latest updates.",
        image: tokenizeAmazonMockup,
        imageAlt: "Portfolio Website device mockups",
        gitLink: "",
        onClick: 3,
        modal: {
            modalTitle: "Portfolio Website",
            modalObjective: "Create a performant user experience portfolio website to present my projects, knowledge, and future objectives.",
            modalTechText: [
                "Intersection Observer",
                "React Hooks",
                "React Spring",
                "React Reveal",
                "Formik",
                "Github Octokit API",
                "EmailJS integration",
                "Netlify Deployment",
                "Functional Components",
            ],
            modalLearningsText: [
                "One of the challenges I faced was making smooth animations and transitions such as the cards flipping back and forth in the projects section in tandem with component state. This is where I made use of React Spring and CSS Transitions.",
                "Using config arrays and objects to map out text for cleaner and more maneagable code.",
                "Interacting with the github octokit and emailJS API's was a new experience for me.",
                "Built entirely using functional components and first use of react hooks.",
            ],
            modalSummaryText: [
                "Working on my portfolio website gave me a chance to work build a smoother animated user experience for visitors. The website is built with functional components and was also a great project for me to experiment and learn React Hooks on. Additional highlights include working with the Octokit API to show my latest github project commits as well as heavier practice with formik forms and integrating it with an email service to receive emails through the site. The website is frequently refactored and updated with improvements discovered from other projects."
            ],
        }
    },
    {
        title: "Bubble Tea App",
        description: "In-Progress. My first React-Native project with goals to utilize Typescript and AWS.",
        image: bobaMockup,
        imageAlt: "Bubble Tea App device mockups",
        gitLink: "",
        onClick: 4,
        modal: {
            modalTitle: "Bubble Tea App",
            modalObjective: "Create a performant fullstack Bubble Tea application utilizing and familiarizing myself with React Native, Typescript, Software Architecture, and Amazon Web Services.",
            modalTechText: [
                "React Native",
                "Typescript",
                "Software Architecture",
                "Amazon Web Services",
            ],
            modalLearningsText: [
                "React Native", 
                "Typescript",
                "Software Architecture",
                "Amazon Web Services", 
            ],
            modalSummaryText: [
                "My intention with this project is to build a fullstack mobile application with a focus on utilizing React-Native, Typescript & Amazon Web Services. "
            ],
        }
    }
]