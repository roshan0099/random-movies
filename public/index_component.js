var display_block = document.getElementById('display')

//loading text to show up until the fetching has been done successfully 
const loading = document.createElement('div')
loading.innerHTML = 'Lazy loading....'
loading.style.textAlign = 'center'
loading.style.fontSize = "40px"
loading.style.paddingTop = "40px"
loading.style.color = "rgb(171, 173, 180)"
main.appendChild(loading)


//function to fetch random_movies from back end
async function fetch_random_movies(){

	
	const movies = await fetch("/movie")
	const movies_array = await movies.json()
	console.log(movies.ok)
	console.log(movies_array)

	console.log(movies_array.details[0])
	if(movies.ok)
	{	
	loading.innerHTML = " "
	//display title
	const title = document.createElement('div')
	title.style.textAlign = 'center'
	title.style.padding = '0px 20px'
	title.innerHTML = movies_array.details[0].title
	
	title.style.fontFamily = "Bradley Hand, cursive"
	display_block.appendChild(title)


	//diaplay plot
	const plot = document.createElement('div')
	plot.setAttribute('id','plot')
	plot.innerHTML = movies_array.details[0].plot
	plot.style.textAlign = "center"
	plot.style.fontFamily = "OCR A Std, monospace"
	display_block.appendChild(plot)
}

}

window.onload = fetch_random_movies

