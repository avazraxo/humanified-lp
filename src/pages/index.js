import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="homepage__header">
      <h1>We are the first social impact social network</h1>
      <a href="#watch-video">Watch video </a>
      <div className="app__links">
        <div className="app__store">
          <h2>Coming soon <span>Apple Store </span></h2>
        </div>
        <div className="play__store">
          <h2>Coming soon <span>Play Store </span></h2>
        </div>
      </div>
    </section>
    <section className="mission__section" id="mission">
      Mission
    </section>

    <section className="team__section" id="meat-the-team">
      Meat the team
    </section>

    <section className="about__section" id="what-we-do">
      What we do
    </section>

    <section className="download__section" id="download">
      <h3>Available to <span>Download </span></h3>
      <p>and change the world around you today. </p>
      <div className="app__links">
        <div className="app__store">
          <h2>Coming soon <span>Apple Store </span></h2>
        </div>
        <div className="play__store">
          <h2>Coming soon <span>Play Store </span></h2>
        </div>

        
        
      </div>
    </section>

    <section className="contact__section" id="contact">
      <div className="row">
        <div className="col-sm-6">
          <h3>CONTACT US </h3>
          <h4>Join us and be <br/> a changemaker!</h4>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elitlorem ipsum dolor sit amet, consectetur adipiscing elit </p>

          <div className="social__links">
            <h5>FOLLOW US ON SOCIAL MEDIA </h5>
            <nav>
              <ul>
                <li><a href="https://">Instagram</a></li>
                <li><a href="https://">Facebook</a></li>
                <li><a href="https://">Twitter</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-sm-6">
          <h6>Tell us about you </h6>

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <div>
              <label for="name"> Name: </label> 
              <input type="text" id="name" name="name" />   
            </div>
            <div>
              <label for="email">Email: </label> 
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label for="cause">Favorite Cause: </label>
              <select id="cause" name="cause[]">
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
              </select>
            </div>
            <div>
              <label for="message">Message:</label> 
              <textarea id="message" name="message"></textarea>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>

        </div>
      </div>
    </section>
  
  </Layout>
  
  

)


export default IndexPage
