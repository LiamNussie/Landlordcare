import './analytics.scss';
import Chart from './chart.svg';

const Analytics = () => {
    return (
        <div className="analytics">
            <div className="top">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="bottom">
                <img src={Chart} alt="chart" />
                <img src={Chart} alt="chart" />
            </div>
            
        </div>
    )
}

export default Analytics;