import React, { useRef } from 'react'
import "./Testimonials.css"
import next_btn from "../../assets/next-icon.png"
import back_btn from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonials = () => {
    const slider = useRef()
    let tx = 0;
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slidebackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    return (
        <div className='testimonails'>
            <img src={next_btn} alt="next-btn" className='next_btn' onClick={slideForward} />
            <img src={back_btn} alt="back-btn" className='back_btn' onClick={slidebackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="user_1" />
                                <h3>William Parker</h3>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quos quisquam adipisci assumenda autem possimus iste modi, vero voluptatem repellendus laboriosam nesciunt rem libero incidunt. Blanditiis fuga totam adipisci nam!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="user_1" />
                                <h3>William Parker</h3>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quos quisquam adipisci assumenda autem possimus iste modi, vero voluptatem repellendus laboriosam nesciunt rem libero incidunt. Blanditiis fuga totam adipisci nam!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="user_3" />
                                <h3>William Parker</h3>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quos quisquam adipisci assumenda autem possimus iste modi, vero voluptatem repellendus laboriosam nesciunt rem libero incidunt. Blanditiis fuga totam adipisci nam!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="user_4" />
                                <h3>William Parker</h3>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quos quisquam adipisci assumenda autem possimus iste modi, vero voluptatem repellendus laboriosam nesciunt rem libero incidunt. Blanditiis fuga totam adipisci nam!</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Testimonials