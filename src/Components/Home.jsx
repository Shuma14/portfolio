import React from 'react'
import '../CSS/Home.css'
import myProfilePic from '../Assets/myPic1.png'

const Home = () => {
  return (
    <div className="home-page">
    <div className="home-page-text">
      <h1>
        Hi I’m <span>Marc Roldan</span> <br />
        a Fullstack Developer
      </h1>
      <br />
      <p>
      I'm a fresh graduate eager to kickstart my career in IT, with a passion for Java programming and web development. I enjoy creating chatbots and building responsive websites, with a strong focus on using React for web development. I've gained hands-on experience developing interactive bots using Botpress and web applications with HTML, CSS, and JavaScript. I'm excited to bring my skills, creativity, and enthusiasm to new challenges and grow as a professional.      </p>
      <br />
      <p>
      I'm 34 years old, a father of three, and a graduate in Information Technology. I love programming and spend a lot of my time improving my skills through tutorials and exploring new technologies. When I'm not coding, you’ll usually find me playing games, watching series, or reading manga. I'm definitely more of an indoor person, so I enjoy hanging out with my family at home rather than going out. I’m always looking for ways to grow, learn, and use what I know and learned by developing projects to further enhance my skillsets.      </p>
    </div>

    <img src={myProfilePic} alt="Marc Roldan" className="my-picture" />
  </div>
  )
}

export default Home
