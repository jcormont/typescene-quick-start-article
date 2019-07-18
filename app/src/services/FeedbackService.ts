import { CHANGE, ManagedService } from "typescene";

export default class FeedbackService extends ManagedService {
    name = "App.Feedback";

    /** True if feedback has been submitted */
    submitted = false;

    /** Submit given positive/negative feedback */
    submitFeedback(positive: boolean, label?: string) {
        // set boolean property and update view first
        this.submitted = true;
        this.emit(CHANGE);

        // submit feedback in the background,
        // e.g. using Google Analytics events:
        // (window as any).ga("send", {
        //     hitType: "event",
        //     eventCategory: "Feedback",
        //     eventAction: positive ? "good" : "bad",
        //     eventLabel: label || "None"
        // });
        console.log("Submitted", positive, label || "None");
    }
}
