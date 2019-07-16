import { bind, UIColumn, UIFlowCell, UIFormContextController, UIHeading2, UILabel, UILinkButton, UIOppositeRow, UIPrimaryButton, UIRow, UISpacer, UIToggle } from "typescene";

export enum OPT_FIELDS {
    ArticleTooLong = "tooLong",
    NotEnoughDetail = "lackDetail",
    Incorrect = "incorrect"
}

export default UIFormContextController.with(
    { formContext: bind("formInput") },
    UIFlowCell.with(
        {
            position: { gravity: "center" },
            dimensions: { width: 320 },
            background: "@background",
            dropShadow: 1,
            borderRadius: 8,
            padding: 16
        },
        UIColumn.with(
            UIRow.with(UIHeading2.withText("Feedback")),
            UIRow.with(UILabel.withText("Please let us know what’s wrong:")),
            UIToggle.with({
                name: OPT_FIELDS.ArticleTooLong,
                label: "Article is too long",
            }),
            UIToggle.with({
                name: OPT_FIELDS.NotEnoughDetail,
                label: "Not enough detail",
            }),
            UIToggle.with({
                name: OPT_FIELDS.Incorrect,
                label: "Contains incorrect information",
            }),
            UISpacer,
            UIOppositeRow.with(
                UILinkButton.withLabel("Cancel", "close()"),
                UIPrimaryButton.withLabel("Submit", "submit()")
            )
        )
    )
)
