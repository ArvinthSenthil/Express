import express from "express";
import { response } from "express";
import { getMovieById,postMovie,editMovie,deleteOneMovie,deleteAllMovies,getAllMovies } from "../helper.js";
const router=express.Router();
import {auth} from "../Middleware/auth.js";



// local data movies
// router.get("/movies",function(request,response){
//     response.send(movies);
// });

// getting movies data from mongoDB database
router.get("/:id",async function(request,response){
    console.log(request.params);
    const {id}= request.params;
    // const movie=movies.find((mv)=>mv.id===id);
    const movie=await getMovieById(id)
  movie ? response.send(movie) : response.status(404).send({message:"No such movie found"})
});

// Find movies data in mongoDB
router.get("/",auth,async function(request,response){
    const find=await getAllMovies()
    response.send(find)
    
});

// Delete all movies in mongoDB 
router.delete("/delete",async function(request,response){
    const del=await deleteAllMovies()
    response.send(del)
});

// Delete one movie in mongoDB 
router.delete("/:id",async function(request,response){
    console.log(request.params);
    const {id}= request.params;
    const delone=await deleteOneMovie(id)
   response.send(delone) 
});

//  Edit movie details in mongoDB 
router.put("/:id",async function(request,response){
    console.log(request.params);
    const {id}= request.params;
    const updateData=request.body;
    const edit=await editMovie(id, updateData)
   response.send(edit) 
});


// Posting data in mongoDB database
router.post("/post",async function(request,response){
    const data=request.body;
    console.log(data);
const result= await postMovie(data);
response.send(result);
})
export const moviesRouter=router;