const Schema = require("mongoose").Schema;

module.exports = new Schema({
    start: { type: String, required: true },
    end: { type: String, required: true },
    basketballFieldId: { type: String, required: true },
    registeredPlayers: [{ type: String, required: true }],
    hostId: { type: Schema.Types.ObjectId, ref: 'Player', required: true },
    deleted: { type: Boolean, default: false }
});
