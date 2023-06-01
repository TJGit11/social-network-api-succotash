const { Schema, Types, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (date) {
        date.toLocaleDateString();
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
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
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
