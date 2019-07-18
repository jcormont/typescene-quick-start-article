import { BrowserApplication } from "@typescene/webapp";
import MainActivity from "./activities/main/activity";
import FeedbackService from "./services/FeedbackService";

// start an instance of the feedback service
new FeedbackService().register();

// find the root element, and start the app
const root = document.getElementById("rating-root");
if (root) {
    const RatingApp = BrowserApplication.with(MainActivity);
    new RatingApp(root).activate();
}