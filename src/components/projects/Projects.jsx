import React from "react";
import "./Projects.css";
import portfolio from "../../assets/projects_display/portfolio.png";
import openears from "../../assets/projects_display/openears.png";
import tictactoe from "../../assets/projects_display/tictactoe.png";
import shoppe from "../../assets/projects_display/shoppe.png";
// import mediaGallery from "../../assets/projects_display/mediagallery.gif";
// import djangoTodo from "../../assets/projects_display/djangotodo.png";
// import seasons from "../../assets/projects_display/seasons.gif";

const projects = [
  {
    index: 1,
    title: "My Personal Website",
    modalTitle: "My Personal Website",
    modalImg: portfolio,
    modalLink: "https://github.com/Saai23/Portfolio",
    modalInfo1:
      "My React site defines digital experiences with animated flair.",
    modalInfo2:
      "The moment visitors land on homepage, they are greeted by mesmerizing animations.",
    modalInfo3:
      "The website sets a new standard for captivating audiences, leaving a lasting impression with its animated brilliance.",
  },
  {
    index: 2,
    title: "Open Ears",
    modalTitle: "Open Ears",
    modalImg: openears,
    modalLink: "https://github.com/Saai23/Open-Ears",
    modalInfo1:
      "A Music Streaming Web App developed with ReactJs🚀 and Firebase🔥.",
    modalInfo2:
      "SongList is Implemented using Browser's Session Storage for saving the Songlist temporarily for the Current Session.",
    modalInfo3:
      "You will have to create an Index in firestore, LibraryPage uses Nested Queries to fetch data from Firestore.",
  },
  {
    index: 3,
    title: "TicTacToe",
    modalTitle: "TicTacToe",
    modalImg: tictactoe,
    modalLink: "https://github.com/Saai23/TicTacToe",
    modalInfo1: "Tic Tac Toe game, a classic game for two players",
    modalInfo2:
      "Where each player takes turns marking a grid of 3x3 squares with their X or O.",
    modalInfo3: "The game is implemented using React and CSS",
  },
  {
    index: 4,
    title: "Shoppe",
    modalTitle: "Shoppe",
    modalImg: shoppe,
    modalLink: "https://github.com/Saai23/Shoppe",
    modalInfo1:
      "Shoppe is an e-commerce website that has at least 150 women's clothing products with different sizes and color choices.",
    modalInfo2:
      "You can choose various attributes like size and color. There is a cart where you can see added items and edit, add, or remove them.",
    modalInfo3: "",
  },
  // {
  //   index: 5,
  //   title: "React Media Gallery",
  //   modalTitle: "React Media Gallery",
  //   modalImg: mediaGallery,
  //   modalLink: "https://github.com/v4nshhh/React-Media-Gallery",
  //   modalInfo1:
  //     "React-Media-Gallery is a single page web-application that uses Unsplash and YouTube API to fetch images and videos and display them with a grid based system.",
  //   modalInfo2:
  //     "React-Media-Gallery was made up using the basic usage of states, props, components and other basic React concepts.",
  //   modalInfo3:
  //     "In addition to that ReactPicz also uses axios library to make an ajax call to the APIs and Semantic-ui for Styling.",
  // },
  // {
  //   index: 6,
  //   title: "Django TodoApp",
  //   modalTitle: "Django TodoApp",
  //   modalImg: djangoTodo,
  //   modalLink: "https://github.com/v4nshhh/django-todoapp",
  //   modalInfo1:
  //     "A simple Todolist application built using Django Backend framework.",
  //   modalInfo2:
  //     "This Todolist application was made in order to follow CRUD operations paradigm.",
  //   modalInfo3:
  //     "The project also has an authentication feature so that the individual can access their todos.",
  // },
  // {
  //   index: 7,
  //   title: "React Seasons",
  //   modalTitle: "React Seasons",
  //   modalImg: seasons,
  //   modalLink: "https://github.com/v4nshhh/React-seasons",
  //   modalInfo1:
  //     "React Seasons was made to detect the Season based upon individual's location.",
  //   modalInfo2:
  //     "React Seasons is an API Free project. Hence, it was built only using Javascript's in-built tools to detect the weather of user's location.",
  //   modalInfo3: "",
  // },
];

const Projects = () => {
  const [toggleState, setToggleState] = React.useState(0);

  const toggleTab = (index) => {
    if (index !== 0) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    setToggleState(index);
  };

  return (
    <section className="section projects" id="projects">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">Projects that I flex</span>

      <div className="projects__container container grid">
        {projects.map((project) => {
          const idx = project.index;

          return (
            <div key={idx} className="projects__content">
              <div>
                <i className="uil uil-web-grid projects__icon"></i>
                <h3 className="projects__title">{project.title}</h3>
              </div>

              <span className="projects__button" onClick={() => toggleTab(idx)}>
                View More
                <i className="uil uil-arrow-right projects__button-icon"></i>
              </span>

              <div
                className={
                  toggleState === idx
                    ? "projects__modal active-modal"
                    : "projects__modal"
                }
              >
                <div className="projects__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times projects__modal-close"
                  ></i>

                  <h3 className="projects__modal-title">
                    {project.modalTitle}
                  </h3>
                  <img
                    className="projects__modal-img"
                    src={project.modalImg}
                    alt=""
                  />
                  <br />
                  <br />
                  <p className="projects__modal-description">
                    {project.modalLink !== "" ? (
                      <a href={project.modalLink} target="_blank">
                        Link To Repository
                      </a>
                    ) : (
                      ""
                    )}
                  </p>

                  <ul className="projects__modal-projects grid">
                    <li className="projects__modal-project">
                      <i className="uil uil-check-circle projects__modal-icon"></i>
                      <p className="projects__modal-info">
                        {project.modalInfo1}
                      </p>
                    </li>

                    <li className="projects__modal-project">
                      <i className="uil uil-check-circle projects__modal-icon"></i>
                      <p className="projects__modal-info">
                        {project.modalInfo2}
                      </p>
                    </li>

                    {project.modalInfo3 !== "" ? (
                      <li className="projects__modal-project">
                        <i className="uil uil-check-circle projects__modal-icon"></i>
                        <p className="projects__modal-info">
                          {project.modalInfo3}
                        </p>
                      </li>
                    ) : (
                      <div></div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
