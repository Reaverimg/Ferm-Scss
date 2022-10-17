let img1 = "./assets/KP.jpg";

export default function Cards() {
  return (
    <div className="container">

      <div className="w3-card-4">

        <h3 className="card_title w3-center">
          Thank you to see my introduce profile
        </h3>
        
        <div className="w3-center w3-container">
        <img className="img" src={img1} alt="" />
        </div>
        
        <div className="w3-row">

          <h3 className="card_title w3-center">FPTU Student</h3>

          <div className="w3-third w3-center w3-container w3-medium">
            <h4 className='w3-left-align'>Fullname</h4>
            <p className="card_description w3-left-align">Lê Khải Phú</p>
            <h4 className='w3-left-align'>Contact Info</h4>
            <p className="card_description w3-left-align">
              Phone : (024) 6680 5588
            </p>
            <p className="card_description w3-left-align">
              Email : phu1912@gmail.com
            </p>
            <p className="card_description w3-left-align">
              Facebook : https://fb.com/phu.vn
            </p>
            <p className="card_description w3-left-align">Gender : Male</p>
            <h4 className='w3-left-align'>Certification</h4>
            <p className="card_description w3-left-align">Advanced Styling with Responsive Design</p>
            <p className="card_description w3-left-align">Software Development Lifecycle Specialization</p>
          </div>

          <div className="w3-third w3-center w3-container w3-medium">
            <h4 className='w3-left-align'>Education</h4>
            <p className="card_description w3-left-align">Tôt nghiệp Tiểu học</p>
            <p className="card_description w3-left-align">Tôt nghiệp Trung học cơ sở</p>
            <p className="card_description w3-left-align">Tôt nghiệp Trung học phổ thông</p>
            <h4 className='w3-left-align'>Job Experience</h4>
            <p className="card_description w3-left-align">Front End - Intern</p>
            <p className="card_description w3-left-align">Nhân viên bán hàng : </p>
            <p className="card_description w3-left-align">- Bán hàng trực tiếp tại cửa hàng cho người nước ngoài và người Việt.</p>
          </div>

          <div className="w3-third w3-center w3-container w3-medium">
            <h4 className='w3-left-align'>Other Skills</h4>
            <p className="card_description w3-left-align">Tin học văn phòng : </p>
            <p className="card_description w3-left-align">- Sử dụng thành thạo các công cụ Word, Excel, Power Point</p>
            <p className="card_description w3-left-align">Tiếng Anh : </p>
            <p className="card_description w3-left-align">- Khả năng giao tiếp Tiếng Anh trôi chảy</p>
            <h4 className='w3-left-align'>Habbits</h4>
            <p className="card_description w3-left-align">Đá bóng :</p>
            <p className="card_description w3-left-align">- Tham gia hoạt động đá bóng của công ty hàng tuần</p>
            <p className="card_description w3-left-align">Đọc sách :</p>
            <p className="card_description w3-left-align">- Mỗi tháng đọc 1 quyển sách về kinh doanh.</p>
          </div>

        </div>

        <div className="btn-contact">
          <p>
            <button>Contact</button>
          </p>
        </div>

      </div>
    </div>
  );
}
