import axios from 'axios'
import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'



export default function Home() {

  const [dbBook, setdbBook] = useState()

  
  useEffect(()=>{

    const resDB = async () =>{
      const booksDB = await axios.get("http://localhost:3001/database")
      setdbBook(booksDB.data)
    }
    
    
    resDB()
  },[])
  
  


    return (
    <>
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          dbBook === undefined?(<p>Cargando</p>):(
            dbBook.map((e,id)=>{
              return(
                <>
              <Link to={`/book/${e._id}`}>
              <li key={id} class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="w-60 h-60 flex-shrink-0 mx-auto bg-black rounded-md" src={e.image} alt={e.title}/>
                <h3 class="mt-6 text-gray-900 text-sm font-medium">{e.title}</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dd class="text-gray-500 text-sm">{e.author}</dd>
                </dl>
              </div>
              <div>
              </div>
            </li>
            </Link>
            </>
            )
            })
          )
          
        }
      </ul>

    </>
    )
}


