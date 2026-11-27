import s from "./programme.module.css"
import {programmeData} from "./programme-data"

const Programme = () => {
return(
    <section className="container">
    <p className={s.programme_logo}>Programme</p>

    <div>
    <h2 className={s.programme}>What you'll learn</h2>

     <ol className={s.list_programme}>
      {programmeData.map((data) =>
       <li className={s.item_programme} id={data.id}>
        <p className={s.programe_description}>{data.logo}</p>
        <p className={s.programe_descriptiond}>{data.discription}</p>
       </li>
      )}
     </ol>
     
    </div>
    </section>
)
}

export default Programme