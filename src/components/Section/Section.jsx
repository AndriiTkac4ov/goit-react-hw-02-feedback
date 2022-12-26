import { PropTypes } from "prop-types";
import { SectionPart } from "./Section.styled";

export const Section = ({ title, children }) => (
    <SectionPart>
        <h2>{title}</h2>
        {children}
    </SectionPart>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
}