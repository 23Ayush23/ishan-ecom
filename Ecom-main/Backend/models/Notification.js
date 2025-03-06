const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
    {
        message: { type: String, required: true },
        user: { type: String, required: true },
        orderId: { type: String, required: true },
        read: { type: Boolean, default: false }, 
    },
    {
        timestamps: true, 
    }
);


notificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 172800 });

module.exports = mongoose.model("Notification", notificationSchema);
