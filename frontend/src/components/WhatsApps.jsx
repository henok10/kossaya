// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import { useImmerReducer } from "use-immer";
// import { format, isValidNumber, parsePhoneNumberFromString } from 'libphonenumber-js';

// export default function WhatsAppButton() {
//     // const initialState = {
//     //     userProfileInfo: "",
//     //   };
    
//     // function ReducerFuction(draft, action) {
//     // switch (action.type) {   
//     //     case "catchUserProfileInfo":
//     //     draft.userProfileInfo = action.profileObject;
//     //     draft.phoneNumbers = action.profileObject.phone_number
//     //     break;
//     // }
//     // }
//     // const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);
//     const [numphoneNumber, setphoneNumbers] = useState({});
//     useEffect(() => {
//           async function GetProfileInfo() {
//             try {
//               const response = await Axios.get(
//                 `http://127.0.0.1:8000/api/profiles/pemilikKos/${state.listingInfo.user}/`
//               );
//               const phoneNumbers = response.data.filter(profileObject => profileObject.phone_number);
//               console.log(phoneNumbers)
//               setphoneNumbers(phoneNumbers);
//             } catch (e) {}
//           }
//           GetProfileInfo();
//       }, []);

    
//     // const phoneNumber = parsePhoneNumberFromString(state.userProfileInfo.phone_number, 'ID');
//     // const formattedPhoneNumber = isValidNumber(phoneNumber) ? format(phoneNumber, 'INTERNATIONAL') : '';
  
//     return (
//         <a
//         // href={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//         <button>Chat via WhatsApp</button>
//       </a>
//     );
//   }
  