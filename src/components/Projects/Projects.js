import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Book Vibe"
              description="A vibrant platform for book enthusiasts to explore, share, and discover captivating reads. It offers personalized recommendations, interactive features, and a community-driven approach to enhance the love for reading."
              ghLink="https://github.com/programming-hero-web-course-4/b9a8-book-vibe-ShibluHasan"
              demoLink="https://sensational-macaron-8bea6f.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BrandCrowd"
              description="A blog website dedicated to providing valuable insights, tips, and resources on branding, design, and marketing. It helps businesses create strong brand identities and stay updated with industry trends."
              ghLink="https://github.com/Programming-Hero-Web-Course4/b9a6-retro-forum-ShibluHasan"
              demoLink="https://animated-meringue-7a8650.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student Performance Prediction"
              description="A project that utilizes machine learning algorithms to predict student performance based on academic, demographic, and socio-economic data, aiming to identify at-risk students early."
              ghLink="https://github.com/ShibluHasan/student_performance_predict"
                          
            />
          </Col>

         

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
