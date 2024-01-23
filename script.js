const adviceBtn = document.querySelector('.advice-generator__btn-img');
const adviceNumber = document.querySelector('.advice-container__advice-number')
const adviceQuoteText = document.querySelector('.advice-container__advice-quote')

const fetchRandomAdvice = async()=>{
    // fetch data from API
    const response = await fetch ("https://api.adviceslip.com/advice")
    const data = await response.json()
    console.log(data)
    //getting the slip object from the data and storing in advice variable
    const advice = data.slip
    console.log(advice)
    //accessing the properties 
    adviceNumber.textContent = `ADVICE #${advice.id}`
    adviceQuoteText.textContent = `"${advice.advice}"`
}
adviceBtn.addEventListener("click",fetchRandomAdvice);