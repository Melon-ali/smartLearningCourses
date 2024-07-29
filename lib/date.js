// export const formatMyDte = (date) => {
//     let options = {
//         year: "neumeric",
//         month: "shot",
//         day: "neumeric"
//     };

//     const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
//     return formattedDate;
// }

export const formatMyDate = (date) => {
  let options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
  return formattedDate
}
