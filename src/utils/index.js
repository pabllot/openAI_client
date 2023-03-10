import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants'

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.floor(Math.random() * surpriseMePrompts.length))
    const randomPrompt = surpriseMePrompts[randomIndex]
    

    //check to not get the same two times in a row
    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;

}

export const downloadImage = async (_id, photo) => {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}