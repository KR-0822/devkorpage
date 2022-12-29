import "./aboutus.css";
import MapTest from "./map";
import MAP2 from "./map"
import profile1 from "../images/Profile1.jpg";
import profile2 from "../images/Profile2.jpg";

const AboutUs = () => {
    return (
      <div className="body">
        <div className="wrapper">
          <ul className="team">
            <li className="team-item">
              <div className="profile profile_red">
                <img src={profile1} />
                <div className="profile-contents">
                  <h2>장석원<span>TeamLeader</span></h2> 
                  <p>백엔드 기능구현까지 모두 담당  </p>
                  <p>프로젝트의 버스기사</p>
                  <p> 차기뎁코임원진(진) </p>
                  <p> 우수한 일본어 능력 보유자</p>
                </div>
              </div>
            </li>
            <li className="team-item">
              <div className="profile profile_blue">
              <img src={profile2} />
                <div className="profile-contents">
                  <h2>백경렬<span>Front-end</span></h2> 
                  <p>CSS 깎는 노인  </p>
                  <p>프로젝트의 버스승객</p>
                  <p>대학원생(진)</p>
                  <p>우수한 롤체 능력 보유자</p>

                </div>
              </div>
            </li>
       

          </ul>

         
        
          
        </div>  
        <div className="aboutuspage">
        <div id="foo1">Devkor주식회사 | 02841 서울특별시 성북구 안암로 145| 사업자등록번호: 123-12-712345</div>
        </div>

      </div>


     //   <div className="aboutuspage">
     //     <div id="foo1">Devkor주식회사 | 02841 서울특별시 성북구 안암로 145| 사업자등록번호: 123-12-712345</div>
     //     <div id="foo1">Devkor주식회사 | 02841 서울특별시 성북구 안암로 145| 사업자등록번호: 123-12-712345</div>
     //     <div id="foo1">Devkor주식회사 | 02841 서울특별시 성북구 안암로 145| 사업자등록번호: 123-12-712345</div>

       
     //   </div>
    );
}
export default AboutUs;
