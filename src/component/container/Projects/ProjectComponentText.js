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
        gitLink: "",
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
                "My first project working with and converting a dedicated design teams mockup into a functional website. Working and communicating with the design team has given me insight on stronger responsive design practices and experience communicating in a more technical manner.", 

                "The project as a whole brought together my previous projects knowledge and experiences into a clean project where I could focus on the overall structure. I also made a goal of utilizing and gaining mastery of flexbox for spacing.",

                "Site load times were something I kept in mind due to the number of images on the website. Improvements were made by converting and resizing images. Low quality placeholder and lazy loading images were solutions I considered but decided against due to non-hero content images being relatively small."
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
                "My first fullstack SPA that I built from the ground up.",

                "I deployed the front end code on Netlify and chose Heroku for the backend functionality to serve data from a Mongo database. The front end makes a request on load to the Heroku server for products and populates the site.",

                "Cart, checkout, payment, and address functionality is provided by Snipcart which is integrated into each product page on Netlify. Once a user attempts to checkout, the product cart button makes specifies where Snipcart should make a POST request to verify product id and price.",

                "This is normally the same page as the product page but as Netlify only provides front end services, I added back end functionality to the Heroku server to return the requested products id and it's price for Snipcarts verification. The webstore domain and verification domain are whitelisted within the Snipcart account to prevent HTML price manipulation and false verifications.",

                "As the apparel store was my largest project to date, I ran into a plethora of bugs and challenges. Postman was especially effective in overcoming back end and data base challenges I faced.",

                "Overall, working on the apparel store has given me a strong overview of how a fully functioning app works from front to back and has made me a stronger developer.",
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
                "Working on my portfolio website gave me a chance to work build a smoother animated user experience for visitors. The website is built with functional components and was also a great project for me to experiment and learn React Hooks on.", 
                
                "Highlights include working with the Octokit API to show my latest github project commits as well as heavier practice with formik forms and integrating it with an email service API. The website is frequently refactored and updated with improvements discovered from other projects."
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
            modalObjective: "Create a performant fullstack Bubble Tea application utilizing and familiarizing myself with React Native, Typescript, Redux, Software Architecture, and Amazon Web Services.",
            modalTechText: [
                "React Native",
                "Typescript",
                "Redux",
                "Software Architecture",
                "Amazon Web Services",
            ],
            modalLearningsText: [
                "React Native", 
                "Typescript",
                "Redux",
                "Software Architecture",
                "Amazon Web Services", 
            ],
            modalSummaryText: [
                "My intention with this project is to build a fullstack mobile application with a focus on utilizing React-Native, Typescript, Redux and Amazon Web Services. I chose common and frequently used tech/tools to expand my skillset.",

                "Although the scope of the project may be too small to justify using Redux, I am choosing to implement it for learning purposes."
            ],
        }
    }
]