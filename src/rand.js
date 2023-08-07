function rand(messages){
    let randomIdx = Math.floor(Math.random() * messages.length);
    return messages[randomIdx]
}
export {rand};