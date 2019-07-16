import { bind, UICoverCell, UILabel, UIOutlineButton, UIRow } from "typescene";

export default UICoverCell.with(
    UIRow.with(
        { hidden: bind("feedbackService.submitted") },
        UIOutlineButton.withLabel("Yes", "yesClicked()"),
        UIOutlineButton.withLabel("No", "noClicked()")
    ),
    UIRow.with(
        { hidden: bind("!feedbackService.submitted") },
        UILabel.withText("Thank you for your feedback!")
    )
)
