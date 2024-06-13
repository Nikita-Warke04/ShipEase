import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = mongoose.Schema({
    _id: Number,
    catnm: {
        type: String,
        required: [true,"Category name is required"],
        unique : true,
        lowercase : true,
        trim: true,
    },
    caticonnm:{
        type: String,
        required: [true,"Category icon name is required"],
        lowercase: true,
        trim: true,
    }

});
// Apply the uniqueValidator plugin to UserSchema.
CategorySchema.plugin(uniqueValidator);
 
const CategorySchemaModel= mongoose.model('category_collection',CategorySchema);

export default CategorySchemaModel;