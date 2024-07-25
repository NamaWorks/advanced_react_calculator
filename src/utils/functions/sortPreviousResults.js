export const sortPreviousResults =(previousResults)=>{
  let newArr = [...previousResults]
  return newArr.sort((a,b)=> b-a)
}