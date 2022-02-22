import './projprop.scss';
import { useState } from 'react';
import Sorticon from '../../assets/sort.svg';
import Projects from '../projects/projects';
import Property from '../property/property';

const Projprop = () => {
    const [page, setPage] = useState('projects');
    return (
        <div className="proj-prop">
            <div className="filters">
                <select name="">
                    <option selected disabled>Top Localities</option>
                </select>
                <select name="">
                    <option selected disabled>Property Types</option>
                </select>
                <select name="">
                    <option selected disabled>Budget</option>
                </select>
                <select name="">
                    <option selected disabled>Construction</option>
                </select>
                <select name="">
                    <option selected disabled>Amenities</option>
                </select>
                <select name="">
                    <option selected disabled>Locality Type</option>
                </select>
            </div>
            <div className="cont">
                <div className="directory">
                    <p className="prev">Home<i className="fas fa-angle-right"></i></p>
                    <p className="prev">Properties<i className="fas fa-angle-right"></i></p>
                    <p className="prev">Lagos<i className="fas fa-angle-right"></i></p>
                    <p className="curr">Ikeja<i className="fas fa-angle-right"></i></p>
                </div>

                <ul className="toggles">
                    <li onClick={() => setPage("projects")} className={page === "projects" ? "active" : null}>Projects<strong>  (800)</strong></li>
                    <li onClick={() => setPage("properties")} className={page === "properties" ? "active" : null}>Properties<strong>  (800)</strong></li>
                </ul>

                <div className="sort">
                    <p className="left">LAGOS - IKEJA</p>
                    <div className="right input">
                        <label><img src={Sorticon} alt="sort-icon" /> sort by</label>
                        <select name="">
                            <option value="new" selected>Newest</option>
                            <option value="old">Oldest</option>
                        </select>
                    </div>
                </div>
                {page === "projects" && <Projects />}
                {page === "properties" && <Property />}
            </div>
            
        </div>
    )
}

export default Projprop;