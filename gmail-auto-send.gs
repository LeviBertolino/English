/**
 * Auto-send English lesson drafts created by the Claude routine.
 *
 * How it works:
 *   1. Searches Gmail Drafts for messages whose subject starts with "📚"
 *   2. Sends each matching draft
 *   3. Logs what was sent to Apps Script execution log
 *
 * Setup:
 *   - Paste this file into script.google.com (new project)
 *   - Run sendLessonDrafts() once manually to grant Gmail permissions
 *   - Add a time-driven trigger: every hour (or every 30 min)
 *     Triggers → Add Trigger → sendLessonDrafts → Time-driven → Hour timer → Every hour
 */

var SUBJECT_PREFIX = "📚";

function sendLessonDrafts() {
  var drafts = GmailApp.getDrafts();

  if (drafts.length === 0) {
    Logger.log("No drafts found.");
    return;
  }

  var sent = 0;

  for (var i = 0; i < drafts.length; i++) {
    var draft = drafts[i];
    var message = draft.getMessage();
    var subject = message.getSubject();

    if (subject.indexOf(SUBJECT_PREFIX) === 0) {
      draft.send();
      Logger.log("Sent: " + subject);
      sent++;
    }
  }

  if (sent === 0) {
    Logger.log("No lesson drafts to send (no subject starting with '" + SUBJECT_PREFIX + "').");
  } else {
    Logger.log("Done. " + sent + " draft(s) sent.");
  }
}
