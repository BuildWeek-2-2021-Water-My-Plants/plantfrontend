import React from 'react';

const AddPlantForm = ({plantid, editing, editPlant, deletePlant}) => {
    const handleClick = (e) => {
        e.stopPropagation();
        deletePlant(color);
    }


    return(<li data-testid="plant" onClick={() => editPlant(plantid)}>
        <span>
        {
            editing && (<span className="delete" onClick={handleClick}>x</span>)
        }
        {` ${plantid.plantid}`}
        </span>
       
    </li>);
}

export default AddPlantForm;



// import { axiosWithAuth } from '../utils/axiosWithAuth';

// const initalPlant = {
//     nickname: "",
//     species: "",
//     h20: '',
//     plantimg: "",
//     user: {
//       username: "",
//       primaryemail: ''
//     }
//   }

// const AddPlantForm = (props) => {
//    const {plantsArray, updatePlants } = props;
//    const [values, setValues] = useState(initalPlant)

//     const handleChanges = (e) => {
//         e.persist();
//         if(e.target.name === "username"){
//             setValues({
//                 ...values,
//                 user: {username: e.target.value}

//             })
//         } else {
//             const {name, value} = e.target;
//             setValues({
//                 ...values,
//                 [name]: value
//             })
//         }
//     }

//     const postNewPlant = (newPlant) => {
//         axiosWithAuth()
//         .post('/users/plants', newPlant)
//         .then((res) => {
//             console.log(res)
//             updatePlants(res.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }

//     const submitValues = e => {
//         e.preventDefault()
//         const newPlant = {
//             id: Math.random(),
//             nickname: values.nickname.trim(),
//             species: values.species.trim(),
//             h20: values.h20.trim(),
//             plantimg: values.plantimg.trim(),
//             // user: {
//             //     username: values.username.trim(),
//             //     primaryemail: values.primaryemail.trim()
//             // }
//         }
//         postNewPlant(newPlant)
//         setValues(initalPlant)
//     }
//     return(
//         <div>
//             <h2>Add form:</h2>
//             <form className = 'Plant-form' onSubmit = {submitValues}>
//                 <label>Color: 
//                     <input 
//                         type = 'text'
//                         name = 'nickname'
//                         onChange = {handleChanges}
//                         value = {values.nickname}
//                         placeholder = 'enter name'
//                     />
//                 </label>
//                 <label>Species: 
//                     <input 
//                         type = 'text'
//                         name = 'species'
//                         onChange = {handleChanges}
//                         value = {values.species}
//                         placeholder = 'enter species'
//                     />
//                 </label>

//                 <label>Amount of water: 
//                     <input 
//                         type = 'text'
//                         name = 'H20'
//                         onChange = {handleChanges}
//                         value = {values.h20}
//                         placeholder = 'enter h20'
//                     />
//                 </label>

//                 <button>Submit</button>
//             </form>
//         </div>
//     )

// }

// export default AddPlantForm;