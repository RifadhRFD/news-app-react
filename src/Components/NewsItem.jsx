import image from '../assets/news.jpg'
import PropTypes from 'prop-types';

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 py-1 px-1" style={{maxWidth:"310px"}}>
  <img src={src?src:image} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"AI breakthroughs reshape industries. Ethical concerns debated. Robotics advance. Virtual assistants redefine tasks. Machine learning powers innovations. Automation accelerates"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    src: PropTypes.string,
    url: PropTypes.string.isRequired,
  };

export default NewsItem
