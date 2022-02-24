import Image from "next/image";
import Tags from "../components/Tags";

const url = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://robertotieno.rokeservices.com"

function ProjectItem({item}) {
    return (
        <>
            <li className="projects__item">
                <h3 className="projects__item__header">{item.title}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Image className="projects__item__image" height={500} width={1000} alt="Project Image" src={`/portfolio/${item.image}`}/>

                    <span className="projects__item__info">
                        <p className="projects__item__content">{item.content}</p>
                        <a className="projects__item__link" href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                        <h4 className="projects__item__tags">
                            {item.tags.map(({tag}, index) => (<Tags tag={tag} key={index}/>))}
                        </h4>
                    </span>
                </div>
            </li>
        </>
    )
}

export default ProjectItem
