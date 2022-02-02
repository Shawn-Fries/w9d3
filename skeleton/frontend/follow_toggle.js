function FollowToggle (el) {
    const $el = $('.follow-toggle');
    this.userId = $el.user-id;
    this.followState = $el.initial-follow-state;
    render($el);
}

FollowToggle.prototype.render = function(el) {
    if (el.followState) {
        el.append(<p>"Follow!"</p>);
    } else {
        el.append(<p>"Unfollow!"</p>);
    }
}

module.exports = FollowToggle;