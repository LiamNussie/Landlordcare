import './testimonies.scss';
import Star from './star.svg';

const data = [
    {
        name: "John Doe",
        role: "Owner",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tenetur architecto nulla ratione sit, a illo assumenda velit atque aut quas provident?"
    },
    {
        name: "John Doe",
        role: "Tenant",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tenetur architecto nulla ratione sit, a illo assumenda velit atque aut quas provident?"
    },
    {
        name: "John Doe",
        role: "Developer",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tenetur architecto nulla ratione sit, a illo assumenda velit atque aut quas provident?"
    }
]

const Testimonies = () => {
    return (
        <div className="testimonies">
            <p className="floatxt">TESTIMONIES</p>
            <p className="maintxt">What our customers are saying about Landlordcare</p>
            <p className="infotxtx">Hear from our satisfied buyers, tenants, owners and dealers</p>

            <div className="tests">
                {data.map(({name, role, comment}, index) => {
                    return (
                        <div className="test" key={index}>
                            <img src={Star} alt="rating_stars" />
                            <p className="comment">{comment}</p>
                            <div className="poster">
                                <div className="img"></div>
                                <div className="p">
                                    <p className="name">{name}</p>
                                    <p className="role">{role}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonies;