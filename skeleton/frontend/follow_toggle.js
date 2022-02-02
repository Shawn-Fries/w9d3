class FollowToggle  {
    // const $el = $('.follow-toggle');

    constructor (el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        if (this.$el.data("initial-follow-state") === true) {
            this.followState = "followed";
        } else {
            this.followState = "unfollowed";
        };        
        this.render();
    }

    render() {
        if (this.followState === "followed") {
            this.$el.text(`Unfollow!`);
            // el.value.append($`("Follow!")`);
        } else if (this.followState === "unfollowed") {
            this.$el.text(`Follow!`);
            // el.value.append($`("Unfollow!")`);
        };
    };
};

module.exports = FollowToggle;