class FeelingStatesModel {
    positive: string;
    negative: string;
    neutral: string;
    constructor() {
        this.positive = ':smiley:';
        this.negative = ':angry:';
        this.neutral = ':neutral_face:';
    };
}
export let feelingStatesModel = new FeelingStatesModel();