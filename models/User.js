const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    },
    thoughts: [
      {
        type: Schema.Types.String,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.String,
        ref: "User",
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets and sets the user's full name
userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return this.friends.length;
  });
// Setter to set the first and last name

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
