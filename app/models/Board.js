export default function BoardModel(mongoose) {
    const boardSchema = mongoose.Schema({
        subject: String,
        title: String,
        contents: String,
    }, {timestamps: true})
    return mongoose.model('Board', boardSchema)
}

