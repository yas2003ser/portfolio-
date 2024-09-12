import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "cyber")
    return  <img src={require(`../../assets/images/cybersec.png`)} alt="Cyber Security" />;
    // <DataScienceImg theme={props.theme} 
    // />;
  else if (props.fileName === "FullStackImg")
    return <img src={require(`../../assets/images/mobile-application.png`)} alt="Full Stack Development" />;
  else if (props.fileName === "CloudInfraImg")
    return <img src={require(`../../assets/images/social-media.png`)} alt="Cloud Infra" />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
