const $form = document.getElementById('form')
const $input = `<label for="">Title:</label>
<br><input type="text" id='title'>`
const $selection = `<br><label>Year</label>
                    <br><select id='year'></select>
                    <br><label>Month</label>
                    <br><select id='month'></select>
                    <br><label>Date</label>
                    <br><select id='date'></select>
                    <button id="countdown" type="submit">Let's Countdown</button>
                    
`
const form = $input + $selection
$form.innerHTML = form

const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $date = document.getElementById('date')
const $title = document.getElementById('title')
const $result = document.getElementById('result')

const dayinMonths = [31,28,31,30,31,30,31,31,30,31,30,31]

let years = []
for(let i = 2020; i<=2050; i++){
    years.push(`<option>${i}</option>`)
}
$year.innerHTML = years.join('')

let months = []
for(let i = 1; i<=12;i++){
    months.push(`<option>${i}</option>`)
}
$month.innerHTML = months.join('')



$month.addEventListener('change',function(){
    let days = []
    for(let i =1; i<= dayinMonths[$month.value - 1];i++){
        days.push(`<option>${i}</option>`)
    }
    $date.innerHTML = days.join('')
})



let DateTime = luxon.DateTime
let now = DateTime.local()
let day
$form.addEventListener('submit',function(event){
    event.preventDefault()
    let date = DateTime.fromObject(
        {
            year:$year.value,
            month:$month.value,
            day:$date.value
        }
    )
    localStorage.setItem('future',date.toISO())
    localStorage.setItem('title',$title.value)
})

function appear(){
    document.getElementById('result').innerHTML = localStorage.getItem('titleLocal')
    day = DateTime.fromISO(localStorage.getItem('futureDay'))
    setInterval(function(){
        
    })

}
