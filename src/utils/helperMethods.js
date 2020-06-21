export const decodeText = str => decodeURIComponent((str || '').replace(/\+/g, '%20')) // to decode the question data in readable format
