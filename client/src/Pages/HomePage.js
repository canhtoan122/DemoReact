// Import your CSS files or use the CDN links directly within your component
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'; // Assuming the URL is correct
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';
import Image1 from './Home Page Images/img-1.png';
import Image2 from './Home Page Images/g4tg4tg.png';
import Image3 from './Home Page Images/icon-image.png';
import Image4 from './Home Page Images/abper-300x59.png';
import Image5 from './Home Page Images/ares-300x53.png';
import Image6 from './Home Page Images/bromo-300x56.png';
import Image7 from './Home Page Images/pieso-300x118.png';
import Image8 from './Home Page Images/wagon-300x60.png';
import Image9 from './Home Page Images/boson-300x71.png';
import Image10 from './Home Page Images/94tuhg4t.png';
import Image11 from './Home Page Images/accident.png';
import Image12 from './Home Page Images/g53.png';
import Image13 from './Home Page Images/motorbike.png';
import Image14 from './Home Page Images/tow-truck.png';
import Image15 from './Home Page Images/road.png';

export const HomePage = () => {
    const [formValues, setFormValues] = useState({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            });
    const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormValues((prevValues) => ({
                    ...prevValues,
                    [name]: value,
                }));
            };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('https://localhost:9000/submit', {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(formValues),
        headers: {
            'Content-Type': 'application/json'
        }
        });
        const result = await response.json();
        console.log(result);
    };
    return (
        <div>
            <main>
                <div className="main_banner">
                    <div className="container main_banner_wrapper">
                        <div className="main_banner_left">
                            <h3>Vận tải Phước Tá</h3>
                            <h2>NÂNG NIU TRÊN TỪNG CÂY SỐ</h2>
                            <p>Phước Tá cung cấp các dịch vụ vận chuyển hàng hóa chất lượng cao, từ các dịch vụ chuyển hàng tiêu chuẩn cho đến hàng siêu
                            trường siêu trọng.</p>
                            <button href="#" className="button">Bắt đầu</button>
                        </div>
                        <div className="main_banner_right">
                            <img src={Image1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="main_infor">
                    <div className="container main_infor_wrapper">
                        <div className="main_infor_item">
                            <span>
                                <i className="fa-solid fa-phone-volume"></i>
                            </span>
                            <span>0936131202</span>
                        </div>
                        <div className="main_infor_item">
                        <span><i className="fa-solid fa-clock"></i></span>
                            <span>Arriving in 4 days</span>
                        </div>
                        <div className="main_infor_item">
                            <span><i className="fa-solid fa-circle-check"></i></span>
                            <span>No hidden fees</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="main_intro">
                        <div className="main_intro_left">
                            <img src={Image2} alt="" />
                            <span>
                                <img src={Image3} alt="" />
                            </span>
                        </div>
                        <div className="main_intro_right">
                            <h3>Tại sao chọn chúng tôi</h3>
                            <h2>GIỚI THIỆU VẬN TẢI PHƯỚC TÁ</h2>
                            <p>Công Ty TNHH Dịch Vụ Vận Tải Phước Tá được thành lập vào năm 2012, với kinh nghiệm 10 năm hoạt động trong ngành vận tải
                            chúng tôi luôn đảm bảo hàng hóa được vận chuyển an toàn và đúng thời gian cho quý khách hàng. <br/><br />
                            
                            Vận Tải Hà Lâm chuyên vận chuyển hàng hóa từ Bắc vào Nam và các tỉnh nhỏ lẻ, với đội ngũ lái xe có nhiều năm kinh nghiệm
                            chạy xuyên suốt trên các tuyến đường trên lãnh thổ Việt Nam.<br/><br/>
                            
                            Hiện tại, vận tải Hà Lâm có nhiều dịch vụ trong ngành vận tải để phục vụ khách hàng, Trong đó, dịch vụ vận chuyển hàng
                            hóa được ưu tiên và chú trọng nhất với mục tiêu đáp ứng nhanh nhất những yêu cầu về vận chuyển hàng hóa. Nếu quý khách
                            có nhu cầu vận chuyển hàng hóa đến bất kỳ nơi nào, chúng tôi đều có khả năng đáp ứng.</p>
                            <button className="button">Call us now</button>
                        </div>
                    </div>
                    <div className="main_brand">
                        <span>
                            <img src={Image4} alt="" />
                        </span>
                        <span>
                            <img src={Image5} alt="" />
                        </span>
                        <span>
                            <img src={Image6} alt="" />
                        </span>
                        <span>
                            <img src={Image7} alt="" />
                        </span>
                        <span>
                            <img src={Image8} alt="" />
                        </span>
                        <span>
                            <img src={Image9} alt="" />
                        </span>
                    </div>
                </div>
                <div className="main_bg">
                    <img src={Image10} alt="" />
                </div>
                <div className="container">
                    <div className="service">
                        <h3>Dịch vụ của chúng tôi</h3>
                        <h2>Chúng tôi vận chuyển hàng hóa của bạn tới tận nơi nhanh và an toàn</h2>
                        <p>Chúng tôi là một dịch vụ kéo xe được trang bị tốt sẵn sàng giúp vận chuyển hàng hóa 24/7, chúng tôi cung cấp dịch vụ nhanh chóng, giá cả phải chăng, thân thiện 
                            và dịch vụ vận chuyển đáng tin cậy.</p>
                        <div className="service_list">
                            <div className="service_list_top">
                                <div className="service_list_item">
                                    <span className="icon">
                                        <img src={Image11} alt="" />
                                    </span>
                                    <h4>Trường hợp khẩn cấp</h4>
                                    <p>Nếu trong trưởng hợp khẩn cấp xe vận chuyển bị hỏng hay hàng hóa trong lúc vận chuyển bị hỏng thì chúng tôi sẽ đền bù theo giá thị trường.</p>
                                </div>
                                <div className="service_list_item">
                                    <span className="icon">
                                        <img src={Image12} alt="" />
                                    </span>
                                    <h4>Giá cước vận chuyển</h4>
                                    <p>Giá cước vận chuyển linh hoạt. Dành ít thời gian hơn cho những thủ tục rườm rà và dành nhiều thời gian hơn vào công việc kinh doanh của bạn.</p>
                                </div>
                            </div>
                            <div className="service_list_bottom">
                                <div className="service_list_item">
                                    <span className="icon">
                                        <img src={Image13} alt="" />
                                    </span>
                                    <h4>Dịch vụ vận chuyển</h4>
                                    <p>Chúng tôi vận hành các phương tiện và thiết bị mới, nhanh chóng và chuyên nghiệp.</p>
                                </div>
                                <div className="service_list_item">
                                    <span className="icon">
                                        <img src={Image14} alt="" />
                                    </span>
                                    <h4>Dịch vụ vận chuyển đường ngắn</h4>
                                    <p>Chúng tôi vận chuyển tuyến đường ngắn bằng xe tải tới địa chỉ nhận hàng nhanh chóng và chuyên nghiệp.</p>
                                </div>
                                <div className="service_list_item">
                                    <span className="icon">
                                        <img src={Image15} alt="" />
                                    </span>
                                    <h4>Dịch vụ vận chuyển đường dài</h4>
                                    <p>Chúng tôi vận chuyển tuyến đường dài bằng tàu hỏa tới ga gần nhất và luôn luôn cập nhật tiến độ của tàu cho khách hàng.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="question">
                        <h3>FAQ</h3>
                        <h2>Một số câu hỏi thường gặp</h2>
                        <p>Chúng tôi là một dịch vụ vận tải được trang bị tốt sẵn sàng cập nhật khách hàng 24/7, chúng tôi cung cấp dịch vụ nhanh chóng, giá cả phải chăng, thân thiện 
                            và dịch vụ vận tải đáng tin cậy.</p>
                        <ul className="question_list">
                            <li>
                                <span><i className="fa-solid fa-circle-question"></i></span>
                                <div>
                                    <h4>Thời gian vận chuyển là bao lâu?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <span><i className="fa-solid fa-circle-question"></i></span>
                                <div>
                                    <h4>Giá cước vận chuyển là bao nhiêu?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <span><i className="fa-solid fa-circle-question"></i></span>
                                <div>
                                    <h4>Quá trình vận chuyển có an toàn ko?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <span><i className="fa-solid fa-circle-question"></i></span>
                                <div>
                                    <h4>Có chế độ bồi thường hàng hóa khi bị mất mát hư hỏng ko?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <span><i className="fa-solid fa-circle-question"></i></span>
                                <div>
                                    <h4>Có đảm bảo thông tin về hàng hóa cho khách hàng ko?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <span><i className="fa-solid fa-circle-question"></i></span>
                                <div>
                                    <h4>Có các dịch vụ hỗ trợ như bốc xếp, kho bãi, vận chuyển từ kho tới kho không?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3>Gửi Yêu Cầu Giá Cước Vận Chuyển</h3>
                        <div className="contact_content">
                            <form onSubmit={handleSubmit}>
                                <div className="contact_item">
                                    <label htmlFor="firstName">Tên khách hàng <span>*</span> </label>
                                    <div>
                                        <span>
                                            <input type="text" name="firstName" id="firstName" value={formValues.firstName} onChange={handleInputChange}/>
                                            <label htmlFor="firstName">First</label>
                                        </span>
                                        <span>
                                            <input type="text" name="lastName" id="lastName" value={formValues.lastName} onChange={handleInputChange}/>
                                            <label htmlFor="lastName">Last</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="contact_item">
                                    <label htmlFor="email">Email<span>*</span> </label>
                                    <input type="email" name="email" id="email" value={formValues.email} onChange={handleInputChange}/>
                                </div>
                                <div className="contact_item">
                                    <label htmlFor="message">Nội dung <span>*</span> </label>
                                    <textarea name="message" id="message" cols="30" rows="10"value={formValues.message} onChange={handleInputChange}></textarea>
                                </div>
                                <button className="button">Hoàn tất</button>
                            </form>
                            <div className="contact_phone">
                                <h4>Liên hệ để chuyển hàng</h4>
                                <span className="line"></span>
                                <p>Hotline: <br/> 0123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}