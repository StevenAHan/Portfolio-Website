
const Skillblock = ({img, title}) => {
    return (
        <div className="skillblock">
            <img className="skill-img" src={img} alt="no" />
            <span className="skill-caption">{title}</span>
        </div>
    );
}

export default Skillblock;