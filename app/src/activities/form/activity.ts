import { DialogViewActivity, ManagedRecord, service } from "typescene";
import FeedbackService from "../../services/FeedbackService";
import view, { OPT_FIELDS } from "./view";

export default class FormActivity extends DialogViewActivity.with(view) {
    @service("App.Feedback")
    feedbackService!: FeedbackService;

    formInput: any = new ManagedRecord();

    close() {
        this.destroyAsync();
    }

    submit() {
        let label = Object.keys(OPT_FIELDS)
            .filter((s: any) => this.formInput[OPT_FIELDS[s]]);
        this.feedbackService.submitFeedback(false,
            label.join("_"));
        this.close();
    }
}
