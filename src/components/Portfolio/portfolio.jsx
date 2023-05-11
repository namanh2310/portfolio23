import {useState} from 'react'
import './portfolio.css'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const projects = [
  {
    title: 'Fullstack E-commerce website based on Shopee business model',
    detail: 'An e-commerce platform that is similar in functionality and design to Shopee. The platform allows sellers to create their own online stores and list their products for sale. Customers can browse and search for products, place orders, and make payments through the platform.',
    tech: 'HTML, CSS, VanillaJS, NodeJS, JQuery, MySQL',
    note: 'My role: UX/UI, authentication, database design',
    member: 3,
    img: 'https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/26c9324913c021677768c36975d635ef.png',
    link: 'https://github.com/namanh2310/WEB-Project-Shopee-Phake-FullStack'
  },

  {
    title: 'Movie Web Application based on the interface of Netflix',
    detail: 'A movie app project offer a user-friendly interface that allows users to browse, search, and discover information about movies from IMDB. It can also include features for creating user profiles, sort items by genre',
    tech: 'ReactJS, Redux tool-kit',
    note: 'My role: UX/UI, authentication',
    member: 1,
    img: 'https://media-api.advertisingvietnam.com/oapi/v1/media/4490f213-247f-4476-80aa-b4dfa9ba711b/1200x630/conver.png',
    link: 'https://github.com/namanh2310/Movie-App'

  },

  {
    title: 'Transports park license plate scanning website and mobile application',
    detail: 'A software-based solution that helps manage and optimize parking in a designated area. The system includes hardware components such as actuators. This system is integrated AI technologies for triggering the gate.',
    tech: 'ReactJS, Flutter, Flask server, Firebase, AI',
    note: "My role: UX/UI, authentication, AI integration, hardware setup",
    member: 6,
    img: 'https://pancreatic.org/wp-content/uploads/2020/04/page_car_program-1200x630.jpg',
    link: 'https://github.com/namanh2310/IoT_Project'
  },

  {
    title: 'AiMA - An AI-Based Mathematics Mobile System For Colleague Students',
    detail: 'A mathematics mobile application, which used for supporting students not only in calculus problems, but also in many specialized fields in math. This project is integrated AI technologies to optimize the user experience.',
    tech: 'React Native, Flask server, AI',
    note: "My role: UX/UI, backend handler, AI integration",
    member: 1,
    img: 'https://cdn-attachments.timesofmalta.com/161720d2d73196098f3bc7896777216ff157c89d-1651561144-5c8764f4-1200x630.jpg',
    link: 'https://github.com/namanh2310/Movie-App'
  },

]

function Portfolio() {
  const [detail, setDetail] = useState(null);
  return (
    <section id='portfolio'>
      <h5>What Did I Do?</h5>
      <h2>Portfolio</h2>

      <div 
        className='container portfolio_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
        <Swiper style={{width: '100%'}}>
        {projects.map((el, i) => (
          <SwiperSlide 
            onMouseEnter={() => setDetail({
                        title: el.title, 
                        detail: el.detail, 
                        tech: el.tech, 
                        member: el.member, 
                        role: el.note})}
            onMouseLeave={() => setDetail(null)}
            key={i} 
            className='portfolio_item'>
          <div className='portfolio_image'>
            <img src={el.img}/>
          </div>
          <div className='portfolio_text'>
            <h3>{el.title}</h3>
            <p className='text-light'>{el.tech}</p>
            <p className='small text-light'>{el.note}</p>
            <a className='btn' href={el.link}>Github</a>
          </div>
        </SwiperSlide>
        ))}
        </Swiper> 
        {detail && 
        <article className='portfolio_detail'>
          <h2>{detail.title}</h2>
          <p>{detail.detail}</p>
          <p>Member: {detail.member}</p>
          <p>Technologies: {detail.tech}</p>
          <p>{detail.role}</p>
        </article>
        }

      </div>
    </section>
  )
}

export default Portfolio