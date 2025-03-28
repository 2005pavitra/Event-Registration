import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  name: 
  { type: String, required: true 

  },

  email: { 
    type: String, 
    required: true
 },
  whatsapp: { 
    type: String,
     required: true
 },
  enrollmentNo: { 
    type: String, 
    required: true 
},
  college: { 
    type: String, 
    required: true 
},
  branch: { 
    type: String, 
    required: true
 },
  comments: { 
    type: String
 },
});

const Registration = mongoose.model("Registration", RegistrationSchema);
export default Registration;
