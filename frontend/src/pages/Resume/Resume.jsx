import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Mount Kenya University"
            date="2024 — Current"
            description="Barchelor of Science In Information Technology."
          />
          <TimelineItem
            title="KCA University"
            date="2021 — 2023"
            description="Diploma In Information Technology."
          />
          <TimelineItem
            title="Barding Boys' High School"
            date="2017 — 2020"
            description="Secondary Education."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Programming Tutor"
            date="2024 — Current"
            description="Smart Brains Kenya."
          />
          <TimelineItem
            title="Intern"
            date="May, 2023 — August, 2023"
            description="Supreme Court of Kenya"
          />
          <TimelineItem
            title="Web designer"
            date="2021 — 2023"
            description=""
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Frontend" value={80} />
          <SkillItem title="Backend" value={50} />
          <SkillItem title="Comp Support and Maintainance" value={90} />
          <SkillItem title="Networking" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
