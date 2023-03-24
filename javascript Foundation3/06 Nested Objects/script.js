function extractNameAndStreet({ name, address: { street } }) {
  return { name, street };
}

const person = {
  name: 'Md Tanjim',
  address: {
    street: 'New Delhi Rd',
    
  }
};
const { name, street } = extractNameAndStreet(person);
console.log(name) // 'Md Tanjim'
console.log(street) //'New Delhi Rd'