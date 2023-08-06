// import pj1Img from '../img/pj1Filler.png'
// import pj2Img from '../img/pj2Filler.png'
// import pj3Img from '../img/pj3Filler.png'
// import pj4Img from '../img/pj4Filler.png'

const pj1 = {
    name:"Project1",intro:"PJ1 is about sososo.",img:"'../img/pj1Filler.png'",git:"https://github.com/potatomon0/calculator"
}
const pj2={
    name:"Project2",intro:"PJ2 is about thatthatthat",img:"pj2Img"
}
const pj3={
    name:"Project3",intro:"ItItIt is PJ3",img:"pj3Img"
}
const pj4={
    name:"Project4",intro:"ThisThisThis is PJ4",img:"pj4Img"
}

module.exports = [pj1,pj2,pj3,pj4]

// {projectInfo.map((project,i) => {
//     const {name, intro, img} = project
//     console.log(intro)
//     return(
//       <Link to={`/ProjectInfo/${intro}`} key={i}>
//         <div className="project">
//           <div><img src={project.img} alt="" className="pjImg"/>
//           </div>{project.name}</div>
//         </Link>)}
//         )}