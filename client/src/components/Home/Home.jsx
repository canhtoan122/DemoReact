import React from 'react'
import Banner from '../../images/img-1.png'
import Intro from '../../images/g4tg4tg.png'
import IntroIcon from '../../images/icon-image.png'
import Brand1 from '../../images/abper-300x59.png'
import Brand2 from '../../images/ares-300x53.png'
import Brand3 from '../../images/bromo-300x56.png'
import Brand4 from '../../images/pieso-300x118.png'
import Brand5 from '../../images/wagon-300x60.png'
import Brand6 from '../../images/boson-300x71.png'
import MainBackground from '../../images/94tuhg4t.png'
import Service1 from '../../images/accident.png'
import Service2 from '../../images/g53.png'
import Service3 from '../../images/train.png'
import Service4 from '../../images/tow-truck.png'
import Service5 from '../../images/road.png'
import './Home.css'

export default function Home() {
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
                    <a href="#" className="button">Bắt đầu</a>
                </div>
                <div className="main_banner_right">
                    <img src={Banner} alt="" />
                </div>
            </div>
        </div>
        <div className="main_infor">
            <div className="container main_infor_wrapper">
                <div className="main_infor_item">
                    <span>
                        <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span>(0937) 067 986</span>
                </div>
                <div className="main_infor_item">
                   <span><i className="fa-solid fa-clock"></i></span>
                    <span>Đến nơi trong vòng 4 ngày</span>
                </div>
                <div className="main_infor_item">
                    <span><i className="fa-solid fa-circle-check"></i></span>
                    <span>Không chi phí phát sinh</span>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="main_intro">
                <div className="main_intro_left">
                    <img src={Intro} alt="" />
                    <span>
                        <img src={IntroIcon} alt="" />
                    </span>
                </div>
                <div className="main_intro_right">
                    <h3>Tại sao chọn chúng tôi</h3>
                    <h2>GIỚI THIỆU VẬN TẢI PHƯỚC TÁ</h2>
                    <p>Công Ty TNHH Dịch Vụ Vận Tải Phước Tá được thành lập vào năm 2012, với kinh nghiệm 10 năm hoạt động trong ngành vận tải
                        chúng tôi luôn đảm bảo hàng hóa được vận chuyển an toàn và đúng thời gian cho quý khách hàng. <br/><br />
                        
                        Vận Tải Phước Tá chuyên vận chuyển hàng hóa từ Bắc vào Nam và các tỉnh nhỏ lẻ, với đội ngũ lái xe có nhiều năm kinh nghiệm
                        chạy xuyên suốt trên các tuyến đường trên lãnh thổ Việt Nam.<br/><br/>
                        
                        Hiện tại, vận tải Phước Tá có nhiều dịch vụ trong ngành vận tải để phục vụ khách hàng, Trong đó, dịch vụ vận chuyển hàng
                        hóa được ưu tiên và chú trọng nhất với mục tiêu đáp ứng nhanh nhất những yêu cầu về vận chuyển hàng hóa. Nếu quý khách
                        có nhu cầu vận chuyển hàng hóa đến bất kỳ nơi nào, chúng tôi đều có khả năng đáp ứng.</p>
                    <button className="button">Gọi Ngay</button>
                </div>
            </div>
            <div className="main_brand">
                <span>
                    <img src={Brand1} alt="" />
                </span>
                <span>
                    <img src={Brand2} alt="" />
                </span>
                <span>
                    <img src={Brand3} alt="" />
                </span>
                <span>
                    <img src={Brand4} alt="" />
                </span>
                <span>
                    <img src={Brand5} alt="" />
                </span>
                <span>
                    <img src={Brand6} alt="" />
                </span>
            </div>
        </div>
        <div className="main_bg">
            <img src={MainBackground} alt="" />
        </div>
        <div className="container">
            <div className="service">
                <h3>Dịch vụ của chúng tôi</h3>
                <h2>Chúng tôi vận chuyển hàng hóa của bạn một cách an toàn và nhanh chóng.</h2>
                <p>Chúng tôi là một dịch vụ vận tải được trang bị tốt sẵn sàng nhận yêu cầu vận chuyển 24/7, chúng tôi cung cấp dịch vụ nhanh chóng, giá cả phải chăng,
                    thân thiện và đáng tin cậy.</p>
                <div className="service_list">
                    <div className="service_list_top">
                        <div className="service_list_item">
                            <span className="icon">
                                <img src={Service1} alt="" />
                            </span>
                            <h4>Tình huống khẩn cấp</h4>
                            <p>Đối với những tình huống khẩn cấp như hỏng hàng, mất hàng trong quá trình vận chuyển thì bên chúng tôi sẽ cập nhật tình trạng hàng hóa
                                cho khách hàng và đền bù theo giá thị trường.</p>
                        </div>
                        <div className="service_list_item">
                            <span className="icon">
                                <img src={Service2} alt="" />
                            </span>
                            <h4>Giảm giá cước vận chuyển</h4>
                            <p>Đối với những khách hàng mới, sẽ có ưu đãi về giá cước vận chuyển. Tốn ít thời gian và tiền bạc hơn 
                                mà dành nhiều thời gian hơn cho doanh nghiệp của bạn.</p>
                        </div>
                    </div>
                    <div className="service_list_bottom">
                        <div className="service_list_item">
                            <span className="icon">
                                <img src={Service3} alt="" />
                            </span>
                            <h4>Dịch vụ vận chuyển đường dài (từ ga đến ga)</h4>
                            <p>Luôn cập nhật tiến độ cho khách hàng từ lúc dỡ hàng hóa lên tàu cho đến lúc tàu chạy đến ga cần đến.</p>
                        </div>
                        <div className="service_list_item">
                            <span className="icon">
                                <img src={Service4} alt="" />
                            </span>
                            <h4>Dịch vụ vận chuyển từ kho đến kho</h4>
                            <p>Luôn cập nhật tiến độ cho khách hàng từ lúc bốc xếp dỡ hàng ở kho đối tác của bạn tới kho doanh nghiệp của bạn và trong quá trình 
                                nếu có vấn đề thì sẽ lập tức báo cho bạn ngay lập tức.</p>
                        </div>
                        <div className="service_list_item">
                            <span className="icon">
                                <img src={Service5} alt="" />
                            </span>
                            <h4>Dịch vụ vận chuyển đường ngắn (từ kho tới ga)</h4>
                            <p>Luôn cập nhật tiến độ cho khách hàng từ lúc xếp dỡ từ kho lên xe tải và luôn quan sát quá trình tàu chạy và xe chạy.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="question">
                <h3>FAQ</h3>
                <h2>Những câu hỏi phổ biến</h2>
                <p>Chúng tôi là một dịch vụ vận chuyển được trang bị tốt sẵn sàng hỗ trợ khách hàng 24/7, chúng tôi cung cấp dịch vụ nhanh chóng, giá cả linh hoạt, thân thiện,
                    và dịch vụ vận chuyển đánh tin cậy.</p>
                <ul className="question_list">
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Thời gian vận chuyển là bao lâu?</h4>
                            <p>Thường thì sẽ là 4 ngày từ khi báo kế hoạch vận chuyển nhưng tùy theo khối lượng cũng như loại dịch vụ mà thời gian vận chuyển có thể thay đổi.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Giá cước vận chuyển là bao nhiêu?</h4>
                            <p>Thường thì sẽ tùy theo khối lượng, loại hàng, loại dịch vụ,... và sẽ báo giá trước 1 ngày dựa theo thông tin đã cung cấp.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Có an toàn không?</h4>
                            <p>Chúng tôi là dịch vụ vận tải với hơn 10 năm hoạt động trong ngành và được trang bị tốt nhất để hỗ trợ khách hàng 24/7.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Có chế độ bồi thường hàng hóa khi bị mất mát hư hỏng không?</h4>
                            <p>Trong những trường hợp trong quá trình vận chuyển hàng hóa bị mất mát hư hỏng thì công ti sẽ đền bù hàng hóa đã mất mát hư hỏng 
                                dựa theo giá thị trường.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Có đảm bảo thông tin về hàng hóa cho khách hàng không?</h4>
                            <p>Sau khi nhận thông tin khách hàng thì công ti sẽ gọi đến số điện thoại đã được cung cấp và lên hợp đồng thỏa thuận giữa 2 bên và 
                                bảo mật thông tin khách hàng cũng được làm vào lúc này.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Có các dịch vụ hỗ trợ như bốc xếp, kho bãi, vận chuyển từ kho tới kho không?</h4>
                            <p>Có và nếu có dịch vụ phát sinh thì tất cả phải được làm rõ trước khi lên hợp đồng giữa 2 bên.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="contact">
                <h3>Gửi Yêu Cầu Giá Cước Vận Chuyển</h3>
                <div className="contact_content">
                    <form action="" className="form_request">
                        <div className="form_request_item">
                            <label htmlFor="firstName">Tên khách hàng và số điện thoại <span>*</span> </label>
                            <div className="form_request_item_name">
                                <span>
                                    <input type="text" name="name" id="name" />
                                    <label htmlFor="name">Họ và tên</label>
                                </span>
                                <span>
                                    <input type="text" name="phoneNumber" id="phoneNumber" />
                                    <label htmlFor="phoneNumber">Số điện thoại</label>
                                </span>
                            </div>
                        </div>
                        <div className="form_request_item">
                            <label htmlFor="type">Dịch vụ vận chuyển<span>*</span> </label>
                            <select id="type" name="type">
                                <option value="default">--------------</option>
                                <option value="Kho tới kho">Kho tới kho</option>
                                <option value="Ga tới ga">Ga tới ga</option>
                                <option value="Kho tới ga">Kho tới ga</option>
                                <option value="Ga tới kho">Ga tới kho</option>
                            </select>
                        </div>
                        <div className="form_request_item">
                            <label htmlFor="email">Email<span>*</span> </label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form_request_item">
                            <label htmlFor="email">Nội dung <span>*</span> </label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button className="button">Hoàn tất</button>
                    </form>
                    <div className="contact_phone">
                        <h4>Liên hệ để chuyển hàng</h4>
                        <span className="line"></span>
                        <p>Hotline: <br/> 0937 067 986</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}