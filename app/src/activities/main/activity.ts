import { PageViewActivity, service } from "typescene";
import FeedbackService from "../../services/FeedbackService";
import FormActivity from "../form/activity";
import view from "./view";

export default class MainActivity extends PageViewActivity.with(view) {
    path = "/";

    @service("App.Feedback")
    feedbackService!: FeedbackService;

    yesClicked() {
        this.feedbackService.submitFeedback(true);
    }

    noClicked() {
        this.getApplication()!.showViewActivityAsync(new FormActivity());
    }
}
