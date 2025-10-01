const joi=require("joi")
const { schema } = require("../models/Song")

exports.createValidator=joi.object({
    title:joi.string().min(3).max(30).required(),
    artist:joi.string().min(3).max(50).required(),
    category:joi.string().min(3).max(50).required(),
    album:joi.string().min(3).max(50).required(),
    url:joi.string().required(),
    photo:joi.string().required(),
    year:joi.number().min(1900).max(new Date().getFullYear()).required(),
})

exports.updateValidator=joi.object({
    title:joi.string().min(3).max(30).optional(),
    artist:joi.string().min(3).max(50).optional(),
    category:joi.string().min(3).max(50).optional(),
    album:joi.string().min(3).max(50).optional(),
    url:joi.string().uri().optional(),
    photo:joi.string().uri().optional(),
    year:joi.number().min(1900).max(new Date().getFullYear()).optional(),
})

exports.validate=(schema,data)=>{
    const{error,value}=schema.validate(data,{abortEarly:false})
    if(error){
        return{
            success:false,
            errors:error.datails.map((err)=>({
                field:err.path[0],
                message:err.message,
            }))
        }
    }
    return{success:true,value}
}