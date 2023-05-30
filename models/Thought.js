const { Schema, model } = require("mongoose");
// was Thought
const Reaction = require("./Reaction");

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    tags: [Tag],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getTags` that gets the amount of tags associated with an thought
thoughtSchema
  .virtual("getResponses")
  // Getter
  .get(function () {
    return this.tags.length;
  });

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
