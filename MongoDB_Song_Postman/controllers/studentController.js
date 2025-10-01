const Song=require("../models/Song")

exports.index=(req,res)=>{
    Song.find()
        .then((allSongs)=>{
            console.log("All songs retrived succefully:",allSongs)
            res.send({message:"Songs retrived successfully:",data:allSongs})   
        }).catch((error)=>{
            console.error("Error retrieving songs:",error)
        })
}
exports.show=(req,res)=>{
    //Song.find({_id:req.params.id})
    Song.findById(req.params.id)
        .then((Song)=>
        {
            console.log("All songs retrived succefully:",allSongs)
            res.send({message:"Songs retrived successfully:",data:allSongs})   
        }).catch((error)=>{
            console.error("Error retrieving songs:",error)
        })
}

exports.store=(req,res)=>{
    const newSong=new Song({
        title:req.body.title,
        artist:req.body.artist,
        category:req.body.category,
        album:req.body.album,
        url:req.body.url,
        photo:req.body.photo,
        year:req.body.year,
    })
    newSong
        .save()
        .then(()=>{
            console.log("New song added successfully")
        }).catch((error)=>{
            console.error("Error adding new song:",error)
        })
        res.send({message:"Data stored successfully",data:newSong})
}

exports.update=(req,res)=>{
    Song.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((updatedSong)=>{
            console.log("Songs updated successfully:",updatedSong)
            res.send({message:"Songs updated successfully:",data:updatedSong})   
        }).catch((error)=>{
            console.error("Error updating song:",error)
        })
}
exports.delete=(req,res)=>{
    Song.findByIdAndDelete(req.params.id)
        .then(()=>{
            console.log("Songs deleted successfully:")
            res.send({message:"Songs deleted successfully:"})   
        }).catch((error)=>{
            console.error("Error updating song:",error)
        })
}
