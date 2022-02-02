function FollowToggle (el) {
    const $el = $('.follow-toggle');
    this.userId = $el.user-id;
    this.followState = $el.initial-follow-state;
}

module.exports = FollowToggle;