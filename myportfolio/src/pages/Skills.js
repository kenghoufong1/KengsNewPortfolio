import React from 'react';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import '../styles/Skills.css';


function Skills() {
  return (
    <div className='skills'>
      <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work general'
            date="2022 - Present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>General-purpose programming languages</h3>  
            <p>JavaScript ES6+</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work general'
            date="2021 - Present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>General-purpose programming languages</h3>  
            <p>Python</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work front'
            date="2022 - Present" 
            iconStyle={{ background: "#00FF00", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>FrontEnd</h3>  
            <p>CSS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work back'
            date="2022 - Present"
            iconStyle={{ background: "#FF0000", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>BackEnd</h3>  
            <p>Node.js</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work front'
            date="2022 - Present"
            iconStyle={{ background: "#00FF00", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>FrontEnd</h3>  
            <p>HTML</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work back'
            date="2022 - Present"
            iconStyle={{ background: "#FF0000", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>BackEnd</h3>  
            <p>Express.js</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work front'
            date="2022 - Present"
            iconStyle={{ background: "#00FF00", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>FrontEnd</h3>  
            <p>React</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work back'
            date="2022 - Present"
            iconStyle={{ background: "#FF0000", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>BackEnd</h3>  
            <p>MySQL</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work front'
            date="2022 - Present"
            iconStyle={{ background: "#00FF00", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>FrontEnd</h3>  
            <p>jQuery</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work back'
            date="2022 - Present"
            iconStyle={{ background: "#FF0000", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>BackEnd</h3>  
            <p>MongoDB</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work front'
            date="2022 - Present"
            iconStyle={{ background: "#00FF00", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>FrontEnd</h3>  
            <p>Bootstrap</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work back'
            date="2022 - Present"
            iconStyle={{ background: "#FF0000", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>BackEnd</h3>  
            <p>Sequelize</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work front'
            date="2022 - Present"
            iconStyle={{ background: "#00FF00", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>FrontEnd</h3>  
            <p>Handlebars</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work back'
            date="2022 - Present"
            iconStyle={{ background: "#FF0000", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>BackEnd</h3>  
            <p>ApolloServer</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work front'
            date="2022 - Present"
            iconStyle={{ background: "#00FF00", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>FrontEnd</h3>  
            <p>GSAP(GreenSock Animation Platform)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--work back'
            date="2022 - Present"
            iconStyle={{ background: "#FF0000", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>BackEnd</h3>  
            <p>GraphQL</p>
          </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Skills