import {useState} from 'react'

const AddTransaction = () => {
const [text, settext] = useState('');
const [amount, setamount] = useState('');
  return (
    <>

<h3 className="">Add new transaction</h3>
<form  id="form mb-3">

        <label htmlFor="text" className='mt-2 mb-2 fw-bold'>Text</label>
        <input type="text" className='form-control text-light px-3  input p-2 bg-transparent' value={text} onChange={(e) => settext(e.target.value)} placeholder='Enter text...'  />
   
        <label htmlFor="amount" className='mb-2 mt-2 fw-bold '>Amount <br /> (negative - expense, positive -income)</label>
        <input type="text" className='form-control text-light px-3  input p-2 bg-transparent' value={amount} onChange={(e) => setamount(e.target.value)} placeholder='Enter amount...'  />
  
</form>

    </>
  )
}

export default AddTransaction