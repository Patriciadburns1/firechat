import types from './types'; 

export function updateChatMessages(snapshot){
    const messages = []; 
    snapshot.forEach(document => {
        const doc = document.data();
        doc.id =document.id; 
        messages.push(doc); 
    }); 
    // console.log("Messages in Action Creator", messages); 

    return{
        type: types.UPDATE_CHAT_MESSAGES,
        messages
    }
}