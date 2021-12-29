// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function projectsAPI(req, res) {
    res.status(200).json(
        [
            {
                category: "Open Source Projects",
                projects: [
                    {
                        title: "PWA:: Hulu 2.0",
                        image: "hulu-2.png",
                        url: "https://hulu-2-theta.vercel.app/",
                        content: "Hulu Clone App built with React.JS! (Next.js, Tailwind CSS, Responsive)",
                        tags: [
                            {tag: "React.Js"},
                            {tag: "Next.Js"},
                            {tag: "Tailwind CSS"},
                            {tag: "Responsive"}
                        ]
                    },
                    {
                        title: "PWA:: Amazon Clone App",
                        image: "amazon.png",
                        url: "https://clone-73627.web.app/",
                        content: "Amazon Clone built with React, React Context API and firebase authentication",
                        tags: [
                            {tag: "React.Js"},
                            {tag: "React Context API"},
                            {tag: "Firebase"}
                        ]
                    },
                    {
                        title: "PWA:: COVID-19 Tracker Web App",
                        image: "covid19.png",
                        url: "https://covid-19-tracker-640fb.web.app/",
                        content: "COVID-19 Tracker Web App with React JS (React Hooks and Material UI)",
                        tags: [
                            {tag: "React.Js"},
                            {tag: "React Hooks"},
                            {tag: "Material UI"}
                        ]
                    },
                    {
                        title: "PWA:: Facebook Clone App",
                        image: "facebook.png",
                        url: "https://facebook-clone-cc2e1.firebaseapp.com/",
                        content: "Facebook Clone with React JS",
                        tags: [
                            {tag: "React.Js"}
                        ]
                    },
                    {
                        title: "My Portfolio",
                        image: "portfolio.png",
                        url: "",
                        content: "Personal Portfolio Built with ReactJs, NextJs, Tailwind CSS and sendGrid for handling emails. Inspiration drawn from Vincent Bourdeau's Portfolio",
                        tags: [
                            {tag: "React.Js"},
                            {tag: "Next.Js"},
                            {tag: "Tailwind CSS"},
                            {tag: "SendGrid"}
                        ]
                    }
                ]
            },
            {
                category: "Client Projects",
                projects: []
            },
            {
                category: "Contributions",
                projects: []
            }
        ]
    )
  }
  