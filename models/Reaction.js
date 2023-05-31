const { Schema, Types } = require("mongoose");
// was Tag

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 250,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (date) {
        date.toLocaleDateString();
      },
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = { reactionSchema };
