import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from "react";

// function App() {
//     var count = 0;
//     const [Counter, countUpdate] = useState(0);
//     function Counter() {
//         countUpdate(count++)
//     }

//   return (
//     <div className="App">
//         <div>
//             <button onClick={Counter}> 
//             Click ME
//             </button>
//             <p> {count} </p>
//         </div>


//         {/* <div class="profile">
//             <img className="profile-img" src={`../public/profile.png`} alt="profile-image" />
//                 <p className="profile-desc" >Hi, I am a software engineer! currently workin from home.</p>
//         </div>

//         <div class="content-flex">
//             <div class="content-flex-common content-flex-skill">
//                 <h4>Skills</h4>
//                 <p>John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no. Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.</p>
//                 <p>Few of the skills</p>
//                 <ul class="content-flex-skill-list" >
//                     <li>ABCD</li>
//                     <li>EFGH</li>
//                     <li>IJKL</li>
//                     <li>MNOP</li>
//                 </ul>
//             </div>
//             <div class="content-flex-common content-flex-contact">
//                 <h4>Contact</h4>
//                 <p>John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no. Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.</p>
//             </div>
//             <div class="content-flex-common content-flex-project">
//                 <h4>Projects</h4>
//                 <p>John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no. Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.</p>
//             </div>
//             <div class="content-flex-common content-flex-forward">
//                 <h4>What am I looking our for</h4>
//                 <p>John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no. Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.</p>
//                 <p>John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him.</p>
//             </div>
//         </div> */}
//     </div>
//   );
// }

// export default App;

function Header() {

    const [res, setRes] = useState("");

    const fetchData = async function () {
        var parsedResponse = ""
        try {
          const response = await axios.post('https://api.openai.com/v1/completions',
            {
                prompt: "hello",
                model: 'text-davinci-003',
                max_tokens: 200
            }, 
            {
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                } 
            }    
          );
            setRes(response.data.choices[0].text);
        } catch (error) {
          console.log(error);
        }

        //setRes(response.data.choices[0].text);
;
      }

    return (
        <div>
            <input></input>
            <br />
            <br />
            <button onClick= {fetchData}> Chat GPT </button> 
            <p> {res} </p>
        </div>
      
    );
}
export default Header;
