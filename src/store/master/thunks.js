import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { saveMessage, savingNewMessage } from "./contactoSlice";


export const startSaveMessage = (messageObj) => {
    return async (dispatch, getState) => {

        try {
            // mensaje de carga
            dispatch(savingNewMessage());

            const doc = await addDoc(collection( FirebaseDB , 'master/contacto/mensajes'), messageObj);
            console.log("Document written with ID: ", doc);

            //! dispatch
            dispatch(saveMessage());


        } catch (error) {
            console.log(error);
        }

    }
}