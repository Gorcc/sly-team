import React from 'react'
import "../Styles/Blog.scss"
import Blog1 from "../Assets/Blog/m1.webp"
import Blog2 from "../Assets/Blog/m2.webp"
import Blog3 from "../Assets/Blog/m3.webp"
import Blog4 from "../Assets/Blog/m4.webp"
import { useTranslation } from 'react-i18next'

const Blog = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="blog-wrap">
    <div className='blog-container'>
        <div className="blog-left">
            <img src={Blog1} alt="" />
            <img src={Blog2} alt="" />
            <video src="https://res.cloudinary.com/dvi8iejpx/video/upload/v1704475989/M5_b8gduv.mp4" autoPlay loop muted className="blog-gif" alt="" />
            <img src={Blog3} alt="" />
            <img src={Blog4} alt="" />
        </div>
        <div className="blog-right">
          <h1>{t("home.blogh")}</h1>
          <p>{t("home.blogp")}</p>
        </div>
    </div>
    <iframe width="80%" height="500" src="https://www.youtube.com/embed/2GAsJvEl85E?si=HB44DAUnoCtdSuaW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Blog