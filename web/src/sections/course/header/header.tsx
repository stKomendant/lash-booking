import s from "./header.module.css"

const Header = () => {
return(
<section className={s.hero}>
<div className="container">
  <div className={s.logo}>
    <p className={s.logo_test}>Katrin</p>
    <span>
      online course
    </span>
  </div>
   <div className={s.main_title}>
    <h1 className={s.title}>The Classic Lash Course</h1>
    <p className={s.description}> Learn to create soft, natural classic sets — step by step, at your own pace.</p>
    <button className={s.booking_button}>buy the course</button>
   </div>
  </div>
</section>
)
}
export default Header;