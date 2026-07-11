
const Skillblock = ({img, title}) => {
    return (
        <div className="skillblock">
            {img ? (
                <img className="skill-img" src={img} alt={title} />
            ) : (
                <div className="skill-fallback">{title.split(/\s+/).map((word) => word[0]).join('').slice(0, 3)}</div>
            )}
            <span className="skill-caption">{title}</span>
        </div>
    );
}

export default Skillblock;