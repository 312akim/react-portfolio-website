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
            modalText: "Project consisting of a Landing Page with the goal of introducing a startup's ideas and email newsletter signups.",
            modalTechText: [
                "Git", 
                "React", 
                "React-Scroll", 
                "React-Spring", 
                "Netlify Deployment",
                "Styled Components", 
                "Email Chimp Integration",
            ],
            modalLearningsText: [
                "React Spring", 
                "Transition Animations", 
                "Global Theme & Theme Provider",
                "Flexbox"
            ],
            modalSummaryText: [
                "My first project working with a dedicated Design team. This project brought together communication with much of my previous coding/deployment experience for a great review of skills. I also made a point to utilize and learn flexbox throughout the project.",
            ]
        }
    },
    {
        title: "Apparel Store",
        description: "Responsive fullstack SPA e-commerce store. Cart and checkout functionality achieved through integration with Snipcart.",
        image: apparelStoreMockup,
        imageAlt: "Apparel Store Website device mockups",
        gitLink: "https://github.com/312akim/apparel-store-mern",
        onClick: 2,
        modal: {
            modalTitle: "Apparel Store",
            modalText: "A fullstack e-commerce website",
            modalTechText: [
                "Snipcart Integration", 
                "Netlify Deployment", 
                "Heroku Backend Server",
                "NodeJS",
                "MongoDB Atlas",
                "Express",
                "Mongoose",
                "Git",
                "Proxy"
            ],
            modalLearningsText: ["lL1", "lL2", "lL3"],
            modalSummaryText: ["My first fullstack project"]
        }
    },
    {
        title: "Portfolio Website",
        description: "The code behind this portfolio site, featuring the Github Octokit api to load my latest updates.",
        image: tokenizeAmazonMockup,
        imageAlt: "Portfolio Website device mockups",
        gitLink: "https://github.com/312akim/apparel-store-mern",
        onClick: 3,
        modal: {
            modalTitle: "Portfolio Website",
            modalText: "PlaceholderText3",
            modalTechText: [
                "lT1", 
                "lT2", 
                "lT3"
            ],
            modalLearningsText: [
                "lL1", 
                "lL2", 
                "lL3"
            ],
            modalSummaryText: [
                "lS1", 
                "lS2", 
                "lS3"
            ],
        }
    },
    {
        title: "Bubble Tea App",
        description: "In-Progress. My first React-Native project.",
        image: bobaMockup,
        imageAlt: "Bubble Tea App device mockups",
        gitLink: "https://github.com/312akim/apparel-store-mern",
        onClick: 4,
        modal: {
            modalTitle: "Bubble Tea App",
            modalText: "PlaceholderText4",
            modalTechText: [
                "lT1", 
                "lT2", 
                "lT3"
            ],
            modalLearningsText: [
                "lL1", 
                "lL2", 
                "lL3"
            ],
            modalSummaryText: [
                "lS1", 
                "lS2", 
                "lS3"
            ],
        }
    }
]