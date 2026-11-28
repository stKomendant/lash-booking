import s from "./teacher.module.css"

const Teacher = () => {
    return(
        <div className={s.teacher_container}>
        <section className="container">
            <div className={s.teacher_description}>
            <h2 className={s.teacher_logo}>K</h2>
            <div className={s.teacher}>
                <h2 className={s.your_teacher}>Your teacher, Katrin</h2>
                <p className={s.about_teacher}>[A few sentences about Katrin: how long she has been a lash artist, how many sets she has done, why she teaches.]</p>
            </div>
            </div>
        </section>
        </div>
    )
}

export default Teacher;