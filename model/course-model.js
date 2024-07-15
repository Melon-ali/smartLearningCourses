import mongoose, {Schema} from "mongoose";

const courseSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    thumbnail: {
        required: true,
        type: String
    },
    modules: [{
        type: Schema.ObjectId, ref: "Module"
    }],
    price: {
        required: true,
        type: Number
    },
    active: {
        required: true,
        type: Boolean
    },
    category: {
        type: Schema.ObjectId, ref: "Category"
    },
    instructor: {
        type: Schema.ObjectId, ref: "User"
    },
    quizzes: {
        required: false,
        type: Schema.ObjectId
    },
    testimonials: [{
        type: Schema.ObjectId, ref: "Testimonial"
    }],
});

// আমাকে check করতে হবে যে এ model টা already iniceated কি না ? যদি ইনিসিয়েটেড হয়ে থাকে তাহলে same model --> mongoose.models.Course কে আমরা  ইনিসিয়েটেড return করবো আর ইনিসিয়েটেড না হয়ে থাকে তাহলে ? নতুন model create --> mongoose.model("Course", courseSchema করবো । 
export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);