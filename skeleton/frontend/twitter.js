const FollowToggle = require('./follow_toggle.js')



$(function () {
    $("button.follow-toggle").each((id, ele) => new FollowToggle(ele))
});

