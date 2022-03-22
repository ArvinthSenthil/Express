import { ObjectId } from "mongodb";
import { client } from "./index.js";


export async function getMovieById(id) {
    return await client.db("b30wd").collection("movies").findOne({ _id:ObjectId(id ) });
}

export async function postMovie(data) {
    return await client.db("b30wd").collection("movies").insertMany(data);
}

export async function editMovie(id, updateData) {
    return await client.db("b30wd").collection("movies").updateOne({ _id:ObjectId(id )}, { $set: updateData });
}

export async function deleteOneMovie(id) {
    return await client.db("b30wd").collection("movies").deleteOne({ _id:ObjectId(id ) });
}

export async function deleteAllMovies() {
    return await client.db("b30wd").collection("movies").deleteMany({});
}

export async function getAllMovies() {
    return await client.db("b30wd").collection("movies").find({}).toArray();
}
export async function createUser(data) {
    return await client.db("b30wd").collection("users").insertOne(data);
}
export async function getUserbyname(username) {
    return await client.db("b30wd").collection("users").findOne({username:username});
}