import React, { useState, useEffect } from 'react';
import './Start.css'
export const Start = () => {
    return (
        <div>
            <div className="breadcrumb">
            <h2>Bắt đầu</h2>
            <div className="breadcrumb_redirect">
                <a href="/">Trang chủ</a>
                <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
                <span>Bắt đầu</span>
            </div>
        </div>
            <main>
                <div className="container">
                    <div className="main_proceduce">
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 1:</h3>
                            <p className="main_proceduce_item_desc">Điền form thông tin về nơi giao nhận và thông tin hành hoá</p>
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
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 2:</h3>
                            <p className="main_proceduce_item_desc">Báo kế hoạch vận chuyển trước 1 ngày</p>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 3:</h3>
                            <p className="main_proceduce_item_desc">Đi lấy hàng viết biên bản</p>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 4:</h3>
                            <p className="main_proceduce_item_desc">Xếp lên tàu</p>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 5:</h3>
                            <p className="main_proceduce_item_desc">Vận chuyển tới ga gần nhất nơi nhận hàng</p>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span> 
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 6:</h3>
                            <p className="main_proceduce_item_desc"> Chung chuyển đường bộ tới kho khách</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}