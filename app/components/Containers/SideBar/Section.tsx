import React, { useState } from "react";
import ChevronIcon from "../../Icons/ChevronIcon";

type Section = {
  title: string;
  subsections: SubSection[];
};

type SubSection = {
  title: string;
  subsections: SubSubSection[];
};

type SubSubSection = {
  title: string;
};

type SectionProps = {
  section: Section;
};

type SubSectionProps = {
  subsection: SubSection;
};

type SubSubSectionProps = {
  subsubsection: SubSubSection;
};

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <div className="pt-4">
      <span className="block px-2 py-1 text-[12px] font-semibold uppercase leading-[16px] text-gray-400">
        {section.title}
      </span>

      {section.subsections.map((subsection, subsectionIndex) => (
        <SubSection key={subsectionIndex} subsection={subsection} />
      ))}
    </div>
  );
};

export default Section;

const SubSection: React.FC<SubSectionProps> = ({ subsection }) => {
  const [hideSubSection, setHideSubSection] = useState(true);

  return (
    <div>
      <div
        className="flex items-center rounded-md px-2 py-1 hover:bg-gray-50"
        onClick={() => setHideSubSection(!hideSubSection)}
        tabIndex={Number(0)}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setHideSubSection(!hideSubSection);
          }
        }}
      >
        <span className="py-1 text-[14px] font-semibold leading-[20px] text-gray-600">
          {subsection.title}
        </span>

        <div className="flex grow" />

        {hideSubSection ? <ChevronIcon /> : <ChevronIcon orientation="down" />}
      </div>

      {!hideSubSection && (
        <div className="text-[14px] font-normal leading-[20px]">
          {subsection.subsections.map((subsubSection, subsubSectionIndex) => {
            const id = String(subsubSection.title)
              .toLowerCase()
              .replace(/ /g, "-");

            return (
              <Link href={`#${id}`} key={subsubSectionIndex}>
                {subsubSection.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block cursor-pointer rounded-md px-2 py-1 text-gray-600 hover:bg-gray-50 hover:text-gray-800"
    >
      {children}
    </a>
  );
};
