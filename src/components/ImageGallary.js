import React,{useState,useEffect} from 'react'
import '../assets/main.css'

function  SearchBar({searchText}){

	const [text,setText]=useState('')
	const onSubmit=(e)=>{
		e.preventDefault();
		searchText(text);
	}
	return(
	<form onSubmit={onSubmit} className="">
  	<div className="">
    <input onChange={e=>setText(e.target.value)} className="" type="text" placeholder="Search" aria-label="Full name"/>
    <button className="" type="submit">
      Search
    </button>

  </div>
</form>
		)
}

function ImageCard({image}){
	const tags=image.tags.split(',')

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<img src={image.webformatURL} alt="" className="w-full"/>
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">
					Photo by {image.user}
				</div>
				<ul>
					<li><strong>Views:</strong>{image.views}</li>
					<li><strong>Likes:</strong>{image.likes}</li>
					<li><strong>Downloads:</strong>{image.downloads}</li>
				</ul>
			</div>
			<div className="px-6 py-4">
				{tags.map((tag,index)=>(
					<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2">
				#{tag}
				</span>
					))}
				

			</div>
		</div>
		)	
}

function ImageGallary(){
	const[images,setImages]=useState([]);
	const[isLoading,setIsLoading]=useState(true);
	const [term,setTerm]=useState('');

	useEffect(()=>{
		fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
		.then(res=>res.json())
		.then(data=>{
			setImages(data.hits);
			setIsLoading(false);
		})
		.catch(err=>console.log(err)); 
	},[term])

	return (
		<div className="container mx-auto">
		<SearchBar searchText={(text)=>setTerm(text)}/>
		 {!isLoading && images.length===0 &&<h1 className="text-5xl text-center mx-auto mt-32">Image Not found</h1>}
		 {isLoading?<h1>LOADING</h1>
		 	:<div className="grid grid-cols-3 gap-4">
		 			 	{images.map(image=>(
		 			 		<ImageCard key={image.id} image={image}/>))}
		 		</div>}
		</div>
		)
}


export default ImageGallary