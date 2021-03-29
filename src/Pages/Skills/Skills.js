/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Skills.css'
import SkillItem from '../../components/SkillItem/SkillItem'

const Skills = () => {
  return (
    <div id="skills" className="skills section-bg px-5 mx-5">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row skills-content px-5">
        <div className="container">
          <div className="row">
            <SkillItem src="./img/languageIcon/html.png" title="HTML" />

            <SkillItem src="./img/languageIcon/css.png" title="CSS" />

            <SkillItem src="./img/languageIcon/js.png" title="JavaScript" />

            <SkillItem src="./img/languageIcon/react.png" title="React" />

            <SkillItem src="./img/languageIcon/mysql.png" title="MySQL" />

            <SkillItem src="./img/languageIcon/mongodb.png" title="MongoDB" />

            <SkillItem src="./img/languageIcon/nodejs.png" title="NodeJS" />

            <SkillItem
              src="./img/languageIcon/nodejsexpress.png"
              title="Express"
            />

            <SkillItem src="./img/languageIcon/mongoose.png" title="Mongoose" />

            <SkillItem
              src="./img/languageIcon/sequalize.png"
              title="Sequalize"
            />
            <SkillItem src="./img/languageIcon/figma.png" title="Figma" />

            <SkillItem
              src="../../../assets/img/languageIcon/photoshop.png"
              title="Photoshop"
            />
            <SkillItem
              src="../../..assets/img/languageIcon/illustrator.png"
              title="Illustrator"
            />

            <SkillItem src="./img/languageIcon/indesign.png" title="Indesign" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
