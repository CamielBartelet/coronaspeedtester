import mongoose from "mongoose";
import Adapters from "next-auth/adapters";

// Extend the built-in models using class inheritance
export class User extends Adapters.TypeORM.Models.User.model {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  constructor(name, email, image, emailVerified) {
    super(name, email, image, emailVerified);
  }
}

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    nullable: true,
  },
  email: {
    // This is inherited from the one in the OAuth provider profile on
    // initial sign in, if one is specified in that profile.
    type: String,
    unique: true,
    nullable: true,
  },
  emailVerified: {
    // Contains a timestamp of the last time an action was performed that
    // confirmed this email address was active and used by the user (e.g.
    // when an email sign in link is clicked on and verified). Is null
    // if the email address specified has never been verified.
    type: Date,
    nullable: true,
  },
  image: {
    // A URL that points to an avatar to use for the user.
    // This is inherited from the one in the OAuth provider profile on
    // initial sign in, if one is specified in that profile.
    type: Date,
    nullable: true,
  },
  createdAt: {
    type: Date,
    createDate: true,
  },
  updatedAt: {
    type: Date,
    updateDate: true,
  },
  // Adds a phoneNumber to the User schema
  phone: {
    type: String,
    nullable: true,
  },
  bsnnumber: {
    type: Number,
    nullable: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
