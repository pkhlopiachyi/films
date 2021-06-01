"use strict";
const celery = require('celery-node');
const celeryClient = celery.createClient("redis://", "redis://");

module.exports = function initApp(app) {
    app.get("/video-conversion", (req, res) => {
        try {
            const timeout = 1000;
            const name = "sample-video.mp4";
            const frames = 150;

            const result = celeryClient
                .sendTask("video_conversion", [name, frames])
                .get(timeout)
                .then(data => {
                    res.json({
                    data
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    });
    return app;
};
