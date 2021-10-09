import React from 'react';
import './skills.css';
import Separator from '../../common/separator';
import { SkillsData } from '../../data/skills';
import SkillCard from './skills-card';
function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((skill) => {
          return (
            <div className="skills-section">
              <div className="skills-list">
                <SkillCard key={skill.id} skill={skill} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
